'use strict';

//VARIABLES
const timer = document.querySelector('.timer');
let counter = 10;


//FUNCTIONS


const timestart = setInterval(countDown, 1000);
function countDown() {

    if (counter === 1) {
        clearInterval(timestart);
        console.log("STOP")
    }
    counter--;
    timer.textContent = counter;
}



//LISTENERS
