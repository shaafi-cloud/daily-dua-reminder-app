import React, { useEffect, useRef, useState } from 'react';

const SetDua = () => {
  const [dua, setDua] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [reminder, setReminder] = useState([]);
  const [isEditing, setisEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const timeoutRef = useRef({});

  const duaSounds = {
    'أذكار الصباح': '/Subax.mp3',
    'أذكار المساء': '/Galab.mp3',
    'دعاء الخروج من المنزل': '/guriga.mp3',
    'دعاء الدخول من المسجد': '/Masjid.mp3',
    'دعاء الخروج من الصلاة': '/Salaadda.mp3'
  };

  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []); // Adding the dependency array to ensure it runs only once

  const playNotificationSound = (dua) => {
    const audioFile = duaSounds[dua];
    if (audioFile) {
      const audio = new Audio(audioFile);
      audio.play().catch(error => console.error('Error playing audio:', error));
    } else {
      console.error('Audio file not found for:', dua);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedDateTime = new Date(`${date}T${time}`);
    const currentTime = new Date();
    const timeDifference = selectedDateTime - currentTime;

    if (timeDifference > 0) {
      const newReminder = { dua, date, time };

      const isDuplicate = reminder.some(
        (reminder, index) => reminder.dua === dua && reminder.date === date && reminder.time === time && index !== currentIndex
      );

      if (isDuplicate) {
        setErrorMessage('Reminder already exists.');
        setTimeout(() => {
          setErrorMessage('');
        }, 4000);
        return;
      }

      if (isEditing) {
        const updatedReminders = [...reminder];
        clearTimeout(timeoutRef.current[reminder[currentIndex]]);
        updatedReminders[currentIndex] = newReminder;
        setReminder(updatedReminders);
        setSuccessMessage('Reminder updated successfully');
        setisEditing(false);
        setCurrentIndex(null);
      } else {
        setReminder([...reminder, newReminder]);
        setSuccessMessage('Reminder set successfully');
      }
      setErrorMessage('');

      const timeoutId = setTimeout(() => {
        if (Notification.permission === 'granted') {
          new Notification(`It's time for your: ${dua}`);
        }
        playNotificationSound(dua);
      }, timeDifference);

      timeoutRef.current[newReminder] = timeoutId;

      setTimeout(() => {
        setSuccessMessage('');
      }, 4000);

      setDua('');
      setDate('');
      setTime('');
    } else {
      setErrorMessage('Please select a future time for the notification.');
      setSuccessMessage('');

      setTimeout(() => {
        setErrorMessage('');
      }, 4000);
    }
  };

  const handleDelete = (index) => {
    const reminderToDelete = reminder[index];
    clearTimeout(timeoutRef.current[reminderToDelete]);

    setReminder(reminder.filter((_, i) => i !== index));
    delete timeoutRef.current[reminderToDelete];
  };

  const handleEdit = (index) => {
    const reminderToEdit = reminder[index];
    setDua(reminderToEdit.dua);
    setDate(reminderToEdit.date);
    setTime(reminderToEdit.time);
    setisEditing(true);
    setCurrentIndex(index);
  };

  return (
    <div className='relative h-screen overflow-hidden'>
      {successMessage && (
        <div className='w-96 bg-green-500 text-white p-2 rounded-md text-center flex flex-col absolute top-5'>
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className='w-96 bg-red-500 text-white p-2 rounded-md mb-4 text-center absolute top-5'>
          {errorMessage}
        </div>
      )}

      {/* Header */}
      <div className="flex flex-row justify-between w-full bg-green-600 p-4">
        <h1 className="text-2xl font-bold text-white">Daily Dua Reminder</h1>
        <div className='flex flex-row justify-between items-center pr-16'>
          <h1 className='text-xl text-white pr-7'>Home</h1>
          <h1 className='text-xl text-white'>Reminders</h1>
        </div>
      </div>

      <div className='flex justify-center h-full bg-cover bg-center' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('/prayer.jpg')` }}>
        <form onSubmit={handleSubmit} className='px-20 flex flex-col justify-center items-center w-full px-4 mt-14'>
          <h1 className='text-4xl font-bold flex justify-center mb-4'>Set Dua</h1>
          <div className='flex flex-col items-start mb-4 w-full max-w-xs'>
            <label htmlFor="dua" className='text-xl font-semibold'>Dua: </label>
            <select id="dua" value={dua} onChange={(e) => setDua(e.target.value)} className='p-2 border rounded-md mb-5 w-full'>
              <option value="" disabled selected hidden className=''>Select Dua</option>
              <option value="أذكار الصباح">أذكار الصباح</option>
              <option value="أذكار المساء">أذكار المساء</option>
              <option value="دعاء الخروج من الصلاة">دعاء الخروج من الصلاة</option>
              <option value="دعاء الخروج من المنزل">دعاء الخروج من المنزل</option>
              <option value="دعاء الدخول من المسجد">دعاء الدخول من المسجد</option>
            </select>
          </div>

          <div className='flex flex-col items-start mb-4 w-full max-w-xs'>
            <label htmlFor="date" className='text-xl font-semibold'>Date: </label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="p-2 border rounded mb-5 w-full" />
          </div>

          <div className='flex flex-col items-start mb-4 w-full max-w-xs'>
            <label htmlFor="time" className='text-xl font-semibold'>Time: </label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="p-2 border rounded mb-5 w-full" />

            <div className='flex justify-center w-full mt-4'>
              <button type='submit' className='bg-green-500 border rounded-md px-16 py-1 text-white hover:bg-gray-400 transition duration-300 ease-in-out'>
                {isEditing ? 'Update' : 'Add'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SetDua;
