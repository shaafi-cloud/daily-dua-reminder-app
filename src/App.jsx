import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import TodaysDua from './Components/TodaysDua'

const App = () => {

  return (
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/TodaysDua' element={<TodaysDua/>}/>
    </Routes>
    </Router>
  )
}

export default App