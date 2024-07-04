import React from 'react'
<<<<<<< HEAD
=======
import { Link, useNavigate } from 'react-router-dom'
>>>>>>> d2c2d78d9f5fd20e29a57696862b3b1f76ee3ef0
import TodaysDua from '../Components/TodaysDua';
import { Link } from 'react-router-dom';


const Home = () => {

<<<<<<< HEAD

=======
 
>>>>>>> d2c2d78d9f5fd20e29a57696862b3b1f76ee3ef0

  return (
    <div className='relative h-screen overflow-hidden'>

     {/* Header */}
       <div className="flex flex-row justify-between w-full bg-green-600 p-4">
          <h1 className="text-2xl font-bold text-white">Daily Dua Reminder</h1>
          <div className='flex flex-row justify-between items-center pr-16'>
<<<<<<< HEAD
          <h1 className='text-xl text-white pr-7'><Link to="setdua">Set Dua</Link></h1>
          <h1 className='text-xl text-white'><Link to="Reminders">Your Reminders</Link></h1>
=======
          <h1 className='text-xl text-white pr-7'><Link to="/SetDua">Set Dua</Link></h1>
          <h1 className='text-xl text-white'><Link to="/Reminders">Reminders</Link></h1>
>>>>>>> d2c2d78d9f5fd20e29a57696862b3b1f76ee3ef0
          </div>
      </div> 

      {/* Today's Dua */}

      <TodaysDua/>
      
    </div>



  )
}

export default Home