// src/pages/SignInForm.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Signed in successfully");
      navigate('/todaysdua');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSignIn}
        className="bg-white p-10 rounded-xl shadow-lg flex flex-col justify-center items-center w-full max-w-md"
      >
        <h1 className="text-4xl font-bold mb-4">Sign In</h1>
        <div className="flex flex-col items-start mb-4 w-full">
          <label htmlFor="email" className="text-xl font-semibold">
            username:
          </label>
          <input
            type="email" placeholder="enter@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded-xl mb-5 w-full"
            required
          />
        </div>
        <div className="flex flex-col items-start mb-4 w-full">
          <label htmlFor="password" className="text-xl font-semibold">
            Password:
          </label>
          <input
            type="password" placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border border-gray-300 rounded-xl mb-5 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 rounded-3xl px-16 py-2 text-white hover:bg-blue-700 transition duration-300 ease-in-out w-full">
          Sign In
        </button>
       
        <p className="mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
