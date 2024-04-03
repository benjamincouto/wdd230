const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  //   console.table(data.prophets);
  displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    //create html elements
    let card = document.createElement("section");
    let fullName = document.createElement("h2");
    let birthdate = document.createElement("p");
    let birthplace = document.createElement("p");
    let portrait = document.createElement("img");

    //prophet's name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    //prophet's info
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

    //prophet's portrait
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname}`
    );
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    //append card
    card.appendChild(fullName);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
};
