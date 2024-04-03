const url = "https://benjamincouto.github.io/wdd230/chamber/data/members.json";

const cards = document.querySelector("#cards-directory");

async function getMembersData() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data.members);
}

getMembersData();

const displayMembers = (members) => {
  members.forEach((member) => {
    //create html elements
    let card = document.createElement("section");
    let companyName = document.createElement("p");
    let logo = document.createElement("img");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("a");

    //company info
    companyName.textContent = member.name;
    address.textContent = member.address;
    phone.textContent = member.phone;
    website.textContent = member.website;

    //company logo data
    logo.setAttribute("src", member.image);
    logo.setAttribute("alt", `${companyName} Logo`);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "340");
    logo.setAttribute("height", "auto");

    //website
    website.setAttribute("href", member.website);

    //append card
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    cards.appendChild(card);
  });
};
