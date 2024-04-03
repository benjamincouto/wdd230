const baseURL = "https://benjamincouto.github.io/wdd230/";
const linksURL = "https://benjamincouto.github.io/wdd230/data/links.json";

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
  } catch (error) {
    console.error(error);
  }
}

getLinks();
