import React from 'react';
import userImg from '../../images/user-img.jpg'

const SideBar = () => {
    return (
      <div className="ml-3">
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
              <h2 className="text-xl font-semibold">75kg</h2>
              <h3 className="text-xl font-medium">Weight</h3>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-semibold">75kg</h2>
              <h3 className="text-xl font-medium">Weight</h3>
            </div>
          </div>
        </div>
        <div className="user-activity"></div>
      </div>
    );
};

export default SideBar;