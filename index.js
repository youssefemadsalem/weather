let imgBackgrouund = document.querySelector(".img-background");
let height1 = window.outerHeight;
imgBackgrouund.style.height = `${height1 * 0.4}px`;
addEventListener("resize", function () {
  imgBackgrouund.style.height = `${height1 * 0.4}px`;
});

const day = document.querySelector(".day");
const mounth = document.querySelector(".date");
const city = document.querySelector(".city");
const tempretureDegree = document.querySelector(".tempreture-degree");
const stateWeaather = document.querySelector(".state-Weather");
const stateIcon = document.querySelector(".state img");
const inputLocation = document.querySelector(".inputLocation");

const dayCard2 = document.querySelector(".day-card2");
const iconCard2 = document.querySelector(".icon-state-card2");
const tempCard2 = document.querySelector(".temp-card2");
const stateCard2 = document.querySelector(".state-card2");

const dayCard3 = document.querySelector(".day-card3");
const iconCard3 = document.querySelector(".icon-card3");
const tempCard3 = document.querySelector(".temp-card3");
const stateCard3 = document.querySelector(".state-card3");

//======================   API   ===========================//

async function getWeather(location) {
  let response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=ab665c02dc384b38902150930242803&q=${location}&days=3`
  );
  let weather = await response.json();

  //? day1
  city.innerHTML = weather.location.name;
  tempretureDegree.innerHTML = weather.forecast.forecastday[0].day.avgtemp_c;
  stateIcon.src = weather.forecast.forecastday[0].day.condition.icon;
  stateWeaather.innerHTML = weather.forecast.forecastday[0].day.condition.text;
  //(0,3) fri sat
  switch (Date(weather.forecast.forecastday[0].date).slice(0, 3)) {
    case "Sat":
      day.innerHTML = "Saturday";
      break;
    case "Sun":
      day.innerHTML = "Sunday";
      break;
    case "Mon":
      day.innerHTML = "Monday";
      break;
    case "Tue":
      day.innerHTML = "Tuesday";
      break;
    case "Wed":
      day.innerHTML = "Wednesday";
      break;
    case "Thu":
      day.innerHTML = "Thursday";
      break;
    case "Fri":
      day.innerHTML = "Friday";
      break;
  }

  //(4,7) dec  jan
  // (8,10) 06 07 22

  switch (Date(weather.forecast.forecastday[0].date).slice(4, 7)) {
    case "Jan":
      mounth.innerHTML =
        Date(weather.forecast.forecastday[0].date).slice(8, 10) + " January";
      break;
    case "Feb":
      mounth.innerHTML =
        Date(weather.forecast.forecastday[0].date).slice(8, 10) + " February";
      break;
    case "Mar":
      mounth.innerHTML =
        Date(weather.forecast.forecastday[0].date).slice(8, 10) + " March";
      break;
    case "Apr":
      mounth.innerHTML =
        Date(weather.forecast.forecastday[0].date).slice(8, 10) + " April";
      break;
    case "May":
      mounth.innerHTML =
        Date(weather.forecast.forecastday[0].date).slice(8, 10) + " May";
      break;
    case "Jun":
      mounth.innerHTML =
        Date(weather.forecast.forecastday[0].date).slice(8, 10) + " June";
      break;
    case "Jul":
      mounth.innerHTML =
        Date(weather.forecast.forecastday[0].date).slice(8, 10) + " July";
      break;
    case "Aug":
      mounth.innerHTML =
        Date(weather.forecast.forecastday[0].date).slice(8, 10) + " August";
      break;
    case "Sep":
      mounth.innerHTML =
        Date(weather.forecast.forecastday[0].date).slice(8, 10) + " September";
      break;
    case "Oct":
      mounth.innerHTML =
        Date(weather.forecast.forecastday[0].date).slice(8, 10) + " October";
      break;
    case "Nov":
      mounth.innerHTML =
        Date(weather.forecast.forecastday[0].date).slice(8, 10) + " November";
      break;
    case "Dec":
      mounth.innerHTML =
        Date(weather.forecast.forecastday[0].date).slice(8, 10) + " December";
      break;
  }

  //? day2

  iconCard2.src = weather.forecast.forecastday[1].day.condition.icon;
  stateCard2.innerHTML = weather.forecast.forecastday[1].day.condition.text;
  tempCard2.innerHTML = weather.forecast.forecastday[1].day.avgtemp_c;

  let d2 = new Date(weather.forecast.forecastday[1].date);


  switch (d2.getDay()) {
    case 6:
      dayCard2.innerHTML = "Saturday";
      break;
    case 0:
      dayCard2.innerHTML = "Sunday";
      break;
    case 1:
      dayCard2.innerHTML = "Monday";
      break;
    case 2:
      dayCard2.innerHTML = "Tuesday";
      break;
    case 3:
      dayCard2.innerHTML = "Wednesday";
      break;
    case 4:
      dayCard2.innerHTML = "Thursday";
      break;
    case 5:
      dayCard2.innerHTML = "Friday";
      break;
  }

  //? day3

  iconCard3.src = weather.forecast.forecastday[2].day.condition.icon;
  stateCard3.innerHTML = weather.forecast.forecastday[2].day.condition.text;
  tempCard3.innerHTML = weather.forecast.forecastday[2].day.avgtemp_c;
  d2 = new Date(weather.forecast.forecastday[2].date);

  switch (d2.getDay()) {
    case 6:
      dayCard3.innerHTML = "Saturday";
      break;
    case 0:
      dayCard3.innerHTML = "Sunday";
      break;
    case 1:
      dayCard3.innerHTML = "Monday";
      break;
    case 2:
      dayCard3.innerHTML = "Tuesday";
      break;
    case 3:
      dayCard3.innerHTML = "Wednesday";
      break;
    case 4:
      dayCard3.innerHTML = "Thursday";
      break;
    case 5:
      dayCard3.innerHTML = "Friday";
      break;
  }
}



getWeather("cairo");




inputLocation.addEventListener("input", () => {
  getWeather(inputLocation.value);
});

