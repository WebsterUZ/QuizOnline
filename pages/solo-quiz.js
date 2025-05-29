import { useState } from 'react';
import { quizData } from '../quizData';

export default function SoloQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer === quizData[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  const handleStop = () => {
    setShowScore(true);
  };

  if (showScore) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
          <h2 className="text-2xl font-bold text-center mb-4">Test yakunlandi!</h2>
          <p className="text-center text-xl mb-6">
            Sizning natijangiz: {score} / {quizData.length}
          </p>
          <button
            onClick={handleRestart}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
          >
            Qaytadan boshlash
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            Savol {currentQuestion + 1} / {quizData.length}
          </h2>
          <button
            onClick={handleStop}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          >
            Stop
          </button>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">{quizData[currentQuestion].question}</h3>
          <div className="space-y-3">
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={`w-full text-left p-4 rounded-lg transition duration-200 ${
                  selectedAnswer
                    ? option === quizData[currentQuestion].correct
                      ? 'bg-green-500 text-white'
                      : selectedAnswer === option
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {selectedAnswer && (
          <button
            onClick={handleNextQuestion}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
          >
            Keyingi savol
          </button>
        )}
      </div>
    </div>
  );
} 