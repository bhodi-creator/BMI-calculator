import React from 'react'
import { Box, Button, Center, Input, Select, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormInput } from '../redux/actions/homeAction';
import { fetchQuizQuestions } from '../redux/actions/quizAction';
import { useNavigate } from "react-router-dom";



const HomePage = () => {
    const {userName,selectedCategory,selectedDifficulty,numberofQuestions}=useSelector((state)=>state.home)
    
const navigate=useNavigate()
    const dispatch=useDispatch()

    const handleStartQuiz=()=>{
        dispatch(fetchQuizQuestions(numberofQuestions,selectedCategory,selectedDifficulty))
        navigate(`/quiz`)
    }
  return (
    <>
      <Center h="100vh">
        <Box w="400px" p="4" borderWidth="1px" borderRadius="md" boxShadow="lg" >
            <Text fontSize="xl" fontWeight="bold" mb={"4"}>Masai Quiz</Text>
            <Input placeholder='Enter Your Name'
            mb={"2"}
            value={userName}
            onChange={((e)=>dispatch(updateFormInput('userName',e.target.value)))} 
            />
            <Select placeholder='Select Category'
            mb='2'
            value={selectedCategory}
            onChange={(e)=>dispatch(updateFormInput("selectedCategory",e.target.value))}
            >
                <option value="General Knowledge">General Knowledge</option>
                <option value="Sports">Sports</option>
                <option value="Geography">Geography</option>
            </Select>
            <Select placeholder='Select Difficulty'
            mb='2'
            value={selectedDifficulty}
            onChange={(e)=>dispatch(updateFormInput("selectedDifficulty",e.target.value))}
            >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </Select>
            <Input type='number' placeholder='Number of Questions' 
            mb={"4"}
            value={numberofQuestions}
            onChange={(e)=>dispatch(updateFormInput("numberofQuestions",e.target.value))}
            />
            <Button colorScheme='blue'
             onClick={handleStartQuiz} 
            disabled={!userName||!selectedCategory||!selectedDifficulty||!numberofQuestions} >
                Start Quiz
                </Button>
        </Box>
      </Center>
    </>
  )
}

export default HomePage



//https://mock-api-week2.onrender.com/
