import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TodaysDua from './Components/TodaysDua';
import { DuaProvider } from './Hooks/duaProvider';
import SignInForm from './pages/SignIn';
import SignUpForm from './pages/SignUp';
import Reminder from './Components/Reminder';
import SetDuaForm from './Components/SetDuaForm';
import { AuthProvider } from './Components/authContext';
import PrivateRoute from './Components/PrivateRoute';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div className='relative h-screen overflow-hidden'>
      <AuthProvider>
      <DuaProvider>
        <Router>
          <Navbar />
          <div className='body'>
            <Routes>
              <Route path="/signin" element={<SignInForm />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/" element={<Navigate to="/signin" />} />
              <Route path="/todaysdua" element={<PrivateRoute component={TodaysDua} />} />
              <Route path="/reminders" element={<PrivateRoute component={Reminder} />} />
              <Route path="/setdua" element={<PrivateRoute component={SetDuaForm} />} />
            </Routes>
          </div>
        </Router>
      </DuaProvider>
    </AuthProvider>
    </div>
    
  );
};

export default App;
