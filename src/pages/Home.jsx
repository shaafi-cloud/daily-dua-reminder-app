import React from 'react'
import { useNavigate } from 'react-router-dom'
import TodaysDua from '../Components/TodaysDua';


const Home = () => {

  const naviate = useNavigate();
  const handleClick = () => {
    naviate('./SetDua')
  }

  return (
    <div className='relative h-screen overflow-hidden'>

     {/* Header */}
       <div className="flex flex-row justify-between w-full bg-green-600 p-4">
          <h1 className="text-2xl font-bold text-white">Daily Dua Reminder</h1>
          <div className='flex flex-row justify-between items-center pr-16'>
          <h1 className='text-xl text-white pr-7'>Set Dua</h1>
          <h1 className='text-xl text-white'>Reminders</h1>
          </div>
      </div> 

      {/* Today's Dua */}

      <TodaysDua/>
      
    </div>



  )
}

export default Home