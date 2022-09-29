// add break time in local Storage
const addToDB = breakTime => {
    localStorage.setItem('break-time', JSON.stringify(breakTime))
}

// get from local Storage 


export default addToDB;