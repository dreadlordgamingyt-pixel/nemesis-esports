document.addEventListener("DOMContentLoaded", () => {

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

e.preventDefault();

const teamName = form.querySelector('input[placeholder="Team Name"]').value;

alert("🎉 Registration Successful!\n\nWelcome " + teamName + " to NEMESIS ESPORTS.");

form.reset();

});

});
const targetDate = new Date("July 5, 2026 20:00:00").getTime();

setInterval(() => {

const now = new Date().getTime();
const distance = targetDate - now;

const days = Math.floor(distance / (1000*60*60*24));
const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
const seconds = Math.floor((distance % (1000*60)) / 1000);

document.getElementById("timer").innerHTML =
`${days}d : ${hours}h : ${minutes}m : ${seconds}s`;

},1000);
let slots = 0;
document.getElementById("slots").innerText = slots + " / 12";
