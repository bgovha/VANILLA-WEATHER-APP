function searchCity(city) {
  let apiKey = "2abt3d4e02aa5e6116ef006dbocad3a0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  console.log(apiUrl);
}

function searchFunction(event) {
  event.preventDefault();
  let formInput = document.querySelector("#search-form");
  let city = document.querySelector("#city-name");
  city.innerHTML = formInput.value;
  searchCity(formInput.value);
}

let searchForm = document.querySelector("#search-engine");
searchForm.addEventListener("submit", searchFunction);
