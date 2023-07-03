import React, { useState, useEffect } from 'react';
import './CrsQuiz.css';
import data from '../Data';

const CrsQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);



  const crsQuestions = data.crs;

  useEffect(() => {
    // Randomize the order of options for each question
    crsQuestions.forEach((question) => {
      question.options.sort(() => Math.random() - 0.5);
    });
  }, []);

  const handleOptionSelect = (option) => {
    const currentQuestionData = crsQuestions[currentQuestion];
    const isCorrectAnswer = option === currentQuestionData.answer;
  
    // Check if the current question has been answered previously
    const hasAnsweredPreviously = answeredQuestions.includes(currentQuestion);
  
    if (!hasAnsweredPreviously) {
      // If the selected option is the correct answer, increment the score
      if (isCorrectAnswer) {
        setScore((prevScore) => prevScore + 1);
      }
      // Mark the current question as answered
      setAnsweredQuestions([...answeredQuestions, currentQuestion]);
    } else {
      // If the current question has been answered previously
      if (isCorrectAnswer) {
        // If the selected option is the correct answer and it was previously answered wrongly, increment the score
        setScore((prevScore) => prevScore + 1);
      } else {
        // If the selected option is wrong, decrement the score
        setScore((prevScore) => Math.max(0, prevScore - 1));
      }
    }
  
    setSelectedOption(option);
  
    setTimeout(() => {
      handleNextQuestion();
    }, 200);
  };
  
  
  
  
  
  
  
  
  
  const handleNextQuestion = () => {
    setSelectedOption('');
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setSelectedOption('');
    setCurrentQuestion(currentQuestion - 1);
  };

  return (
    <div className="crs-quiz">
      <h1>Christian Religious Studies</h1>
      <div className='quemage'>
      <div className="question">
        <h2>Question {currentQuestion + 1}</h2>
        <p>{crsQuestions[currentQuestion].question}</p>
        <div className="options">
          {crsQuestions[currentQuestion].options.map((option, index) => (
            <div
              key={index}
              className={`option ${selectedOption === option ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
        <div className="buttons">
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>
          <button onClick={handleNextQuestion}>
            {currentQuestion === crsQuestions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
      
      <div className='image-container'>
  {crsQuestions[currentQuestion].image && (
    <img src={crsQuestions[currentQuestion].image}  />
  )}
</div>
      </div>
      <div className="score">
        <p>Score: {score}</p>
      </div>
      <div className="question-map">
        <ul>
          {crsQuestions.map((_, index) => (
            <li
              key={index}
              className={index === currentQuestion ? 'active' : ''}
              onClick={() => setCurrentQuestion(index)}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CrsQuiz;
