const startTimerButton = document.querySelector("#practiceTimerStartBtn");
const pauseTimerButton = document.querySelector("#practiceTimerPauseBtn");
const stopTimerButton = document.querySelector("#practiceTimerEndBtn");
const resetTimerButton = document.querySelector("#practiceTimerResetBtn");
const timerDisplay = document.querySelector("#timer");
const totalTime = document.querySelector("#totalTime");
let startTime, updatedTime, difference, tInterval, savedTime, paused = 0, running = 0;

const startTimer = () => {
  if(!running){
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    paused = 0;
    running = 1;
    // timerDisplay.style.background = "#FF0000";
    // timerDisplay.style.cursor = "auto";
    // timerDisplay.style.color = "yellow";
    // startTimerButton.classList.add('lighter');
    // stopTimerButton.classList.remove('lighter');
    // startTimerButton.style.cursor = "pointer";
    // stopTimerButton.style.cursor = "pointer";
  }
}

const pauseTimer = () => {
  if (!difference){
    // if timer never started, don't allow pause button to do anything
  } else if (!paused) {
    clearInterval(tInterval);
    savedTime = difference;
    paused = 1;
    running = 0;
    // timerDisplay.style.background = "#A90000";
    // timerDisplay.style.color = "#690000";
    // timerDisplay.style.cursor = "pointer";
    // startTimerButton.classList.remove('lighter');
    // stopTimerButton.classList.add('lighter');
    // startTimerButton.style.cursor = "pointer";
    // stopTimerButton.style.cursor = "auto";
  } else {
    startTimer();
  }
}

// const stopTimer = () => {
//     paused = 1;
// }

const resetTimer = () => {
    clearInterval(tInterval);
    savedTime = 0;
    difference = 0;
    paused = 0;
    running = 0;
    timerDisplay.innerHTML = "00:00:00";
  // timerDisplay.style.background = "#A90000";
  // timerDisplay.style.color = "#fff";
  // timerDisplay.style.cursor = "pointer";
  // startTimerButton.classList.remove('lighter');
  // stopTimerButton.classList.remove('lighter');
  // startTimerButton.style.cursor = "pointer";
  // stopTimerButton.style.cursor = "auto";
}


const getShowTime = () => {
  updatedTime = new Date().getTime();
  if (savedTime){
    difference = (updatedTime - startTime) + savedTime;
  } else {
    difference =  updatedTime - startTime;
  }
  // let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  // let milliseconds = Math.floor((difference % (1000 * 60)) / 100);

  // hours = (hours < 10) ? "0" + hours : hours;
  hours = (hours < 10) ? `0${hours}` : hours;
  // minutes = (minutes < 10) ? "0" + minutes : minutes;
  minutes = (minutes < 10) ? `0${minutes}` : minutes;
  // seconds = (seconds < 10) ? "0" + seconds : seconds;
  seconds = (seconds < 10) ? `0${seconds}` : seconds;
  // milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? "00" + milliseconds : "0" + milliseconds : milliseconds;
  // milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? `00${milliseconds}` : `0${milliseconds}` : milliseconds;
  timerDisplay.innerHTML = `${hours}:${minutes}:${seconds}`;
}


// stopTimerButton.addEventListener("click", function() {
//     practiceTimerStartBtn.style.display = "none";
//     stopTimerButton.style.display = "block";
//     stopTimerButton.style.display = "block";
//     const newDate = new Date(Date.now());
//     const year = newDate.getFullYear();
//     const date = newDate.getDate();
//     const month = newDate.getMonth() + 1;
//     const finalDate = `${year}-${month}-${date}`

//     startDateInput.value = finalDate;
    
//     const newTime = newDate.toTimeString();
//     startTimeInput.value = newTime.slice(0,5);
// })

stopTimerButton.style.display = "none";
resetTimerButton.style.display = "none";
pauseTimerButton.style.display = "none";

function pad(number, length) {

    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }

    return str;

}

startTimerButton.addEventListener("click", function() {
    startTimer();
    startTimerButton.style.display = "none";
    pauseTimerButton.style.display = "block";
    stopTimerButton.style.display = "block";
    resetTimerButton.style.display = "none";

    const newDate = new Date(Date.now());
    const year = newDate.getFullYear();
    let date = newDate.getDate();
    date = pad(date, 2);
    // console.log(date)
    let month = newDate.getMonth() + 1;
    month = pad(month, 2);
    const finalDate = `${year}-${month}-${date}`
    const newTime = newDate.toTimeString();
    // startTimeInput.value = newTime.slice(0,5);
    startDateInput.value = `${finalDate}T${newTime.slice(0,5)}`;

})

stopTimerButton.addEventListener("click", function() {
    pauseTimer();
    console.log(timerDisplay.innerHTML)
    if(confirm ("Are you sure?")) {
        // console.log(paused)
        
        if(paused === 0){
            pauseTimer();
        }

        startTimerButton.style.display = "none";
        pauseTimerButton.style.display = "none";
        stopTimerButton.style.display = "none";
        resetTimerButton.style.display = "block";

        totalTime.value = timerDisplay.innerHTML;

        const newDate = new Date(Date.now());
        const year = newDate.getFullYear();
        const date = newDate.getDate();
        const month = newDate.getMonth() + 1;
        const finalDate = `${year}-${month}-${date}`
        // endDateInput.value = finalDate;
        const newTime = newDate.toTimeString();
        // endTimeInput.value = newTime.slice(0,5);
        } else {
        stopTimerButton.style.display = "block";
        startTimerButton.style.display = "none";
        resetTimerButton.style.display = "none";
    }
})

pauseTimerButton.addEventListener("click", function() {
    pauseTimer();
})

resetTimerButton.addEventListener("click", function() {
    resetTimer();
    stopTimerButton.style.display = "none";
    startTimerButton.style.display = "block";
    resetTimerButton.style.display = "none";
//     const newDate = new Date(Date.now());
//     const year = newDate.getFullYear();
//     const date = newDate.getDate();
//     const month = newDate.getMonth() + 1;
//     const finalDate = `${year}-${month}-${date}`
//     endDateInput.value = finalDate;
    
//     const newTime = newDate.toTimeString();
//     endTimeInput.value = newTime.slice(0,5);
})
