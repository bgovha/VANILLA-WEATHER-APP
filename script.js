function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let city = document.querySelector("#city-name");

  city.innerHTML = response.data.city;

  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "2abt3d4e02aa5e6116ef006dbocad3a0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}

function searchFunction(event) {
  event.preventDefault();
  let formInput = document.querySelector("#search-form");

  searchCity(formInput.value);
}

let searchForm = document.querySelector("#search-engine");
searchForm.addEventListener("submit", searchFunction);

searchCity("Harare");