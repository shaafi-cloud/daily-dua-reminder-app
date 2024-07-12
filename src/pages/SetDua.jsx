import { Link } from "react-router-dom";
import SetDuaForm from "../Components/SetDuaForm";

const SetDua = () => {
 
  return (
    <div className="relative h-screen overflow-hidden">

      {/* Header */}
      <div className="flex flex-row justify-between w-full bg-green-600 p-4">
        <h1 className="text-2xl font-bold text-white">Daily Dua Reminder</h1>
        <div className="flex flex-row justify-between items-center pr-16">
          <h1 className="text-xl text-white pr-7">
            <Link to="/Home">Home</Link>
          </h1>
          <h1 className="text-xl text-white">
            <Link to="/reminders">Your reminders</Link>
          </h1>
        </div>
      </div>
      <SetDuaForm />
    </div>
  );
};

export default SetDua;
