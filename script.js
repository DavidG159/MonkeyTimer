'use strict';

//VARIABLES
const timer = document.querySelector('.timer');
const startbtn = document.querySelector('.start');
const pausebtn = document.querySelector('.pause');
const resumebtn = document.querySelector('.resume');
const addTimeTen = document.querySelector('.addTime1'); // Add 10 mins
const minusTimeTen = document.querySelector('.decreaseTime1'); // Decrease 10 mins
const addTimeF = document.querySelector('.addTime2'); //Add 5 mins
const minusTimeF = document.querySelector('.decreaseTime2'); // Decrease 5 mins
const restart = document.querySelector('.restartTime');
const monkepic1 = document.querySelector('.monke1');
const text_alert = document.querySelector('.alert_text');
const modal = document.querySelector('.modal');
const close_modal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
//SFX
const monkey1 = new Audio('sfx/monkeysfx1.mp3');
const clicsfx = new Audio('sfx/click2.mp3');
//Test Timer
let Ten = 10;
let Five = 5;
let counter = 10;
let timestart;
let audioCounter = 0;
let theTime;
//Timer
let [minutes, seconds] = [25, 60];

//When esc button is pressed the overlay exits
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden'))
        closeModal();

});



const closeModal = function () {
    modal.classList.add('hidden');
    monkepic1.classList.add('hidden');
    overlay.classList.add('hidden');
    close_modal.add('hidden');
}


//Timer function countdown
const displayTimer = function () {
    seconds--;
    if (seconds === 0) {
        if (minutes === 0 && seconds === 0) {

            console.log(`Minutes:${minutes} Seconds:${seconds}0`);
            timer.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
            clearInterval(theTime);
            monkey1.play();
            console.log('STOP');

            modal.classList.remove('hidden');
            close_modal.classList.remove('hidden');
            overlay.classList.remove('hidden');
            monkepic1.classList.remove('hidden');


        } else {
            timer.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
            minutes--;
            seconds = 60;


        }

    } else if (seconds < 10) {
        timer.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;

    } else {
        timer.textContent = `${minutes}:${seconds}`;
        console.log(`Minutes:${minutes} Seconds:${seconds}`);
    }
}


//at the start of the website it's back to default
rewindTime();

//FUNCTIONS
function repeatAudio() {
    monkey1.play();
    audioCounter++;

    if (audioCounter === 3) {
        monkey1.removeEventListener("ended", repeatAudio);
        audioCounter = 0;
    }

}

//restart or normal
function rewindTime() {
    clearInterval(theTime);
    [minutes, seconds] = [25, 60];
    timer.textContent = `25:00`;
    startbtn.disabled = false;
    startbtn.classList.remove('hidden');
    pausebtn.classList.add('hidden');
    resumebtn.classList.add('hidden');
    addTimeTen.classList.remove('hidden');
    minusTimeTen.classList.remove('hidden');
    addTimeF.classList.remove('hidden');
    minusTimeF.classList.remove('hidden');
    monkey1.removeEventListener('ended', repeatAudio);



}

//pause
function pauseTime() {
    clearInterval(theTime);
    console.log("Pause button is clicked!");
}
//resume
function resumeTime() {
    theTime = setInterval(displayTimer, 1000);
    console.log('Time is resumed');
}
//add time
function adjustTimer(value) {


    if (minutes + value >= 5) {
        minutes += value;
        timer.textContent = `${minutes}:00`;
    } else {
        alert("Can't decrease any further!");
    }
}



//LISTENERS

overlay.addEventListener('click', closeModal);
close_modal.addEventListener('click', closeModal);

//Start Button
startbtn.addEventListener('click', function () { //when the start button is clicked the timer starts counting down to every 1 second
    clicsfx.play();

    theTime = setInterval(displayTimer, 1000);

    setTimeout(() => {
        minutes--;
    }, 500);

    startbtn.disabled = true;                   //disables the start button when the timer starts
    startbtn.classList.add('hidden');           // hides the start button when the timer starts
    addTimeTen.classList.add('hidden');
    minusTimeTen.classList.add('hidden');
    addTimeF.classList.add('hidden');
    minusTimeF.classList.add('hidden');
    pausebtn.classList.remove('hidden');
    resumebtn.classList.add('hidden');

});

//Pause Button
pausebtn.addEventListener('click', function () {
    clicsfx.play();
    pauseTime();
    resumebtn.classList.remove('hidden');       // shows the resume button when the pause button is clicked
    pausebtn.classList.add('hidden');           // removes the pause button 

});

//Resume Button
resumebtn.addEventListener('click', function () {
    clicsfx.play();
    resumeTime();


    resumebtn.classList.add('hidden');         //hides the resume button 
    pausebtn.classList.remove('hidden');       //unhide the pause button

});

//Add time
addTimeTen.addEventListener('click', function () {
    clicsfx.play();
    adjustTimer(10);

});
//Minus time
minusTimeTen.addEventListener('click', function () {
    clicsfx.play();
    adjustTimer(-10);
});

addTimeF.addEventListener('click', function () {
    clicsfx.play();
    adjustTimer(5);

});

minusTimeF.addEventListener('click', function () {
    clicsfx.play();
    adjustTimer(-5);

});

//Rewind
restart.addEventListener('click', function () {
    clicsfx.play();

    rewindTime();
});
