function searchFunction(event) {
  event.preventDefault();
  let formInput = document.querySelector("#search-form");
  let city = document.querySelector("#city-name");
  city.innerHTML = formInput.value;
}

let searchForm = document.querySelector("#search-engine");
searchForm.addEventListener("submit", searchFunction);
