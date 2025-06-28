'use strict';

//VARIABLES
const timer = document.querySelector('.timer');
const startbtn = document.querySelector('.start');
const pausebtn = document.querySelector('.pause');
const stopbtn = document.querySelector('.stop');
const resumebtn = document.querySelector('.resume');
const addTime = document.querySelector('.addTime');
const minusTime = document.querySelector('.decreaseTime');

let extratime = 10;

let counter = 10;
let timestart;


//FUNCTIONS
function countDown() {
    if (counter === 1) {
        clearInterval(timestart);
        console.log("STOP")
        startbtn.disabled = false;
        resumebtn.disabled = true;
        pausebtn.classList.add('hidden');
        resumebtn.classList.add('hidden');


    }
    counter--;                                  //decrements the counter
    timer.textContent = counter;                //updating the timer in the DOM 
}

function pauseTime() {
    clearInterval(timestart);
    console.log("Pause button is clicked!");
}

function resumeTime() {
    timestart = setInterval(countDown, 1000);
    console.log('Time is resumed');
}

function addTimer() {
    timer.textContent = counter += extratime;

}

function minusTimer() {

    if (counter !== 0 || counter < 0) {
        timer.textContent = counter -= extratime;
    } else {
        alert("Can't decrease time anymore");
    }
}

//LISTENERS

//Start Button
startbtn.addEventListener('click', function () { //when the start button is clicked the timer starts counting down to every 1 second
    timestart = setInterval(countDown, 1000);
    startbtn.disabled = true;                   //disables the start button when the timer starts
    startbtn.classList.add('hidden');           // hides the start button when the timer starts
});

//Pause Button
pausebtn.addEventListener('click', function () {
    pauseTime();
    pausebtn.disabled = true;                   // disables the pause button when clicked to prevent bugs 
    resumebtn.disabled = false;                 // undisables the resume button so that the user can resume the timer when the pause button is clicked

    resumebtn.classList.remove('hidden');       // shows the resume button when the pause button is clicked
    pausebtn.classList.add('hidden');           // removes the pause button 

});

//Resume Button
resumebtn.addEventListener('click', function () {
    resumeTime();
    pausebtn.disabled = false;                 //undisables the pause button
    resumebtn.disabled = true;                 //disables the resume button to prevent bugs

    resumebtn.classList.add('hidden');         //hides the resume button 
    pausebtn.classList.remove('hidden');       //unhide the pause button

});

addTime.addEventListener('click', function () {

    addTimer();

});

minusTime.addEventListener('click', function () {

    minusTimer();

});


