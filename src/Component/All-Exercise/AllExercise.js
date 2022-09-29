import React from 'react';

const AllExercise = ({exercise}) => {
    console.log(exercise)
    const {img, name, age, duration} = exercise
    return (
      <div>
        <img src={img} alt="" />
        <div>
          <h3>{name}</h3>
          <p>For Age: {age}</p>
          <p>Time Required: {duration}</p>
        </div>
        <button className=''>Add To List</button>
      </div>
    );
};

export default AllExercise;