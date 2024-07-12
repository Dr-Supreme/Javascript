//actions
let firstName = "Isaac";
let lastName = "Supreme";

document.getElementById("supremeName").textContent = `Hey my first name is ${firstName}`;
document.getElementById("supremeGuest").textContent = `My last name is ${lastName}`;

console.log(`hey my name is ${firstName}`);
console.log(typeof name);
// this is how we create an alert box:
//window.alert(`this is how we create a window alert`);

//creating user Input box

let username;
// username = window.prompt("whats your Username?"); // this prompts the user to type in a username. this is just 1 way to get a user input
// console.log(username);

document.getElementById("submitButton").onclick = function(){
    username = document.getElementById("userInput").value;
    console.log(username); 
} // this is the second way to take in user input


 
