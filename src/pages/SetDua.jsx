<<<<<<< HEAD
import SetDuaForm from '../Components/SetDuaForm';
import { Link } from 'react-router-dom';

const SetDua = () => {
=======
import React, { useContext } from 'react';
import { DuaContext } from '../Hooks/useContext';
import { Link } from 'react-router-dom';

const SetDua = () => {
  const {
    dua, setDua,
    successMessage, setSuccessMessage,
    errorMessage, setErrorMessage,
    date, setDate,
    time, setTime,
    isEditing, setIsEditing,
    handleSubmit
  } = useContext(DuaContext);
>>>>>>> d2c2d78d9f5fd20e29a57696862b3b1f76ee3ef0

  return (
    <div className='relative h-screen overflow-hidden'>

      {/* Header */}
      <div className="flex flex-row justify-between w-full bg-green-600 p-4">
        <h1 className="text-2xl font-bold text-white">Daily Dua Reminder</h1>
        <div className='flex flex-row justify-between items-center pr-16'>
          <h1 className='text-xl text-white pr-7'><Link to="/">Home</Link></h1>
          <h1 className='text-xl text-white'><Link to="/Reminders">Your reminders</Link></h1>
        </div>
      </div>
<<<<<<< HEAD
      <SetDuaForm/>
  
=======

      <div className='flex justify-center h-full bg-cover bg-center' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('/prayer.jpg')` }}>
        <form onSubmit={handleSubmit} className='bg-white p-10 rounded-lg shadow-lg flex flex-col justify-center items-center w-full max-w-md mb-20 mt-10'>
          <h1 className='text-4xl font-bold flex justify-center mb-4'>Set Dua</h1>
          <div className='flex flex-col items-start mb-4 w-full'>
            <label htmlFor="dua" className='text-xl font-semibold'>Dua: </label>
            <select id="dua" value={dua} onChange={(e) => setDua(e.target.value)} className='p-2 border border-green-500 rounded-xl mb-5 w-full'>
              <option value="" disabled selected hidden>Select Dua</option>
              <option value="أذكار الصباح">أذكار الصباح</option>
              <option value="أذكار المساء">أذكار المساء</option>
              <option value="دعاء الخروج من الصلاة">دعاء الخروج من الصلاة</option>
              <option value="دعاء الخروج من المنزل">دعاء الخروج من المنزل</option>
              <option value="دعاء الدخول من المسجد">دعاء الدخول من المسجد</option>
            </select>
          </div>

          <div className='flex flex-col items-start mb-4 w-full'>
            <label htmlFor="date" className='text-xl font-semibold'>Date: </label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="p-2 border border-green-500 rounded-xl mb-5 w-full" />
          </div>

          <div className='flex flex-col items-start mb-4 w-full'>
            <label htmlFor="time" className='text-xl font-semibold'>Time: </label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="p-2 border border-green-500 rounded-xl mb-5 w-full" />

            <div className='flex justify-center w-full mt-4'>
              <button type='submit' className='bg-green-500 border rounded-2xl w-full px-16 py-1 text-white hover:bg-green-800 transition duration-300 ease-in-out'>
                {isEditing ? 'Update' : 'Add'}
              </button>
            </div>
          </div>
        </form>
      </div>
>>>>>>> d2c2d78d9f5fd20e29a57696862b3b1f76ee3ef0
    </div>
  );
};

export default SetDua;
