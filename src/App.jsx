import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import TodaysDua from './Components/TodaysDua'
import Reminders from './pages/Reminders'
import SetDua from './pages/SetDua'
import { DuaProvider } from './Hooks/useContext'



const App = () => {

  return (
    <DuaProvider>
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/TodaysDua' element={<TodaysDua/>}/>
      <Route path='/Reminders' element={<Reminders/>}/>
      <Route path='/SetDua' element={<SetDua/>}/>
    </Routes>
    </Router>
    </DuaProvider>
  
  )
}

export default App