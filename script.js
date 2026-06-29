// Countdown Timer

const targetDate = new Date("July 5, 2026 20:00:00").getTime();

setInterval(() => {

const now = new Date().getTime();

const distance = targetDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("timer").innerHTML =
days + "d : " +
hours + "h : " +
minutes + "m : " +
seconds + "s";

},1000);

// Live Slots Counter

let slots = 0;
const maxSlots = 12;

document.getElementById("slots-count").innerHTML =
slots + " / " + maxSlots;
function toggleMenu(){

document.querySelector("nav").classList.toggle("active");

}
const cards=document.querySelectorAll(".card,.feature,.prize-card,.slots-card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition=".6s";

observer.observe(card);

});
const form = document.querySelector("form");
const success = document.getElementById("success");

form.addEventListener("submit", function(e){
    e.preventDefault();

    success.style.display = "block";

    form.reset();

    setTimeout(()=>{
        success.style.display = "none";
    },3000);
});
