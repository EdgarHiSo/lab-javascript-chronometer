const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  const bottonLeft = document.querySelector('#btnLeft').innetText
  switch(bottonLeft) {
    case "START":
      document.querySelector('#btnLeft').classList.toggle('start')
      document.querySelector('#btnLeft').classList.toggle('stop')
      document.querySelector('#btnLeft').innetText = "STOP"
      console.log("start")
      chronometer.startClick(printTime)
    break;
    case "STOP":
      document.querySelector('#btnLeft').classList.toggle('stop')
      document.querySelector('#btnLeft').classList.toggle('start')
      document.querySelector('#btnLeft').innetText = "START"
      chronometer.stopClick()
    break;
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here  
  const btnRight = document.querySelector('#btnRight').innetText
  switch (btnRight) {
    case 'SPLIT':
      document.querySelector('#btnRight').classList.toggle('Split')
      document.querySelector('#btnRight').classList.toggle('Reset')
      document.querySelector('btnRight').innetText = 

    break;
    case 'RESET'
    break;
  }
});
