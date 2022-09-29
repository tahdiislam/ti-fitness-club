import React from 'react';
import userImg from '../../images/user-img.jpg'

const SideBar = () => {
    return (
      <div className="ml-3 sticky top-0">
        <div>
          <div className="flex items-center justify-center bg-blue-100 px-3 py-2 rounded-lg">
            <img className="w-10 rounded-lg" src={userImg} alt="user-images" />
            <h3 className="text-xl font-bold ml-3">Tahdi Islam</h3>
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
          <div className="flex justify-around items-center my-4">
            <button className="hover:bg-blue-600 hover:text-white p-4 rounded-xl text-xl">
              10s
            </button>
            <button className="hover:bg-blue-600 hover:text-white p-4 rounded-xl text-xl">
              10s
            </button>
            <button className="hover:bg-blue-600 hover:text-white p-4 rounded-xl text-xl">
              10s
            </button>
            <button className="hover:bg-blue-600 hover:text-white p-4 rounded-xl text-xl">
              10s
            </button>
            <button className="hover:bg-blue-600 hover:text-white p-4 rounded-xl text-xl">
              10s
            </button>
            <button className="hover:bg-blue-600 hover:text-white p-4 rounded-xl text-xl">
              10s
            </button>
          </div>
        </div>
      </div>
    );
};

export default SideBar;