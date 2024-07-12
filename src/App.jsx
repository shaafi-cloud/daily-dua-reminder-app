import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import TodaysDua from './Components/TodaysDua'
import SetDua from './pages/SetDua'
import Reminders from './pages/Reminders'
import { DuaProvider } from './Hooks/duaProvider'
import { ToastContainer } from 'react-toastify'
import SignInForm from './pages/SignIn'
import SignUpForm from './pages/SignUp'
import Logout from './pages/Logout'





const App = () => {

  return (
    <div>
      <DuaProvider>
        <Router>
          <Routes>
          <Route path="/" element={<SignInForm/>} />
          <Route path='/Home' element={<Home/>}/>
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/reminders" element={<Reminders />} />
          <Route path="/setdua" element={<SetDua />} />
          </Routes>
          <ToastContainer/>
      </Router>
     </DuaProvider>
    </div>
  
  )
}

export default App