// src/pages/Reminders.js
import { Link } from 'react-router-dom';
import Reminder from '../Components/Reminder';

const Reminders = () => {

  return (
    <div className='relative h-screen overflow-hidden'>
      {/* Header */}
      <div className="flex flex-row justify-between w-full bg-green-600 p-4">
        <h1 className="text-2xl font-bold text-white">Daily Dua Reminder</h1>
        <div className='flex flex-row justify-between items-center pr-16'>
          <h1 className='text-xl text-white pr-7'><Link to="/">Home</Link></h1>
          <h1 className='text-xl text-white'><Link to="/setdua">Set Dua</Link></h1>
        </div>
      </div>
     <Reminder/>
    </div>
  );
};

export default Reminders;
