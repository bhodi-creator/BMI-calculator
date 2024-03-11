import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const QuizPage = () => {
  const questions = useSelector((state) => state.quiz.questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const currentQuestion = questions[currentQuestionIndex];
  const [data,setData]=useState([])
  

  useEffect(()=>{
    axios.get(`https://mock-api-quizapp-3.onrender.com/quiz`)
    .then((res)=>res)
    .then((data)=>setData(data.data))
    .catch((err)=>console.log(err))
  },[])

  console.log(questions.data)



  const handleAnswerSubmit = (selectedAnswer) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestionIndex] = selectedAnswer;
    setUserAnswers(updatedUserAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
    }
  };

  return (
    <div>
      {questions.length > 0 ? (
        <div>
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p>{currentQuestion.title}</p>
          <ul>
            {currentQuestion.options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleAnswerSubmit(option)}>
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};

export default QuizPage;