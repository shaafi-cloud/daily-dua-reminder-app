import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../Firebase';
import { signOut } from 'firebase/auth/cordova';

const LogOut = async () => {
    const navigate = useNavigate();

    try {
      await signOut(auth);
      toast.info("You are logged out🙄")
      navigate("/")
    } catch (error) {
      toast.error(error.message)
    }
  }

  export default LogOut;