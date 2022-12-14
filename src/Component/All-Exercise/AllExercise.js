import React from 'react';
import { PlusSquare } from 'react-bootstrap-icons';
import './AllExercise.css'

const AllExercise = ({exercise, setDuration}) => {
    // console.log(exercise)
    const {img, name, age, duration} = exercise
    return (
      <div className="exercise-container relative bg-blue-100 p-2 rounded-lg flex flex-col sm:items-center">
        <img src={img} className="h-72  rounded-md" alt="" />
        <div className='w-full'>
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p className="font-medium">For Age: {age}</p>
          <p className="font-medium">Time Required: {duration}s</p>
        </div>
        <button
          onClick={() => setDuration((previous) => previous + duration)}
          className="bg-blue-600 hover:bg-blue-800 text-white hover:text-gray-300 px-8 py-3 w-full absolute bottom-0 left-0 rounded-lg flex items-center justify-center"
        >
          <p className="mr-2">Add To List</p>
          <PlusSquare className="font-bold" />
        </button>
      </div>
    );
};

export default AllExercise;