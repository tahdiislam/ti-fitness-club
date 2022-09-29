import React, { useEffect, useState } from "react";
import { addToDB, getBreakTimeFromDB } from "../../Utilities/localDB";
import AllExercise from "../All-Exercise/AllExercise";
import Header from "../Header/Header";
import SideBar from "../Side-Bar/SideBar";
import './Body.css'

const Body = () => {
  const [exercises, setExercises] = useState([]);
  const [duration, setDuration] = useState(0);
  const [breakTime, setBreakTime] = useState(0);

  // load data from api
  useEffect(() => {
    fetch("fitness.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  //get break time from local storage
  useEffect(() => {
    const storedBreakTime = getBreakTimeFromDB();
    // console.log(storedBreakTime)
    // display break time
    setBreakTime(storedBreakTime)
  },[])
  // add break time handler
  const handleAddBreakTime = (breakTime) => {
    setBreakTime(breakTime);
    // set break time in local Storage
    addToDB(breakTime);
  };

  return (
    <section className="container mx-auto">
      <Header></Header>
      <div className="main-container grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-6
      ">
        <div className="md:col-span-3 lg:col-span-4">
          <h4 className="text-2xl font-semibold my-7">
            Select today's exercise
          </h4>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {exercises.map((exercise) => (
              <AllExercise
                setDuration={setDuration}
                key={exercise.id}
                exercise={exercise}
              ></AllExercise>
            ))}
          </div>
        </div>
        <div className="side-Bar md:col-span-2 lg:col-span-2">
          <SideBar
            duration={duration}
            breakTime={breakTime}
            handleAddBreakTime={handleAddBreakTime}
          ></SideBar>
        </div>
      </div>
    </section>
  );
};

export default Body;
