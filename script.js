document.addEventListener("DOMContentLoaded", () => {

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

e.preventDefault();

const teamName = form.querySelector('input[placeholder="Team Name"]').value;

alert("🎉 Registration Successful!\n\nWelcome " + teamName + " to NEMESIS ESPORTS.");

form.reset();

});

});
