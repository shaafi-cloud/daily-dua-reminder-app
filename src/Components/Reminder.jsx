import React, { useContext } from 'react'
import { DuaContext } from '../Hooks/duaProvider';

const Reminder = () => {
    const {
        handleEdit,
        handleDelete,
        reminders
      } = useContext(DuaContext);

  return (
         <div className='flex flex-col items-center h-screen bg-cover bg-center' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('/prayer.jpg')` }}>
        <h1 className='text-4xl font-bold flex justify-center mt-7 text-white'>Your Reminders</h1>
        <div className='flex flex-wrap justify-center items-center mt-5'>
          {reminders.map((reminder, index) => (
            <div key={index} className='m-2 p-4 bg-white rounded-lg shadow-lg flex flex-col items-start w-50'>
              <p className='font-semibold text-lg overflow-hidden overflow-ellipsis'>{reminder.dua}</p>
              <p className='text-gray-700'>Date: {reminder.date}</p>
              <p className='text-gray-700'>Time: {reminder.time}</p>
              <div className='flex flex-row space-x-4'>
              <button
                onClick={() => handleEdit(index)}
                className='mt-2 bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out'>
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className='mt-2 bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out'>
                Delete
              </button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
  )
}

export default Reminder