import React, { useContext, useEffect } from "react";
import { DuaContext } from "../Hooks/duaProvider";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const SetDuaForm = () => {
  const {
    dua,
    setDua,
    // setSuccessMessage,
    // setErrorMessage,
    date,
    setDate,
    time,
    setTime,
    isEditing,
    setIsEditing,
    handleSubmit,
  } = useContext(DuaContext);

  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const isSubmittedSuccessfully = handleSubmit(event);
    if (isSubmittedSuccessfully) {
      navigate('/reminders'); //
    }
  }
 



  return (
    <div className="flex justify-center items-center h-full bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('/prayer.jpg')`,}}>

      <ToastContainer />

      <form
        onSubmit={handleFormSubmit}
        className="bg-white p-10 rounded-xl shadow-lg flex flex-col justify-center items-center w-full max-w-md mb-12">
        <h1 className="text-4xl font-bold flex justify-center mb-4">Set Dua</h1>
        <div className="flex flex-col items-start mb-4 w-full">
          <label htmlFor="dua" className="text-xl font-semibold">
            Dua:{" "}
          </label>
          <select
            id="dua"
            value={dua}
            onChange={(e) => setDua(e.target.value)}
            className="p-2 border border-green-800 rounded-xl mb-5 w-full"
          >
            <option value="" disabled selected hidden>
              Select Dua
            </option>
            <option value="أذكار الصباح">أذكار الصباح</option>
            <option value="أذكار المساء">أذكار المساء</option>
            <option value="دعاء الخروج من الصلاة">دعاء الخروج من الصلاة</option>
            <option value="دعاء الخروج من المنزل">دعاء الخروج من المنزل</option>
            <option value="دعاء الدخول من المسجد">دعاء الدخول من المسجد</option>
          </select>
        </div>

        <div className="flex flex-col items-start mb-4 w-full">
          <label htmlFor="date" className="text-xl font-semibold">
            Date:{" "}
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-2 border border-green-800 rounded-xl mb-5 w-full"
          />
        </div>

        <div className="flex flex-col items-start mb-4 w-full">
          <label htmlFor="time" className="text-xl font-semibold">
            Time:{" "}
          </label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="p-2 border border-green-800 rounded-xl mb-5 w-full"
          />

          <div className="flex justify-center w-full mt-4">
            <button
              type="submit"
              className="bg-green-500 w-full border rounded-2xl px-16 py-1 text-white hover:bg-green-800 transition duration-300 ease-in-out"
            >
              {isEditing ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SetDuaForm;
