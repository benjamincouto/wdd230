// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;
// today's date
const theDateToday = new Date();

//define today
const today = Date.now();
console.log("Today:", today);

// point to html element
const visitsDisplay = document.querySelector(".discover-visits");

// define variable to count number of visits and get info from ls
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

//get last visit from ls
let lastVisit = Number(window.localStorage.getItem("lastVisit-ls")) || 0;
console.log("Last Visit:", lastVisit);

//difference between days
let dayDiff = (today - lastVisit) / msToDays;
console.log("Day Difference:", dayDiff);

if (numVisits !== 0) {
  if (dayDiff >= 0 && dayDiff < 1) {
    visitsDisplay.textContent = "Back so soon! Awesome!";
  } else if (dayDiff >= 1 && dayDiff < 2) {
    visitsDisplay.textContent = `You last visited ${dayDiff.toFixed(
      0
    )} day ago.`;
  } else {
    visitsDisplay.textContent = `You last visited ${dayDiff.toFixed(
      0
    )} days ago.`;
  }
} else {
  visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
}

numVisits++;
lastVisit = today;

localStorage.setItem("numVisits-ls", numVisits);
localStorage.setItem("lastVisit-ls", lastVisit);
