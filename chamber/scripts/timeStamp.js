const form = document.querySelector(".wf1");
const timeStamp = getElementById("timeStamp");

form.addEventListener("submit", setDateTime);

function setDateTime() {
  // Get the current date and time
  var currentDateTime = new Date().toLocaleString();
  // Set the value
  timeStamp.value = currentDateTime;
}
