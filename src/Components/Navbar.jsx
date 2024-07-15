import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';


const Navbar = () => {

    const navigate = useNavigate()

    const logOut = async () => {
      try {
        await signOut(auth);
        toast.info("You are logged out🙄")
        navigate("/signin")
      } catch (error) {
        toast.error(error.message)
      }
    }

  return (
    <nav>
         <div className="flex flex-row justify-between w-full bg-green-600 p-4">
            <h1 className="text-2xl font-bold text-white">Daily Dua Reminder</h1>
            <div className="flex flex-row justify-between items-center pr-16">
              <NavLink to="/" className="text-xl text-white pr-7">Home</NavLink>
              <NavLink to="/setdua" className="text-xl text-white pr-7">Set Dua</NavLink>
              <NavLink to="/reminders" className="text-xl text-white pr-7">Your reminders</NavLink>
              <button onClick={logOut} className="text-xl text-white">
              sign out</button>
            </div>
          </div>
    </nav>
  )
}

export default Navbar