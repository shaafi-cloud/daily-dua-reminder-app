import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import TodaysDua from './Components/TodaysDua'
<<<<<<< HEAD
import SetDua from './pages/SetDua'
import Reminders from './pages/Reminders'
import { DuaProvider } from './Hooks/duaProvider'
=======
import Reminders from './pages/Reminders'
import SetDua from './pages/SetDua'
import { DuaProvider } from './Hooks/useContext'
>>>>>>> d2c2d78d9f5fd20e29a57696862b3b1f76ee3ef0



const App = () => {

  return (
    <DuaProvider>
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/TodaysDua' element={<TodaysDua/>}/>
<<<<<<< HEAD
      <Route path='/SetDua' element={<SetDua/>}/>
      <Route path='/Reminders' element={<Reminders/>}/>
    </Routes>
    </Router>
    </DuaProvider>
 
=======
      <Route path='/Reminders' element={<Reminders/>}/>
      <Route path='/SetDua' element={<SetDua/>}/>
    </Routes>
    </Router>
    </DuaProvider>
  
>>>>>>> d2c2d78d9f5fd20e29a57696862b3b1f76ee3ef0
  )
}

export default App