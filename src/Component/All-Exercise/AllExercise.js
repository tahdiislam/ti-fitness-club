import React from 'react';
import './AllExercise.css'

const AllExercise = ({exercise}) => {
    console.log(exercise)
    const {img, name, age, duration} = exercise
    return (
      <div className='exercise-container relative'>
        <img src={img} className='h-72 rounded-md' alt="" />
        <div>
          <h3 className='text-2xl font-medium'>{name}</h3>
          <p>For Age: {age}</p>
          <p>Time Required: {duration}</p>
        </div>
        <button className='bg-blue-600 hover:bg-blue-800 text-white hover:text-gray-300 px-8 py-3 w-full absolute bottom-0 rounded-lg'>Add To List</button>
      </div>
    );
};

export default AllExercise;