'use strict';

//VARIABLES
const timer = document.querySelector('.timer');
const startbtn = document.querySelector('.start');
const pausebtn = document.querySelector('.pause');
const stopbtn = document.querySelector('.stop');
let counter = 10;
let timestart;


//FUNCTIONS



function countDown() {

    if (counter === 1) {
        clearInterval(timestart);
        console.log("STOP")
    }
    counter--;
    timer.textContent = counter;
}



//LISTENERS
startbtn.addEventListener('click', function () {
    timestart = setInterval(countDown, 1000);
});
