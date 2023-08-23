const stopwatchDisplay = document.getElementById('stopwatch');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

let startTime;
let interval;

function formatTime(milliseconds) {
  const date = new Date(milliseconds);
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  const millisecondsPart = date.getUTCMilliseconds();
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${millisecondsPart.toString().padStart(3, '0')}`;
}

function updateStopwatch() {
  const currentTime = Date.now() - startTime;
  stopwatchDisplay.textContent = formatTime(currentTime);
}

startButton.addEventListener('click', () => {
  if (!interval) {
    startTime = Date.now();
    interval = setInterval(updateStopwatch, 10);
  }
});

stopButton.addEventListener('click', () => {
  clearInterval(interval);
  interval = null;
});

resetButton.addEventListener('click', () => {
  clearInterval(interval);
  interval = null;
  stopwatchDisplay.textContent = '00:00:00';
});

// Initial display
stopwatchDisplay.textContent = '00:00:00';



// // -----------------------------------------------------


const clockDisplay = document.getElementById('clock');

function updateClock() {
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');

  const timeString = `${hours}:${minutes}:${seconds}`;
  clockDisplay.textContent = timeString;

}

// Initial clock update
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);


// // --------------------------------------------------------------------


// var date = new date();
// var todaytime = document.querySelector(".time")

// function printtime(){
//     var date = new date();
//     var hour = new hour();
//     var min = new min();
//     var sec = new sec();
//     var period = "am"
//     if(hour == 0){
//         hour=12
//     }
//     if(hour>12){
//         hour = hour - 12;
//         period = "pm"

//     }
//     if(hour<10){
//         hour = "0"+hour;

//     }
//     if(min<10){
//         min = "0"+min;
//     }
//     if(sec<10){
//         sec = "0"+sec;
//     }
//     var time = hour + ":"+ min+":"+sec;
//     document.querySelector(".time").innerHTML = time;
//     setInterval(printtime,1000)
// }
// printtime();



// ----------------------------------------------------------------------------------------------
