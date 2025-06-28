'use strict';

//VARIABLES
const timer = document.querySelector('.timer');
let counter = 0;


//FUNCTIONS
setTimeout(greeting, 1000);

function greeting() {
    console.log("Hello!");
    console.log(counter++);
}

//LISTENERS
