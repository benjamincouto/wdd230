var currentYear = new Date().getFullYear();
var yourName = "Benjamin Couto";
var yourStateOrCountry = "Uruguay";

var copyright = document.getElementById("copyright");
copyright.innerHTML =
  "&copy; " + currentYear + " " + yourName + " - " + yourStateOrCountry;

var lastModifiedElement = document.getElementById("lastModified");
var lastModifiedDate = document.lastModified;
lastModifiedElement.textContent = "Last Modified: " + lastModifiedDate;
