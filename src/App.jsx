import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import TodaysDua from './Components/TodaysDua'
import SetDua from './pages/SetDua'
import Reminders from './pages/Reminders'
import { DuaProvider } from './Hooks/duaProvider'



const App = () => {

  return (
    <div>
      <DuaProvider>
        <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/TodaysDua' element={<TodaysDua/>}/>
        <Route path='/SetDua' element={<SetDua/>}/>
        <Route path='/Reminders' element={<Reminders/>}/>
       </Routes>
      </Router>
     </DuaProvider>
    </div>
  
  )
}

export default App