import { Server } from 'socket.io';
import { quizData } from '../../quizData'; // Import quiz data on the server

let io;
let rooms = {}; // room structure: { players: [], moderator: '', answers: { playerName: { questionIndex: { answer: '...', timestamp: '...' } } }, quizData: [], quizStartTime: null }

// Add shuffle function (same as the one used for solo quiz)
const shuffleQuestionsAndOptions = (questions) => {
  return questions.map(question => ({
    ...question,
    options: [...question.options].sort(() => Math.random() - 0.5) // Shuffle options
  })).sort(() => Math.random() - 0.5); // Shuffle questions
};

export default function handler(req, res) {
  if (!res.socket.server.io) {
    io = new Server(res.socket.server, {
      path: '/api/socket',
      addTrailingSlash: false,
      cors: { origin: '*' },
    });
    res.socket.server.io = io;

    io.on('connection', (socket) => {
      socket.on('join-room', ({ roomId, player }) => {
        socket.join(roomId);
        socket.playerName = player;
        if (!rooms[roomId]) {
          rooms[roomId] = { players: [], moderator: player, answers: {}, quizData: [], quizStartTime: null };
        }
        if (!rooms[roomId].players.includes(player)) {
          rooms[roomId].players.push(player);
        }
        // Send current players and moderator state to new joiner
        io.to(socket.id).emit('players-update', {
          players: rooms[roomId].players,
          moderator: rooms[roomId].moderator,
        });
        // Broadcast updated players list to everyone else in the room
         socket.to(roomId).emit('players-update', {
          players: rooms[roomId].players,
          moderator: rooms[roomId].moderator,
        });
      });

      socket.on('transfer-moderator', ({ roomId, toPlayer }) => {
        if (rooms[roomId] && rooms[roomId].players.includes(toPlayer)) {
          rooms[roomId].moderator = toPlayer;
          io.to(roomId).emit('moderator-changed', toPlayer);
           io.to(roomId).emit('players-update', {
            players: rooms[roomId].players,
            moderator: rooms[roomId].moderator,
          });
        }
      });

      socket.on('start-quiz', ({ roomId }) => { // No longer receiving quizData from client
        if (rooms[roomId] && rooms[roomId].moderator === socket.playerName) {
            // Shuffle quiz data on the server
            const shuffledQuizData = shuffleQuestionsAndOptions(quizData);
            rooms[roomId].quizData = shuffledQuizData; // Save shuffled quiz data on backend
            rooms[roomId].answers = {}; // Reset answers
            rooms[roomId].quizStartTime = Date.now(); // Record quiz start time
            // Send shuffled quiz data to all clients in the room
            io.to(roomId).emit('quiz-started', { quizData: shuffledQuizData });
        }
      });

      socket.on('answer', ({ roomId, player, answer, questionIndex }) => {
        if (rooms[roomId]) {
            if (!rooms[roomId].answers[player]) {
                rooms[roomId].answers[player] = {};
            }
            // Only record the first answer for a given question by a player
            if (!rooms[roomId].answers[player][questionIndex]) {
                 rooms[roomId].answers[player][questionIndex] = { answer, timestamp: Date.now() };
                 // Optionally, broadcast that a player answered
                 io.to(roomId).emit('player-answered', { player, questionIndex });
            }
        }
      });

      socket.on('finish-quiz', ({ roomId }) => {
        if (rooms[roomId] && rooms[roomId].moderator === socket.playerName) {
           // Calculate results and ranking
           const results = calculateResults(roomId);
           io.to(roomId).emit('quiz-finished', { results });
           // Optionally reset room state for a new game or remove room
           // delete rooms[roomId]; // Or reset relevant fields for a new game
        }
      });

      socket.on('disconnect', () => {
        for (const roomId in rooms) {
          const idx = rooms[roomId].players.indexOf(socket.playerName);
          if (idx !== -1) {
            rooms[roomId].players.splice(idx, 1);
            // If moderator leaves, assign new moderator
            if (rooms[roomId].moderator === socket.playerName) {
              rooms[roomId].moderator = rooms[roomId].players[0] || '';
              io.to(roomId).emit('moderator-changed', rooms[roomId].moderator);
            }
            // Clean up answers for the disconnected player
            delete rooms[roomId].answers[socket.playerName];

            // If room is empty, clean it up
            if (rooms[roomId].players.length === 0) {
                delete rooms[roomId];
                 console.log(`Room ${roomId} is empty and deleted.`);
            } else {
               io.to(roomId).emit('players-update', {
                 players: rooms[roomId].players,
                 moderator: rooms[roomId].moderator,
               });
            }
          }
        }
      });
    });

    // Helper function to calculate results and ranking
    const calculateResults = (roomId) => {
        const room = rooms[roomId];
        if (!room || !room.quizData || !room.answers) return [];

        const playerScores = {};
        const playerLastAnswerTime = {}; // To track speed for tie-breaking

        for (const player in room.answers) {
            let correctCount = 0;
            let lastAnswerTime = 0;
            const answers = room.answers[player];
            for (let i = 0; i < room.quizData.length; i++) {
                const questionAnswer = answers[i];
                if (questionAnswer && questionAnswer.answer === room.quizData[i].correct) {
                    correctCount++;
                }
                 if (questionAnswer && questionAnswer.timestamp > lastAnswerTime) {
                     lastAnswerTime = questionAnswer.timestamp;
                 }
            }
            playerScores[player] = correctCount;
            playerLastAnswerTime[player] = lastAnswerTime > 0 ? lastAnswerTime : Infinity; // Players who didn't answer get Infinity time
        }

        // Sort players: first by score (descending), then by last answer time (ascending)
        const rankedPlayers = Object.keys(playerScores).sort((a, b) => {
            if (playerScores[b] !== playerScores[a]) {
                return playerScores[b] - playerScores[a]; // Higher score first
            } else {
                // Tie-breaker: earlier last answer time first
                return playerLastAnswerTime[a] - playerLastAnswerTime[b];
            }
        });

        // Format results for frontend
        const results = rankedPlayers.map(player => ({
            name: player,
            score: playerScores[player],
            totalQuestions: room.quizData.length
        }));

        return results;
    };

  }
  res.end();
}