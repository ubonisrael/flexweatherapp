const inputValue = document.querySelector("#city");
const submitBtn = document.querySelector("#submit");
const resultCity = document.querySelector("#result_city");
const resultSky = document.querySelector("#result_sky-conditions");
const resultTemp = document.querySelector("#result_temp");
const resultWind = document.querySelector("#result_wind-speed");

//function that converts kelvin to celcius
const convertKtoC = (para) => Math.round(para - 273);

const apikey = "e0f141b36d848937xxxxxxxxxxxx";

const fetchWeatherData = async(e) => {
  e.preventDefault()
    console.log(inputValue.value);
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${apikey}`
  )
    .then((res) => res.json())
    .then((data) => {
      resultCity.innerHTML = `Weather of <span>${data["name"]}<span>`;
      resultSky.innerHTML = `Sky Conditions: <span>${data["main"]["temp"]}<span>`;
      resultTemp.innerHTML = `Temperature: <span>${convertKtoC(
        data["weather"]["0"]["description"]
      )} C</span>`;
      resultWind.innerHTML = `Wind Speed: <span>${data["wind"]["speed"]} km/h<span>`;
    })
    .catch(e => alert("Entered wrong city name"));
};

submitBtn.addEventListener("click", fetchWeatherData);
