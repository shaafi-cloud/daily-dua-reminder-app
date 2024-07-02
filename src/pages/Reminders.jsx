import React from 'react'
import useDua from '../Hooks/useDua'


const Reminders = () => {
    const{
        reminder, handleEdit, handleDelete
    } = useDua();

  return (
    <div className='relative h-screen overflow-hidden'>
      <h1 className='text-4xl font-bold flex justify-center mb-4'>Your Reminders</h1>
      <div className='flex flex-wrap'>
        {reminder.map((reminder, index) => (
          <div key={index} className='mb-2 p-2 border rounded mr-2 flex flex-col items-start'>
            <p className='font-semibold'>{reminder.dua}</p>
            <p>Date: {reminder.date}</p>
            <p>Time: {reminder.time}</p>
            <button
              onClick={() => handleEdit(index)}
              className='mt-2 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 transition duration-300 ease-in-out'
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(index)}
              className='mt-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 transition duration-300 ease-in-out'
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reminders