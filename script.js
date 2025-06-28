'use strict';

//VARIABLES
const timer = document.querySelector('.timer');
const startbtn = document.querySelector('.start');
const pausebtn = document.querySelector('.pause');
const stopbtn = document.querySelector('.stop');
const resumebtn = document.querySelector('.resume');
let counter = 10;
let timestart;


//FUNCTIONS
function countDown() {
    if (counter === 1) {
        clearInterval(timestart);
        console.log("STOP")
        startbtn.disabled = false;
    }
    counter--;                  //decrements the counter
    timer.textContent = counter;//updating the timer in the DOM 
}

function pauseTime() {
    clearInterval(timestart);
    console.log("Pause button is clicked!");
}

function resumeTime() {
    timestart = setInterval(countDown, 1000);
}


//LISTENERS

//Start Button
startbtn.addEventListener('click', function () { //when the start button is clicked the timer starts counting down to every 1 second
    timestart = setInterval(countDown, 1000);
    startbtn.disabled = true;
});

//Pause Button
pausebtn.addEventListener('click', function () {
    pauseTime();
    pausebtn.classList.add('hidden');
    resumebtn.classList.remove('hidden');

});

//Resume Button
resumebtn.addEventListener('click', function () {
    resumeTime();
});

