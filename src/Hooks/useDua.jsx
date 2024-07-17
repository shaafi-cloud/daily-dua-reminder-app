import { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import { database } from '../Firebase'; // Make sure you have your Firebase setup here
import { ref, set, onValue, remove } from 'firebase/database'; // Firebase Realtime Database functions

const useDua = () => {
  const [dua, setDua] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reminders, setReminders] = useState([]);
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

    // Fetch data from Firebase
    const remindersRef = ref(database, 'reminders/');
    onValue(remindersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setReminders(Object.values(data));
      }
    });
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
      const newReminderId = isEditing ? reminders[currentIndex].id : `reminder_${Date.now()}`;

      const isDuplicate = reminders.some(
        (reminder, index) => reminder.dua === dua && reminder.date === date && reminder.time === time && index !== currentIndex
      );

      if (isDuplicate) {
        toast.error('Reminder already exists.');
        return;
      }

      if (isEditing) {
        const updatedReminders = [...reminders];
        clearTimeout(timeoutRef.current[reminders[currentIndex].id]);
        updatedReminders[currentIndex] = newReminder;
        setReminders(updatedReminders);
        toast.success('Reminder updated successfully');
        setIsEditing(false);
        setCurrentIndex(null);

        // Update in Firebase
        set(ref(database, 'reminders/' + newReminderId), newReminder);
      } else {
        const updatedReminders = [...reminders, { ...newReminder, id: newReminderId }];
        setReminders(updatedReminders);
        toast.success('Reminder set successfully');

        // Save to Firebase
        set(ref(database, 'reminders/' + newReminderId), { ...newReminder, id: newReminderId });
      }

      const timeoutId = setTimeout(() => {
        if (Notification.permission === 'granted') {
          new Notification(`It's time for your: ${dua}`);
        }
        playNotificationSound(dua);
      }, timeDifference);

      timeoutRef.current[newReminderId] = timeoutId;

      setDua('');
      setDate('');
      setTime('');
    } else {
      toast.error('Please select a future time for the notification.');
    }
  };

  const handleDelete = (index) => {
    const reminderToDelete = reminders[index];
    clearTimeout(timeoutRef.current[reminderToDelete.id]);

    // Delete from Firebase
    remove(ref(database, 'reminders/' + reminderToDelete.id))
      .then(() => {
        toast.success("Reminder deleted successfully!");

        // Update local state after successful deletion from Firebase
        const updatedReminders = reminders.filter((_, i) => i !== index);
        setReminders(updatedReminders);
      })
      .catch((error) => {
        toast.error('Failed to delete reminder');
      });
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
    reminders, setReminders,
    isEditing, setIsEditing,
    currentIndex, setCurrentIndex,
    timeoutRef,
    handleSubmit,
    handleDelete,
    handleEdit,
    playNotificationSound
  };
};

export default useDua;
