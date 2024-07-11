import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import TodaysDua from './Components/TodaysDua'
import SetDua from './pages/SetDua'
import Reminders from './pages/Reminders'
import { DuaProvider } from './Hooks/duaProvider'
import { ToastContainer } from 'react-toastify'




const App = () => {

  return (
    <div>
      <DuaProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/SetDua' element={<SetDua/>}/>
            <Route path='/TodaysDua' element={<TodaysDua/>}/>
            <Route path='/Reminders' element={<Reminders/>}/>
          </Routes>
          <ToastContainer/>
      </Router>
     </DuaProvider>
    </div>
  
  )
}

export default App