<<<<<<< HEAD
// src/pages/Reminders.js
import { Link } from 'react-router-dom';
import Reminder from '../Components/Reminder';

const Reminders = () => {
=======
import React, { useContext } from 'react'
import useDua from '../Hooks/useDua'
import { DuaContext } from '../Hooks/useContext'
import { Link } from 'react-router-dom'



const Reminders = () => {
    const{
        reminder, 
        handleEdit, 
        handleDelete
    } = useContext(DuaContext);
>>>>>>> d2c2d78d9f5fd20e29a57696862b3b1f76ee3ef0

  return (
    
    <div className='relative h-screen overflow-hidden'>
<<<<<<< HEAD
      {/* Header */}
      <div className="flex flex-row justify-between w-full bg-green-600 p-4">
        <h1 className="text-2xl font-bold text-white">Daily Dua Reminder</h1>
        <div className='flex flex-row justify-between items-center pr-16'>
          <h1 className='text-xl text-white pr-7'><Link to="/">Home</Link></h1>
          <h1 className='text-xl text-white'><Link to="/setdua">Set Dua</Link></h1>
        </div>
      </div>
     <Reminder/>
=======
       {/* Header */}
       <div className="flex flex-row justify-between w-full bg-green-600 p-4">
          <h1 className="text-2xl font-bold text-white">Daily Dua Reminder</h1>
          <div className='flex flex-row justify-between items-center pr-16'>
          <h1 className='text-xl text-white pr-7'><Link to="/SetDua">Set Dua</Link></h1>
          <h1 className='text-xl text-white'><Link to="/Reminders">Reminders</Link></h1>
          </div>
      </div> 
      <div className='flex flex-col items-center h-full bg-cover bg-center' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('/prayer.jpg')` }}>
      <h1 className='text-4xl font-bold text-white flex justify-center mb-4'>Your Reminders</h1>
      <div className='flex flex-wrap'>
        {reminder.map((reminder, index) => (
          <div key={index} className='flex justify-between items-center mb-2 p-2 w-48 border rounded-lg mr-2 flex flex-col items-start bg-white'>
            <p className='font-semibold'>{reminder.dua}</p>
            <p>Date: {reminder.date}</p>
            <p>Time: {reminder.time}</p>
            <div className='flex flex-row space-x-4 '>
            <button
              onClick={() => handleEdit(index)}
              className='mt-2 bg-blue-500 w-16 text-white px-2 py-1 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out'>
              Edit
            </button>
            <button
              onClick={() => handleDelete(index)}
              className='mt-2 bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out'>
              Delete
            </button>
            </div>
            
          </div>
        ))}
      </div>
      </div>
     
>>>>>>> d2c2d78d9f5fd20e29a57696862b3b1f76ee3ef0
    </div>
  );
};

export default Reminders;
