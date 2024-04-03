const url = "https://benjamincouto.github.io/wdd230/chamber/data/members.json";

const cards = document.querySelector("#cards-directory");

async function getMembersData() {
  const response = await fetch(url);
  const data = await response.json();
  //   console.table(data.prophets);
  displayMembers(data.prophets);
}

getMembersData();

const displayMembers = (members) => {
  members.forEach((company) => {
    //create html elements
    let card = document.createElement("section");
    let companyName = document.createElement("p");
    let logo = document.createElement("img");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("a");

    //company info
    companyName.textContent = `${company.birthdate}`;
    address.textContent = `${company.birthplace}`;
    phone.textContent = `${company.birthplace}`;
    website.textContent = `${company.website}`;

    //company logo data
    logo.setAttribute("src", company.image);
    logo.setAttribute("alt", `${companyName} Logo`);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "340");
    logo.setAttribute("height", "auto");

    //website
    website.setAttribute("href", company.website);

    //append card
    card.appendChild(logo);
    card.appendChild(adress);
    card.appendChild(phone);
    card.appendChild(website);

    cards.appendChild(card);
  });
};
