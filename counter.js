//Counter

document.getElementById("supremeGuest").textContent = "today we will be making a counter in javascript"

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
let increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count; // this updates the count on html page. instead of using document.getelementid we set it previously and then come back here
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count; // this updates the count on html page. instead of using document.getelementid we set it previously and then come back here
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count; // this updates the count on html page. instead of using document.getelementid we set it previously and then come back here
}

// Random number Generator
document.getElementById("supremeGuest").textContent = "today we will be making a random generator"

const min = 50;
const max = 100; // by replacing 1 & 10 w/ these we can change the range for our random genreator

let randomNum = Math.floor(Math.random() * 10)+1; //generate number b/w 0 & 1 but since we x by 10  it will give us b/w 0-6. by adding + 1 we get it from 1 - 6;
console.log(randomNum);

const numberBtn = document.getElementById("numberBtn");
const numberLabel = document.getElementById("numberLabel");
const minimum = 1; const maximum = 6;
let randomDigit;
numberBtn.onclick = function(){
    randomDigit = Math.floor(Math.random() * maximum)+ minimum;
    numberLabel.textContent = randomDigit
}
