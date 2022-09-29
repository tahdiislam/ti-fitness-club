import React from 'react';
import { CheckLg } from 'react-bootstrap-icons';
import userImg from '../../images/user-img.jpg'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const SideBar = ({ duration, breakTime, handleAddBreakTime }) => {
  // finish toast
  const notify = () => {
    toast.success('you are done', {position: toast.POSITION.TOP_CENTER, autoClose: 1000})
  };

  return (
    <div className="ml-3 sticky top-4">
      <div>
        <div className="flex items-center justify-center bg-blue-100 px-3 py-2 rounded-lg">
          <img className="w-10 rounded-lg" src={userImg} alt="user-images" />
          <h3 className="text-xl font-bold ml-2">Tahdi Islam</h3>
        </div>
        <div className="flex justify-around my-4 bg-blue-100 px-3 py-2 rounded-lg">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold">75kg</h2>
            <h3 className="text-xl font-medium">Weight</h3>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold">5.8</h2>
            <h3 className="text-xl font-medium">Height</h3>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold">21yrs</h2>
            <h3 className="text-xl font-medium">Age</h3>
          </div>
        </div>
      </div>
      <div className="user-activity my-6 bg-blue-100 px-3 py-2 rounded-lg">
        <h3 className="text-2xl font-bold text-center">Add a Break</h3>
        <div className="flex justify-around items-center flex-wrap my-4">
          <button
            onClick={() => handleAddBreakTime(10)}
            className="hover:bg-blue-600 hover:text-white p-4 rounded-xl text-xl"
          >
            10s
          </button>
          <button
            onClick={() => handleAddBreakTime(20)}
            className="hover:bg-blue-600 hover:text-white p-4 rounded-xl text-xl"
          >
            20s
          </button>
          <button
            onClick={() => handleAddBreakTime(30)}
            className="hover:bg-blue-600 hover:text-white p-4 rounded-xl text-xl"
          >
            30s
          </button>
          <button
            onClick={() => handleAddBreakTime(40)}
            className="hover:bg-blue-600 hover:text-white p-4 rounded-xl text-xl"
          >
            40s
          </button>
          <button
            onClick={() => handleAddBreakTime(50)}
            className="hover:bg-blue-600 hover:text-white p-4 rounded-xl text-xl"
          >
            50s
          </button>
        </div>
      </div>
      <div className="exercise-details my-6">
        <h3 className="text-2xl font-bold text-center bg-blue-100 px-3 py-2 rounded-lg">
          Exercise Details
        </h3>
        <div className="flex items-center justify-around bg-blue-100 px-3 py-4 rounded-lg my-4">
          <h3 className="text-xl font-semibold">Exercise Time:</h3>
          <h3 className="text-xl font-semibold">{duration}s</h3>
        </div>
        <div className="flex items-center justify-around bg-blue-100 px-3 py-4 rounded-lg my-4">
          <h3 className="text-xl font-semibold">Break Time:</h3>
          <h3 className="text-xl font-semibold">{breakTime ? breakTime : 0}s</h3>
        </div>
      </div>
      <button
        onClick={notify}
        className="bg-blue-600 w-full py-3 text-white hover:bg-blue-800 rounded-lg flex items-center justify-center"
      >
        <p>Activity Completed</p>
        <CheckLg />
      </button>
      <ToastContainer/>
    </div>
  );
};

export default SideBar;