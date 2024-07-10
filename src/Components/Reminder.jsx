import React, { useContext } from "react";
import { DuaContext } from "../Hooks/duaProvider";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";



const Reminder = () => {
  const { handleEdit, handleDelete, reminders } = useContext(DuaContext);
  const navigate = useNavigate();

  const handleEditAndNavigate = (index) => {
    handleEdit(index);
    navigate('/setdua')
  }

  return (
    <div className="relative h-screen overflow-hidden">
      <ToastContainer/>
      <div
        className="flex justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('/prayer.jpg')`,
        }}
      >
        <div className="flex flex-col mt-5">
          <div>
            <h1 className="text-4xl font-bold flex justify-center text-white">
              Your Reminders
            </h1>
          </div>
          <div className="flex flex-wrap justify-center mt-10">
            {reminders.map((reminders, index) => (
              <div
                key={index}
                className="m-2 p-4 bg-white rounded-lg shadow-lg flex flex-col items-start"
              >
                <p className="font-semibold text-lg overflow-hidden overflow-ellipsis">
                  {reminders.dua}
                </p>
                <p className="text-gray-700">Date: {reminders.date}</p>
                <p className="text-gray-700">Time: {reminders.time}</p>
                <div className="flex flex-row space-x-4 mt-2">
                  <button
                    onClick={() => handleEditAndNavigate(index)}
                    className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reminder;
