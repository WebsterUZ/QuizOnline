import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';

const SOCKET_URL = typeof window !== 'undefined' ? window.location.origin : '';

export default function GroupQuiz() {
  const [roomId, setRoomId] = useState(''); // Make roomId editable
  const [player, setPlayer] = useState('');
  const [joined, setJoined] = useState(false);
  const [players, setPlayers] = useState([]);
  const [moderator, setModerator] = useState('');
  const [step, setStep] = useState('lobby'); // lobby, waiting, quiz, result
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const socketRef = useRef(null);

  // Quiz state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({}); // User's own answers
  const [allAnswers, setAllAnswers] = useState({}); // All players' answers (received from server)
  const [score, setScore] = useState(0); // User's own score (for display during quiz)
  const [showResult, setShowResult] = useState(false);
  const [results, setResults] = useState([]); // Final results with ranking
  const [quizData, setQuizData] = useState([]); // Keep this state to store received data

  useEffect(() => {
    if (!joined) return;
    if (!socketRef.current) {
      socketRef.current = io(SOCKET_URL, { path: '/api/socket' });
    }
    const socket = socketRef.current;

    socket.emit('join-room', { roomId, player });

    socket.on('players-update', ({ players, moderator }) => {
      setPlayers(players);
      setModerator(moderator);
    });

    socket.on('moderator-changed', (newModerator) => {
      setModerator(newModerator);
    });

    // Handle quiz start
    socket.on('quiz-started', ({ quizData: receivedQuizData }) => { // Receive quiz data from backend
      setStep('quiz');
      setCurrentQuestion(0);
      setAnswers({});
      setScore(0);
      setAllAnswers({});
      setShowResult(false);

      // Shuffle options for each question
      const shuffledQuizDataWithOptions = receivedQuizData.map(question => ({
        ...question,
        options: [...question.options].sort(() => Math.random() - 0.5) // Shuffle options
      }));

      setQuizData(shuffledQuizDataWithOptions); // Set the received and shuffled quiz data to state
    });

    // Handle player answered (update all players' answers - received from server)
    socket.on('player-answered', ({ player: answeredPlayer, questionIndex }) => {
      // This event is mostly for real-time feedback (e.g., showing who answered)
      // The full answers object is received at the end.
      console.log(`${answeredPlayer} answered question ${questionIndex}`);
    });

    // Handle quiz finished - receive final results with ranking
    socket.on('quiz-finished', ({ results: finalResults }) => {
      setResults(finalResults); // Set the final ranked results
      setShowResult(true);
      setStep('result');
    });

    socket.on('error', (message) => {
      setError(message);
      setLoading(false);
    });

    return () => {
      socket.off('players-update');
      socket.off('moderator-changed');
      socket.off('quiz-started');
      socket.off('player-answered');
      socket.off('quiz-finished');
      socket.off('error');
      socket.disconnect();
      socketRef.current = null;
    };
  }, [joined, roomId, player]);

  // Moderlikni topshirish
  const handleTransferModerator = (toPlayer) => {
    if (socketRef.current) {
      socketRef.current.emit('transfer-moderator', { roomId, toPlayer });
    }
  };

  // Start tugmasi (faqat moderator uchun)
  const handleStart = () => {
    if (socketRef.current) {
      // Removed client-side shuffling
      socketRef.current.emit('start-quiz', { roomId }); // Tell server to start, server will handle shuffling
    }
  };

  // Stop tugmasi (faqat moderator uchun)
  const handleStop = () => {
    if (socketRef.current) {
      // Emit a signal to finish the quiz for everyone. Backend calculates results.
      socketRef.current.emit('finish-quiz', { roomId });
    }
  };

  // Javob berish
  const handleAnswer = (answer) => {
    if (answers[currentQuestion] !== undefined) return;

    const isCorrect = answer === quizData[currentQuestion].correct;
    const newScore = score + (isCorrect ? 1 : 0);
    setScore(newScore);
    setAnswers(prev => ({ ...prev, [currentQuestion]: answer }));

    // Emit answer to server with timestamp (backend uses timestamp for ranking)
    if (socketRef.current) {
      socketRef.current.emit('answer', {
        roomId,
        player,
        answer,
        questionIndex: currentQuestion
      });
    }

    // Automatically go to next question after a short delay to show feedback
    setTimeout(() => {
      handleNext();
    }, 1000); // 1 second delay
  };

  // Keyingi savolga o'tish yoki testni tugatish
  const handleNext = () => {
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // If no more questions, tell backend to finish the quiz
      if (socketRef.current) {
        socketRef.current.emit('finish-quiz', { roomId });
      }
    }
  };

  // LOBBY SCREEN
  if (!joined && step === 'lobby') {
     return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom, #3b82f6, #a78bfa)'
      }}>
        <div style={{
          background: 'white',
          padding: 32,
          borderRadius: 16,
          boxShadow: '0 4px 24px #0001',
          width: 400
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: 24, fontWeight: 700, fontSize: 24 }}>
            Guruh Test Xonasiga Qo'shiling
          </h2>
          {error && <div style={{ color: 'red', marginBottom: 16 }}>{error}</div>}
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Ismingiz</label>
            <input
              type="text"
              placeholder="Ismingizni kiriting"
              value={player}
              onChange={e => setPlayer(e.target.value)}
              style={{
                width: '100%',
                padding: 16,
                fontSize: 18,
                borderRadius: 8,
                border: '1px solid #ccc'
              }}
              autoComplete="off"
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Xona ID</label>
            <input
              type="text"
              placeholder="Xona ID sini kiriting"
              value={roomId}
              onChange={e => setRoomId(e.target.value)} // Make it editable
              style={{
                width: '100%',
                padding: 16,
                fontSize: 18,
                borderRadius: 8,
                border: '1px solid #ccc'
              }}
            />
          </div>
          <button
            type="button"
            style={{
              width: '100%',
              padding: 16,
              fontSize: 18,
              borderRadius: 8,
              background: '#2563eb',
              color: 'white',
              border: 'none',
              fontWeight: 700,
              cursor: 'pointer'
            }}
            disabled={!player.trim() || !roomId.trim()} // Disable if roomId is empty
            onClick={() => setJoined(true)}
          >
            Xonaga qo'shilish
          </button>
        </div>
      </div>
    );
  }

  // WAITING SCREEN
  if (step === 'waiting') {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        background: 'linear-gradient(to bottom, #3b82f6, #a78bfa)'
      }}>
        {/* Chapda ishtirokchilar ro'yxati */}
        <div style={{
          width: 260,
          background: '#f3f4f6',
          padding: 24,
          borderRight: '1px solid #e5e7eb',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          overflowY: 'auto'
        }}>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 12 }}>Ishtirokchilar</div>
          {players.map((p) => (
            <div key={p} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: p === player ? '#dbeafe' : 'transparent',
              borderRadius: 8,
              padding: 8
            }}>
              <span style={{
                fontWeight: 500,
                color: p === moderator ? '#16a34a' : '#374151'
              }}>
                {p}
              </span>
              {p === moderator && (
                <span style={{
                  fontSize: 12,
                  background: '#bbf7d0',
                  color: '#166534',
                  borderRadius: 6,
                  padding: '2px 8px',
                  marginLeft: 4
                }}>
                  moderator
                </span>
              )}
              {player === moderator && p !== moderator && (
                <button
                  style={{
                    marginLeft: 'auto',
                    fontSize: 12,
                    background: '#fef9c3',
                    color: '#b45309',
                    border: 'none',
                    borderRadius: 6,
                    padding: '2px 8px',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleTransferModerator(p)}
                >
                  Moderlikni berish
                </button>
              )}
               {p === player && ( !moderator || p !== moderator ) && (
                <span style={{
                  fontSize: 12,
                  background: '#e0e7ff',
                  color: '#3730a3',
                  borderRadius: 6,
                  padding: '2px 8px',
                  marginLeft: 4
                }}>
                  Siz
                </span>
              )}
            </div>
          ))}
        </div>
        {/* O'ng panel - Waiting screen content */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            background: 'white',
            padding: 32,
            borderRadius: 16,
            boxShadow: '0 4px 24px #0001',
            width: 400
          }}>
            <h2 style={{ textAlign: 'center', marginBottom: 24, fontWeight: 700, fontSize: 24 }}>
              Xona ID: <span style={{ fontFamily: 'monospace' }}>{roomId}</span>
            </h2>
            <div style={{ textAlign: 'center', marginBottom: 24, color: '#6b7280' }}>
              {player === moderator
                ? 'Siz moderator siz. Testni boshlang yoki moderlikni boshqasiga bering.'
                : `Moderator testni boshlashini kuting...`}
            </div>
            {player === moderator && ( // Only show buttons for moderator
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                <button
                  type="button"
                  style={{
                    padding: '12px 24px',
                    fontSize: 18,
                    borderRadius: 8,
                    background: '#22c55e',
                    color: 'white',
                    border: 'none',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                  onClick={handleStart}
                >
                  Start
                </button>
                <button
                  type="button"
                  style={{
                    padding: '12px 24px',
                    fontSize: 18,
                    borderRadius: 8,
                    background: '#ef4444',
                    color: 'white',
                    border: 'none',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                  onClick={handleStop}
                >
                  Stop
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // QUIZ SCREEN
  if (step === 'quiz') {
    const question = quizData[currentQuestion];
    const selectedAnswer = answers[currentQuestion];
    const isModerator = player === moderator; // Check if current player is moderator

    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        background: 'linear-gradient(to bottom, #3b82f6, #a78bfa)'
      }}>
        {/* Chapda ishtirokchilar ro'yxati */}
        <div style={{
          width: 260,
          background: '#f3f4f6',
          padding: 24,
          borderRight: '1px solid #e5e7eb',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
           overflowY: 'auto'
        }}>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 12 }}>Ishtirokchilar</div>
          {players.map((p) => (
            <div key={p} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: p === player ? '#dbeafe' : 'transparent',
              borderRadius: 8,
              padding: 8
            }}>
              <span style={{
                fontWeight: 500,
                color: p === moderator ? '#16a34a' : '#374151'
              }}>
                {p}
              </span>
              {p === moderator && (
                <span style={{
                  fontSize: 12,
                  background: '#bbf7d0',
                  color: '#166534',
                  borderRadius: 6,
                  padding: '2px 8px',
                  marginLeft: 4
                }}>
                  moderator
                </span>
              )}
              {player === moderator && p !== moderator && (
                <button
                  style={{
                    marginLeft: 'auto',
                    fontSize: 12,
                    background: '#fef9c3',
                    color: '#b45309',
                    border: 'none',
                    borderRadius: 6,
                    padding: '2px 8px',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleTransferModerator(p)}
                >
                  Moderlikni berish
                </button>
              )}
               {p === player && ( !moderator || p !== moderator ) && (
                <span style={{
                  fontSize: 12,
                  background: '#e0e7ff',
                  color: '#3730a3',
                  borderRadius: 6,
                  padding: '2px 8px',
                  marginLeft: 4
                }}>
                  Siz
                </span>
              )}
            </div>
          ))}
        </div>
        {/* O'ng panel - Test savollari */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }}>
           <div style={{
            background: 'white',
            padding: 32,
            borderRadius: 16,
            boxShadow: '0 4px 24px #0001',
            maxWidth: 600,
            width: '100%'
          }}>
            <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontWeight: 700, fontSize: 20 }}>
                Savol {currentQuestion + 1} / {quizData.length}
              </h3>
              {isModerator && (
                <button
                  type="button"
                  style={{
                    padding: '8px 16px',
                    fontSize: 14,
                    borderRadius: 8,
                    background: '#ef4444',
                    color: 'white',
                    border: 'none',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                  onClick={handleStop}
                >
                  Stop Test
                </button>
              )}
            </div>
            <p style={{ fontSize: 18, marginBottom: 24 }}>{question.question}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {question.options.map((option, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleAnswer(option)}
                  disabled={selectedAnswer !== undefined}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: 16,
                    fontSize: 16,
                    borderRadius: 8,
                    border: '1px solid #ccc',
                    background: selectedAnswer === option
                      ? (option === question.correct ? '#dbeafe' : '#fee2e2')
                      : (selectedAnswer !== undefined && option === question.correct ? '#dbeafe' : '#f9fafb'),
                    color: selectedAnswer === option
                       ? (option === question.correct ? '#1e40af' : '#991b1b')
                       : (selectedAnswer !== undefined && option === question.correct ? '#1e40af' : '1f2937'),
                    cursor: selectedAnswer !== undefined ? 'not-allowed' : 'pointer',
                    fontWeight: selectedAnswer !== undefined && option === question.correct ? 700 : 400
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
             {selectedAnswer !== undefined && (
                <div style={{ marginTop: 16, textAlign: 'center', color: selectedAnswer === question.correct ? '#16a34a' : '#ef4444', fontWeight: 700 }}>
                    {selectedAnswer === question.correct ? 'To\'g\'ri javob!' : `Noto\'g\'ri javob. To\'g\'risi: ${question.correct}`}
                </div>
            )}
             {selectedAnswer !== undefined && (
                 <button
                    type="button"
                    style={{
                      marginTop: 24,
                      width: '100%',
                      padding: 12,
                      fontSize: 16,
                      borderRadius: 8,
                      background: '#2563eb',
                      color: 'white',
                      border: 'none',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                    onClick={handleNext}
                  >
                    Keyingi savol
                  </button>
             )}
          </div>
        </div>
      </div>
    );
  }

  // RESULT SCREEN
   if (step === 'result') {
       return (
           <div style={{
               minHeight: '100vh',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               background: 'linear-gradient(to bottom, #3b82f6, #a78bfa)'
           }}>
                <div style={{
                    background: 'white',
                    padding: 32,
                    borderRadius: 16,
                    boxShadow: '0 4px 24px #0001',
                    width: 500 // Increase width to accommodate table
                }}>
                    <h2 style={{ textAlign: 'center', marginBottom: 24, fontWeight: 700, fontSize: 24 }}>
                        Test yakunlandi!
                    </h2>
                    <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 16 }}>Natijalar:</div>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid #eee' }}>
                                <th style={{ padding: '12px 8px', textAlign: 'left' }}>Ishtirokchi</th>
                                <th style={{ padding: '12px 8px', textAlign: 'center' }}>To'g'ri</th>
                                <th style={{ padding: '12px 8px', textAlign: 'center' }}>Noto'g'ri</th>
                                <th style={{ padding: '12px 8px', textAlign: 'center' }}>{results.length > 0 ? `${results[0].totalQuestions} (%)` : 'Umumiy savollar (%)'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((result, index) => {
                                const incorrectCount = result.totalQuestions - result.score;
                                const percentage = result.totalQuestions > 0 ? ((result.score / result.totalQuestions) * 100).toFixed(1) : 0;
                                return (
                                    <tr key={result.name} style={{ borderBottom: '1px solid #eee' }}>
                                        <td style={{ padding: '12px 8px', fontWeight: index === 0 ? 700 : 400, color: index === 0 ? '#10b981' : '#1f2937' }}>
                                            {index + 1}. {result.name}
                                        </td>
                                        <td style={{ padding: '12px 8px', textAlign: 'center', color: '#10b981' }}>{result.score}</td>
                                        <td style={{ padding: '12px 8px', textAlign: 'center', color: '#ef4444' }}>{incorrectCount}</td>
                                        <td style={{ padding: '12px 8px', textAlign: 'center' }}>{percentage} (%)</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                     <button
                        type="button"
                        style={{
                          marginTop: 24,
                          width: '100%',
                          padding: 12,
                          fontSize: 16,
                          borderRadius: 8,
                          background: '#2563eb',
                          color: 'white',
                          border: 'none',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                         onClick={() => window.location.reload()}
                      >
                        Yangi test boshlash
                      </button>
                </div>
           </div>
       );
   }

  // If step is 'waiting' (this handles the main structure with sidebar)
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      background: 'linear-gradient(to bottom, #3b82f6, #a78bfa'
    }}>
      {/* Chapda ishtirokchilar ro'yxati */}
      <div style={{
        width: 260,
        background: '#f3f4f6',
        padding: 24,
        borderRight: '1px solid #e5e7eb',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        overflowY: 'auto'
      }}>
        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 12 }}>Ishtirokchilar</div>
        {players.map((p) => (
          <div key={p} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: p === player ? '#dbeafe' : 'transparent',
            borderRadius: 8,
            padding: 8
          }}>
            <span style={{
              fontWeight: 500,
              color: p === moderator ? '#16a34a' : '#374151'
            }}>
              {p}
            </span>
            {p === moderator && (
              <span style={{
                fontSize: 12,
                background: '#bbf7d0',
                color: '#166534',
                borderRadius: 6,
                padding: '2px 8px',
                marginLeft: 4
              }}>
                moderator
              </span>
            )}
            {player === moderator && p !== moderator && (
              <button
                style={{
                  marginLeft: 'auto',
                  fontSize: 12,
                  background: '#fef9c3',
                  color: '#b45309',
                  border: 'none',
                  borderRadius: 6,
                  padding: '2px 8px',
                  cursor: 'pointer'
                }}
                onClick={() => handleTransferModerator(p)}
              >
                Moderlikni berish
              </button>
            )}
             {p === player && ( !moderator || p !== moderator ) && (
              <span style={{
                fontSize: 12,
                background: '#e0e7ff',
                color: '#3730a3',
                borderRadius: 6,
                padding: '2px 8px',
                marginLeft: 4
              }}>
                Siz
              </span>
            )}
          </div>
        ))}
      </div>
      {/* O'ng panel - Waiting screen content */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          background: 'white',
          padding: 32,
          borderRadius: 16,
          boxShadow: '0 4px 24px #0001',
          width: 400
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: 24, fontWeight: 700, fontSize: 24 }}>
            Xona ID: <span style={{ fontFamily: 'monospace' }}>{roomId}</span>
          </h2>
          <div style={{ textAlign: 'center', marginBottom: 24, color: '#6b7280' }}>
            {player === moderator
              ? 'Siz moderator siz. Testni boshlang yoki moderlikni boshqasiga bering.'
              : `Moderator testni boshlashini kuting...`}
          </div>
          {player === moderator && ( // Only show buttons for moderator
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button
                type="button"
                style={{
                  padding: '12px 24px',
                  fontSize: 18,
                  borderRadius: 8,
                  background: '#22c55e',
                  color: 'white',
                  border: 'none',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
                onClick={handleStart}
              >
                Start
              </button>
              <button
                type="button"
                style={{
                  padding: '12px 24px',
                  fontSize: 18,
                  borderRadius: 8,
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
                onClick={handleStop}
              >
                Stop
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}