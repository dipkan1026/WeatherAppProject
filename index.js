function showWeatherCondition(response) {
  console.log(response);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
}

function search(Event) {
  Event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");

  let apiKey = "a6571576120f81f1fad5d8e8d6ca27bd";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&APPID=a6571576120f81f1fad5d8e8d6ca27bd&units=metric`;
  axios.get(apiUrl).then(showWeatherCondition);
}

let now = new Date();
console.log(now.getDate());

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

let date = now.getDate();
let year = now.getFullYear();
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}

let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}

let second = now.getSeconds();
if (second < 10) {
  second = `0${second}`;
}

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

h2.innerHTML = `${day},${date},${month},${year}`;
