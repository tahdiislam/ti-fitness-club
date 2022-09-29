// add break time in local Storage
const addToDB = breakTime => {
    localStorage.setItem('break-time', JSON.stringify(breakTime))
}

// get from local Storage 
const getBreakTimeFromDB = () => {
   const storedBreakTime =  localStorage.getItem("break-time");
   return storedBreakTime;
}

export {addToDB, getBreakTimeFromDB};