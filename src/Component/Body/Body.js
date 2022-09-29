import React, { useEffect, useState } from "react";
import AllExercise from "../All-Exercise/AllExercise";
import Header from "../Header/Header";
import SideBar from "../Side-Bar/SideBar";
import './Body.css'

const Body = () => {
  const [exercises, setExercises] = useState([]);

  // load data from api
  useEffect(() => {
    fetch("fitness.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  return (
    <section className="container mx-auto">
      <Header></Header>
      <div className="main-container">
        <div>
          <h4 className="text-2xl font-semibold my-7">Select today's exercise</h4>
          <div className="grid grid-cols-3 gap-4">
            {exercises.map((exercise) => (
              <AllExercise key={exercise.id} exercise={exercise}></AllExercise>
            ))}
          </div>
        </div>
        <div className="side-Bar">
            <SideBar></SideBar>
        </div>
      </div>
    </section>
  );
};

export default Body;
