const baseURL = "https://benjamincouto.github.io/wdd230/";
const linksURL = "https://benjamincouto.github.io/wdd230/data/links.json";

const card = document.querySelector("#activities-card");

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
  } catch (error) {
    console.error(error);
  }
}

getLinks();

function displayLinks(weeks) {
  // Create the ul element to hold weeks info
  let activities = document.createElement("ul");
  card.appendChild(activities);

  // loop to get info for each week
  weeks.forEach((week) => {
    let weekItem = document.createElement("li");

    weekItem.textContent = `${week.week}: `;
    activities.appendChild(weekItem);

    let first = week.links[0];

    week.links.forEach((link, index) => {
      let activity = document.createElement("a");

      activity.textContent = `${link.title}`;
      activity.setAttribute("href", link.url);
      weekItem.appendChild(activity);

      if (index < week.links.length - 1) {
        let separator = document.createElement("span");
        separator.textContent = "  |  ";
        weekItem.appendChild(separator);
      }
    });
  });
}
