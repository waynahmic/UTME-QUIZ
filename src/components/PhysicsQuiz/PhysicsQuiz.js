import React, { useState, useEffect } from 'react';
import './PhysicsQuiz.css';
import {GrNext} from 'react-icons/gr'
import {GrPrevious} from 'react-icons/gr'
import data from '../Data';
import ReactPaginate from 'react-paginate';
import Calculator from '../calculator/Calculator';


const PhysicsQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const physicsQuestions = data.physics;

  useEffect(() => {
    // Randomize the order of options for each question
    physicsQuestions.forEach((question) => {
      question.options.sort(() => Math.random() - 0.5);
    });
  }, []);

  const handleOptionSelect = (option) => {
    const currentQuestionData = physicsQuestions[currentQuestion];
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
    if (selectedOption === physicsQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption('');
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setSelectedOption('');
    setCurrentQuestion(currentQuestion - 1);
  };

  return (
    <div className="physics-quiz">
      <h1>Physics</h1>
      <div className='quemage'>
      <div className="question">
        <h2>Question {currentQuestion + 1}</h2>
        <p>{physicsQuestions[currentQuestion].question}</p>
        <div className="options">
          {physicsQuestions[currentQuestion].options.map((option, index) => (
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
            {currentQuestion === physicsQuestions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
      <Calculator/>
      <div className='image-container'>
         
      </div>
      </div>
      <div className="score">
        <p>Score: {score}</p>
      </div>
      <ReactPaginate
      breakLabel="..."
      nextLabel={<GrNext size={25}/>}
      previousLabel={<GrPrevious size={25}/>}
  pageCount={physicsQuestions.length}
  pageRangeDisplayed={5}
  marginPagesDisplayed={1}
  onPageChange={(selected) => setCurrentQuestion(selected.selected)}
  forcePage={currentQuestion}
  
  renderOnZeroPageCount={null}
  containerClassName={'pagination'}
  activeClassName={'active'}
/>
     
    </div>
  );
};

export default PhysicsQuiz;