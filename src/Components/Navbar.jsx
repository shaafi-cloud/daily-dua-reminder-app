import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useAuth } from '../Components/authContext';

const Navbar = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      toast.info("You are logged out🙄");
      navigate("/signin");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getLinkClass = ({ isActive }) => 
    isActive ? "text-xl text-white pr-7 font-bold" : "text-xl text-white pr-7";

  return (
    <>
      <nav>
        <div className="flex flex-row justify-between w-full bg-green-600 p-4">
          <h1 className="text-2xl font-bold text-white">Daily Dua Reminder</h1>
          <div className="flex flex-row justify-between items-center pr-16">
            {currentUser ? (
              <>
                <NavLink to="/todaysdua" className={getLinkClass}>Home</NavLink>
                <NavLink to="/setdua" className={getLinkClass}>Set Dua</NavLink>
                <NavLink to="/reminders" className={getLinkClass}>Your reminders</NavLink>
                <button onClick={logOut} className="text-xl text-white">Sign Out</button>
              </>
            ) : (
              <>
                <NavLink to="/signin" className={getLinkClass}>Sign In</NavLink>
                <NavLink to="/signup" className={getLinkClass}>Sign Up</NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
