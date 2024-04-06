const spot1 = document.querySelector(".spot1");
const spot2 = document.querySelector(".spot2");

const urlMembers =
  "https://benjamincouto.github.io/wdd230/chamber/data/members.json";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function getAdvertisingData() {
  try {
    const response = await fetch(urlMembers);
    const data = await response.json();

    getRandomCompany();
  } catch (error) {
    console.log("Unable to load data");
  }
}

getAdvertisingData();

function getRandomCompany() {
  let maxIndex = data.members.length;
  console.log(maxIndex);
  let randomIndex = getRandomInt(maxIndex);
  console.log(randomIndex);
}
