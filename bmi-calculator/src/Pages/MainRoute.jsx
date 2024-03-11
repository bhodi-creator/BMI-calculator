import React from 'react'
import { Route, Routes } from 'react-router-dom'
import  QuizPage  from './QuizPage'
import HomePage from './HomePage'

const MainRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/quiz' element={<QuizPage/>}/>
    </Routes>
  )
}

export default MainRoute
