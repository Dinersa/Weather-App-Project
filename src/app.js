function refreshWeather(response) {
  let temparatureElement = document.querySelector("#temparature");
  let temparature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity + "%";
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = response.data.wind.speed + "km/h";
  temparatureElement.innerHTML = Math.round(temparature);
  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;

  let date = new Date(response.data.time * 1000);

  let timeElement = document.querySelector("#time");
  timeElement.innerHTML = formateDate(date);

  getForecast(response.data.city);
}

function formateDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 0) {
    minutes = "0" + minutes;
  }

  return day + " " + hours + ":" + minutes;
}

function searchCity(city) {
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=5ff91039bfoa7d3c00e40a4db3ace0et&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}
//forecast
function getForecast(city) {
  let apiKey = "5ff91039bfoa7d3c00e40a4db3ace0et";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  let forecastHTML = "";

  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `
<div class="weather-forecast-day">
<div class="weather-forecast-date">${day}</div>
<div class="weather-forcast-icon">⛅</div>
<div class="weather-forecast-temperature">
<span class="weather-forecust-temperature-max">18</span>
<span class="weather-forecust-temperature-min">16</span>
</div>
</div>
`;
  });
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHTML;
}

let searchForElement = document.querySelector("#search-form");
searchForElement.addEventListener("submit", handleSearchSubmit);

searchCity("Johannesburg");

