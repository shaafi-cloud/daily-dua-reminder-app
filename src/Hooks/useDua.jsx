import { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';

 const useDua = () => {
  const [dua, setDua] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reminder, setReminder] = useState([]);
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

      const isDuplicate = reminder.some(
        (reminder, index) => reminder.dua === dua && reminder.date === date && reminder.time === time && index !== currentIndex
      );

      if (isDuplicate) {
        toast.error('Reminder already exists.');
        return;
      }

      if (isEditing) {
        const updatedReminders = [...reminder];
        clearTimeout(timeoutRef.current[reminder[currentIndex]]);
        updatedReminders[currentIndex] = newReminder;
        setReminder(updatedReminders);
        toast.success('Reminder updated successfully');
        setIsEditing(false);
        setCurrentIndex(null);
      } else {
        setReminder([...reminder, newReminder]);
        toast.success('Reminder set successfully');
      }
      const timeoutId = setTimeout(() => {
        if (Notification.permission === 'granted') {
          new Notification(`It's time for your: ${dua}`);
        }
        playNotificationSound(dua);
      }, timeDifference);

      timeoutRef.current[newReminder] = timeoutId;

      setDua('');
      setDate('');
      setTime('');
    } else {
      toast.error('Please select a future time for the notification.');
    }
  };

  const handleDelete = (index) => {
    const reminderToDelete = reminder[index];
    clearTimeout(timeoutRef.current[reminderToDelete]);

    setReminder(reminder.filter((_, i) => i !== index));
    delete timeoutRef.current[reminderToDelete];
    toast.success("Reminder deleted successfully!")
  };

  const handleEdit = (index) => {
    const reminderToEdit = reminder[index];
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
    reminder, setReminder,
    isEditing, setIsEditing,
    currentIndex, setCurrentIndex,
    timeoutRef,
    handleSubmit,
    handleDelete,
    handleEdit,
    playNotificationSound
  };
};

export default useDua