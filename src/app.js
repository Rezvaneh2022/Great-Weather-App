let date = new Date();
let showTime = document.querySelector("#date");

let hours = date.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
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

showTime.innerHTML = `${day} ${hours}:${minutes}`;

function displayTemperature(response) {
  console.log(response);
}

function searching(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = cityName.value;
}

function search() {
  let apiKey = "588oc041a6e953f45658b7911bf5tb98";
  let city = "London";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

let form = document.querySelector("#search-bar");
form.addEventListener("submit", searching);

////////////////
