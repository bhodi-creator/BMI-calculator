import axios from "axios";

export const fetchQuizQuestions = (numQuestions,category, difficulty) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(
          `https://mock-api-quizapp-3.onrender.com/quiz?category=${category}&difficulty=${difficulty}&limit=${numQuestions}`
        );
        
        dispatch({
          type: 'FETCH_QUIZ_QUESTIONS_SUCCESS',
          payload: response.data.result,
        });
      } catch (error) {
        dispatch({
          type: 'FETCH_QUIZ_QUESTIONS_FAILURE',
          payload: error.message,
        });
      }
    };
  };