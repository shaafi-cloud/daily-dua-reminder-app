import { useState, useRef, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

 const useDua = () => {
  const [dua, setDua] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [reminders, setReminder] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
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
  }, []);

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

      const isDuplicate = reminders.some(
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
        const updatedReminders = [...reminders];
        clearTimeout(timeoutRef.current[reminders[currentIndex]]);
        updatedReminders[currentIndex] = newReminder;
        setReminder(updatedReminders);
        setSuccessMessage('Reminder updated successfully');
        setIsEditing(false);
        setCurrentIndex(null);
      } else {
        setReminder([...reminders, newReminder]);
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
    const reminderToDelete = reminders[index];
    clearTimeout(timeoutRef.current[reminderToDelete]);

    setReminder(reminders.filter((_, i) => i !== index));
    delete timeoutRef.current[reminderToDelete];
  };

  const handleEdit = (index) => {
    const reminderToEdit = reminders[index];
    setDua(reminderToEdit.dua);
    setDate(reminderToEdit.date);
    setTime(reminderToEdit.time);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  return {
    dua, setDua,
    date, setDate,
    time, setTime,
    successMessage, setSuccessMessage,
    errorMessage, setErrorMessage,
    reminders, setReminder,
    isEditing, setIsEditing,
    currentIndex, setCurrentIndex,
    timeoutRef,
    handleSubmit,
    handleDelete,
    handleEdit,
    playNotificationSound,
  };
};

export default useDua