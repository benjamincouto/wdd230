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

    getRandomCompany(data);
  } catch (error) {
    console.log("Unable to load data");
  }
}

getAdvertisingData();

function getRandomCompany(data) {
  // get random index
  let maxIndex = data.members.length;
  let randomIndex1 = getRandomInt(maxIndex);
  let randomIndex2 = getRandomInt(maxIndex);
  // while loop so index 2 is different
  do {
    randomIndex2 = getRandomInt(maxIndex);
  } while (randomIndex1 === randomIndex2);

  // company data
  let companyName1 = data.members[randomIndex1].name;
  let slogan1 = data.members[randomIndex1].slogan;
  let website1 = data.members[randomIndex1].website;

  let companyName2 = data.members[randomIndex2].name;
  let slogan2 = data.members[randomIndex2].slogan;
  let website2 = data.members[randomIndex2].website;

  // advertisement 1
  let heading1 = document.createElement("h3");
  let text1 = document.createElement("p");
  let web1 = document.createElement("a");

  heading1.textContent = companyName1;
  text1.textContent = slogan1;
  web1.textContent = website1;
  web1.setAttribute("href", web1);

  spot1.appendChild(heading1);
  spot1.appendChild(text1);
  spot1.appendChild(web1);

  // advertisement 2
  let heading2 = document.createElement("h3");
  let text2 = document.createElement("p");
  let web2 = document.createElement("a");

  heading2.textContent = companyName2;
  text2.textContent = slogan2;
  web2.textContent = website2;
  web2.setAttribute("href", web2);

  spot2.appendChild(heading2);
  spot2.appendChild(text2);
  spot2.appendChild(web2);
}
