import React from 'react'
import { Link } from 'react-router-dom';

const Government = () => {
  const startQuiz = () => {
    // Redirect to the quiz page
    window.location.href = "/quiz";
  };

  return (
    <div className="instructions-container" style={{ maxHeight: "100vh", overflowY: "auto" }}>
       <h1>INSTRUCTIONS FOR CBT EXAMINATION</h1>

<ol>
  <li>
    <h2>Test Duration:</h2>
    <ul>
      <li>The exam will be conducted for 2 hours from 9:00 AM to 11:00 AM.</li>
      <li>Please ensure that you are present at the exam center at least 15 minutes before the scheduled start time.</li>
    </ul>
  </li>
  
  <li>
    <h2>Test Format:</h2>
    <ul>
      <li>This exam consists of multiple-choice questions.</li>
      <li>Each question will have four answer options, labeled A, B, C, and D.</li>
      <li>Select the correct answer by clicking on the respective option.</li>
    </ul>
  </li>
  
  <li>
    <h2>Question Navigation:</h2>
    <ul>
      <li>You can navigate between questions by using the navigation buttons provided.</li>
      <li>You can move forward or backward through the questions at any time during the exam.</li>
      <li>Review your answers before final submission.</li>
    </ul>
  </li>
  
  <li>
    <h2>Marking Scheme:</h2>
    <ul>
      <li>Each correct answer carries 1 mark.</li>
      <li>There are no negative marks for incorrect answers or unanswered questions.</li>
      <li>Make sure to attempt all questions as there is no penalty for guessing.</li>
    </ul>
  </li>
  
  <li>
    <h2>Submitting Answers:</h2>
    <ul>
      <li>After selecting your answer, click the "Next" button to save your response and proceed to the next question.</li>
      <li>Ensure that you have answered all the questions before the exam time expires.</li>
      <li>The system will automatically submit your answers once the time is up.</li>
    </ul>
  </li>
  
  <li>
    <h2>Technical Instructions:</h2>
    <ul>
      <li>Familiarize yourself with the computer interface before starting the exam.</li>
      <li>Use the mouse to select your answers and navigate through the questions.</li>
      <li>If you encounter any technical issues, raise your hand to seek assistance from the invigilator.</li>
    </ul>
  </li>
  
  <li>
    <h2>Prohibited Actions:</h2>
    <ul>
      <li>Do not access any external websites or unauthorized materials during the exam.</li>
      <li>Usage of mobile devices or any electronic communication devices is strictly prohibited.</li>
      <li>Any form of communication or collaboration with other candidates is strictly prohibited.</li>
    </ul>
  </li>
  
  <li>
    <h2>Exam Rules and Policies:</h2>
    <ul>
      <li>Maintain exam integrity and adhere to ethical standards throughout the exam.</li>
      <li>Follow the instructions of the invigilators and test center staff at all times.</li>
      <li>Any violation of exam rules may result in disqualification and disciplinary action.</li>
    </ul>
  </li>
  
  <li>
    <h2>Support and Assistance:</h2>
    <ul>
      <li>If you encounter any technical issues or require assistance during the exam, raise your hand and wait for an invigilator to attend to you.</li>
      <li>Contact the designated helpline or support email for any technical or administrative queries related to the exam.</li>
    </ul>
  </li>
  
  <li>
    <h2>Important Reminders:</h2>
    <ul>
      <li>Keep your admit card and valid identification document with you during the exam.</li>
      <li>Do not bring any unauthorized items, including bags, study materials, or electronic devices, into the exam hall.</li>
      <li>Maintain silence and avoid any distractions that may disrupt other candidates.</li>
    </ul>
  </li>
</ol>

<p>Best of luck for your exam!</p>
<Link to="/englishquiz">
          <button onClick={startQuiz} className='start-btn'>Start</button>
        </Link>
    </div>
  );
}

export default Government