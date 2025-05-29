import { Server } from 'socket.io';

let io;

export default function handler(req, res) {
  if (!res.socket.server.io) {
    io = new Server(res.socket.server, {
      path: '/api/socket',
      addTrailingSlash: false,
      cors: {
        origin: '*',
      },
    });
    res.socket.server.io = io;

    io.on('connection', (socket) => {
      // Xonaga qo'shilish
      socket.on('join-room', ({ roomId, player }) => {
        socket.join(roomId);
        io.to(roomId).emit('player-joined', { player });
      });

      // Testni boshlash
      socket.on('start-quiz', ({ roomId, quizData }) => {
        io.to(roomId).emit('quiz-started', { quizData });
      });

      // Javob yuborish
      socket.on('answer', ({ roomId, player, answer, questionIndex }) => {
        io.to(roomId).emit('player-answered', { player, answer, questionIndex });
      });

      // Testni tugatish
      socket.on('finish-quiz', ({ roomId, results }) => {
        io.to(roomId).emit('quiz-finished', { results });
      });
    });
  }
  res.end();
} 