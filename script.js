function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let city = document.querySelector("#city-name");
  let skyCoverage = document.querySelector("#sky-coverage");
  let humidity = document.querySelector("#weather-description-value");
  let windSpeed = document.querySelector("#wind-speed");
  let dateElement = document.querySelector("#date");
  let date = new Date(response.data.time * 1000);
  let iconImage = document.querySelector("#emoji");

  iconImage.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon"/>`;

  city.innerHTML = response.data.city;

  skyCoverage.innerHTML = response.data.condition.description;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  temperatureElement.innerHTML = `${Math.round(temperature)}°C`;
  windSpeed.innerHTML = `${response.data.wind.speed}%`;
  dateElement.innerHTML = setDate(date);
}

function searchCity(city) {
  let apiKey = "2abt3d4e02aa5e6116ef006dbocad3a0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}
function setDate(date) {
  let minutes = date.getMinutes();
  let hour = date.getHours();
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
  return `${day} ${hour}:${minutes}HRS`;

  if (minutes < 10) {
    minutes = `0 ${minutes}`;
  }
}
function searchFunction(event) {
  event.preventDefault();
  let formInput = document.querySelector("#search-form");

  searchCity(formInput.value);
}

let searchForm = document.querySelector("#search-engine");
searchForm.addEventListener("submit", searchFunction);

searchCity("Harare");
