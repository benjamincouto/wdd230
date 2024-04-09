//Forecast containers
const dayOne = document.querySelector("#firstDay");
const dayTwo = document.querySelector("#secondDay");
const dayThree = document.querySelector("#thirdDay");

//week
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//Get day
const d = new Date();
const today = d.getDay();
const nextDay1 = weekdays[(today + 1) % 7];
const nextDay2 = weekdays[(today + 2) % 7];
const nextDay3 = weekdays[(today + 3) % 7];

//API url
const urlF =
  "https://api.openweathermap.org/data/2.5/forecast?lat=-34.91&lon=-56.19&appid=f7b1dc251db8c2da0d25f18fbe65ea2f&units=imperial";

async function apiFetchF() {
  try {
    const response = await fetch(urlF);
    if (response.ok) {
      const data = await response.json();
      displayForecastResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

apiFetchF();

function displayForecastResults(data) {
  //three next days
  let oneDay = document.createElement("h4");
  let twoDay = document.createElement("h4");
  let threeDay = document.createElement("h4");

  oneDay.textContent = nextDay1;
  twoDay.textContent = nextDay2;
  threeDay.textContent = nextDay3;

  dayOne.appendChild(oneDay);
  dayTwo.appendChild(twoDay);
  dayThree.appendChild(threeDay);

  //temperature

  let temp1 = `${data.list[8].main.temp}&deg;F`;
  let nextDay1Temp = document.createElement("p");
  nextDay1Temp.innerHTML = temp1;
  dayOne.appendChild(nextDay1Temp);

  let temp2 = `${data.list[16].main.temp}&deg;F`;
  let nextDay2Temp = document.createElement("p");
  nextDay2Temp.innerHTML = temp2;
  dayTwo.appendChild(nextDay2Temp);

  let temp3 = `${data.list[24].main.temp}&deg;F`;
  let nextDay3Temp = document.createElement("p");
  nextDay3Temp.innerHTML = temp3;
  dayThree.appendChild(nextDay3Temp);
}
