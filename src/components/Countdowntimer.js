// Countdowntimer.js
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './countdown.css'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Countdowntimer = ({ handleTimeUp, finished }) => {
  const [timeLeft, setTimeLeft] = useState(65); // set initial time to 10 seconds
  const [blink, setBlink] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timer);
      handleTimeUp(); // Notify MathQuiz component when the time is up
    }

    return () => clearInterval(timer);
  }, [timeLeft, handleTimeUp]);

  useEffect(() => {
    if (timeLeft === 60) {
      document.getElementById('timer').style.color = 'red'; // change color to red when 1 minute left
    }
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft <= 60 && timeLeft > 0) {
      const intervalId = setInterval(() => {
        setBlink((prevState) => !prevState);
      }, 500);

      return () => {
        clearInterval(intervalId);
      };
    } else {
      setBlink(false);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft === 10) {
      toast.warning('10 seconds left!');
    }
  }, [timeLeft]);

  useEffect(() => {
    if (finished) {
      document.getElementById('timer').style.color = 'black';
      toast.warning('Your Time Is Up');
      setTimeLeft(0)
      
    }
  }, [finished, navigate]);

  const Timer = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  const formattedTime = Timer(timeLeft);

  return (
    <div>
      <h1 id='timer' className={blink ? 'blinking-text' : ''}>{formattedTime}</h1>
      <ToastContainer />
    </div>
  );
};

export default Countdowntimer;
