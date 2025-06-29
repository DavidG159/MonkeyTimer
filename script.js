'use strict';

//VARIABLES
const timer = document.querySelector('.timer');
const startbtn = document.querySelector('.start');
const pausebtn = document.querySelector('.pause');
const resumebtn = document.querySelector('.resume');
const addTime = document.querySelector('.addTime');
const minusTime = document.querySelector('.decreaseTime');
const restart = document.querySelector('.restartTime');
//SFX
const monkey1 = new Audio('sfx/monkeysfx1.mp3');

let extratime = 10;
let counter = 10;
let timestart;
let audioCounter = 0;

//Timer
let [minutes, seconds] = [25, 0];

function displayTimer() {
    seconds--;
    if (seconds === 0) {
        seconds = 0;
        minutes--;
    }


}




rewindTime();

//FUNCTIONS
function countDown() {
    if (counter === 1) {
        clearInterval(timestart);
        pausebtn.classList.add('hidden');
        resumebtn.classList.add('hidden');
        startbtn.classList.remove('hidden');
        repeatAudio();
        monkey1.addEventListener("ended", repeatAudio);

    }
    counter--;                                  //decrements the counter
    timer.textContent = counter;                //updating the timer in the DOM 
}

function repeatAudio() {
    monkey1.play();
    audioCounter++;

    if (audioCounter === 3) {
        monkey1.removeEventListener("ended", repeatAudio);
        audioCounter = 0;
    }

}

//restart
function rewindTime() {
    clearInterval(timestart);
    minutes = 25;
    timer.textContent = minutes;
    startbtn.disabled = false;
    startbtn.classList.remove('hidden');
    pausebtn.classList.add('hidden');
    resumebtn.classList.add('hidden');
    // stopbtn.classList.add('hidden');
    addTime.classList.remove('hidden');
    minusTime.classList.remove('hidden');
    monkey1.removeEventListener('ended', repeatAudio);



}

//pause
function pauseTime() {
    clearInterval(timestart);
    console.log("Pause button is clicked!");
}
//resume
function resumeTime() {
    timestart = setInterval(countDown, 1000);
    console.log('Time is resumed');
}
//add time
function addTimer() {
    timer.textContent = counter += extratime;

}
//minus time
function minusTimer() {

    if (counter === 10) {
        alert("Couldn't decrease the time anymore! Please add more time!")
    } else {
        timer.textContent = counter -= extratime;
    }
}


//LISTENERS

//Start Button
startbtn.addEventListener('click', function () { //when the start button is clicked the timer starts counting down to every 1 second
    timestart = setInterval(countDown, 1000);
    startbtn.disabled = true;                   //disables the start button when the timer starts
    startbtn.classList.add('hidden');           // hides the start button when the timer starts
    addTime.classList.add('hidden');
    minusTime.classList.add('hidden');
    pausebtn.classList.remove('hidden');

});

//Pause Button
pausebtn.addEventListener('click', function () {
    pauseTime();
    resumebtn.classList.remove('hidden');       // shows the resume button when the pause button is clicked
    pausebtn.classList.add('hidden');           // removes the pause button 

});

//Resume Button
resumebtn.addEventListener('click', function () {
    resumeTime();


    resumebtn.classList.add('hidden');         //hides the resume button 
    pausebtn.classList.remove('hidden');       //unhide the pause button

});


addTime.addEventListener('click', function () {

    addTimer();

});

minusTime.addEventListener('click', function () {

    minusTimer();

});

restart.addEventListener('click', function () {

    rewindTime();
});


console.log(timestart);