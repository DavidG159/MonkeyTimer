'use strict';

//VARIABLES
const timer = document.querySelector('.timer');
let counter = 10;


//FUNCTIONS

setInterval(countDown, 1000);

function countDown() {

    if (counter === 0) {
        clearInterval();
        console.log("STOP")
    }
    counter--;
    timer.textContent = counter;
}




//LISTENERS
