import { useEffect, useState, useRef } from 'react';
import { quizData } from '../quizData';
import { io } from 'socket.io-client';

const SOCKET_URL = typeof window !== 'undefined' ? window.location.origin : '';

export default function GroupQuiz() {
  const [step, setStep] = useState('lobby'); // lobby, waiting, quiz, result
  const [roomId, setRoomId] = useState('');
  const [player, setPlayer] = useState('');
  const [players, setPlayers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [allAnswers, setAllAnswers] = useState({});
  const socketRef = useRef(null);

  // Connect to socket
  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io(SOCKET_URL, { path: '/api/socket' });
    }
    const socket = socketRef.current;

    socket.on('players-update', ({ players }) => {
      setPlayers(players);
    });
    socket.on('quiz-started', () => {
      setStep('quiz');
      setQuizStarted(true);
    });
    socket.on('player-answered', ({ player, answer, questionIndex }) => {
      setAllAnswers((prev) => ({
        ...prev,
        [player]: {
          ...(prev[player] || {}),
          [questionIndex]: answer,
        },
      }));
    });
    socket.on('quiz-finished', ({ results }) => {
      setShowResult(true);
      setAllAnswers(results);
      setStep('result');
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  // Join room
  const handleJoinRoom = () => {
    if (!roomId || !player) return;
    socketRef.current.emit('join-room', { roomId, player });
    setStep('waiting');
  };

  // Start quiz (only room creator)
  const handleStartQuiz = () => {
    socketRef.current.emit('start-quiz', { roomId, quizData });
    setStep('quiz');
    setQuizStarted(true);
  };

  // Answer question
  const handleAnswer = (answer) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: answer }));
    if (answer === quizData[currentQuestion].correct) {
      setScore((s) => s + 1);
    }
    socketRef.current.emit('answer', {
      roomId,
      player,
      answer,
      questionIndex: currentQuestion,
    });
  };

  // Next question
  const handleNext = () => {
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleFinish();
    }
  };

  // Finish quiz
  const handleFinish = () => {
    socketRef.current.emit('finish-quiz', { roomId, results: allAnswers });
    setShowResult(true);
    setStep('result');
  };

  // UI
  if (step === 'lobby') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-purple-600">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">Guruh Test Xonasiga Qo'shiling</h2>
          <input
            type="text"
            placeholder="Ismingiz"
            value={player}
            onChange={(e) => setPlayer(e.target.value)}
            className="w-full mb-3 p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Xona ID (masalan: 1234)"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            className="w-full mb-3 p-2 border rounded-lg"
          />
          <button
            onClick={handleJoinRoom}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
          >
            Xonaga qo'shilish
          </button>
        </div>
      </div>
    );
  }

  if (step === 'waiting') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-purple-600">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">Xonada kuting...</h2>
          <div className="mb-4">Xona ID: <span className="font-mono">{roomId}</span></div>
          <div className="mb-4">Ishtirokchilar:</div>
          <ul className="mb-4">
            {players.map((p, idx) => (
              <li key={p}>
                {p} {idx === 0 && <span className="text-xs text-green-600 font-bold">(moderator)</span>}
              </li>
            ))}
          </ul>
          {players[0] === player && (
            <button
              onClick={handleStartQuiz}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
            >
              Testni boshlash
            </button>
          )}
        </div>
      </div>
    );
  }

  if (step === 'quiz') {
    const selected = answers[currentQuestion];
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-purple-600 p-4">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              Savol {currentQuestion + 1} / {quizData.length}
            </h2>
            {players[0] === player && (
              <button
                onClick={handleFinish}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
              >
                Stop
              </button>
            )}
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">{quizData[currentQuestion].question}</h3>
            <div className="space-y-3">
              {quizData[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={`w-full text-left p-4 rounded-lg transition duration-200 ${
                    selected
                      ? option === quizData[currentQuestion].correct
                        ? 'bg-green-500 text-white'
                        : selected === option
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-100'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  disabled={selected !== undefined}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          {selected && (
            <button
              onClick={handleNext}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
            >
              Keyingi savol
            </button>
          )}
        </div>
      </div>
    );
  }

  if (step === 'result') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-purple-600">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">Test yakunlandi!</h2>
          <div className="mb-4">Xona ID: <span className="font-mono">{roomId}</span></div>
          <div className="mb-4">Natijalar:</div>
          <ul className="mb-4">
            {players.map((p) => (
              <li key={p} className="flex justify-between">
                <span>{p}:</span>
                <span>{Object.values(allAnswers[p] || {}).filter((ans, idx) => ans === quizData[idx]?.correct).length} / {quizData.length}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return null;
} 