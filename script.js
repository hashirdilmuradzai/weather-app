const apiKey = "66abf78bb83140e29a1150945261509";
const city = document.querySelector("#city");
const date = document.querySelector("#date");
const weatherIcon = document.querySelector("#weather-icon");
const temperatureCelsius = document.querySelector("#temperature-celsius");
const temperatureFahrenheit = document.querySelector("#temperature-fahrenheit");
const weatherCondition = document.querySelector("#weather-condition");
const feelLikeCelsius = document.querySelector("#feel-like-celsius");
const feelLikeFahrenheit = document.querySelector("#feel-like-fahrenheit");
const humidity = document.querySelector("#humidity");
const windSpeedKMH = document.querySelector("#wind-speed-kmh");
const windSpeedMPH = document.querySelector("#wind-speed-mph");
const pressureMB = document.querySelector("#pressure-mb");
const pressureIN = document.querySelector("#pressure-in");
const visibilityKM = document.querySelector("#visibility-km");
const visibilityMiles = document.querySelector("#visibility-miles");
const rain = document.querySelector("#rain");
const uvIndex = document.querySelector("#uv-index");
const snow = document.querySelector("#snow");

async function getWeather(event) {
  try {
    event.preventDefault();

    const inputValue = document.querySelector("#input-value").value;

    const apiData = await axios(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputValue}`,
    );

    city.innerHTML = apiData.data.location.name;
    date.innerHTML = apiData.data.location.localtime;
    weatherIcon.src = apiData.data.current.condition.icon;
    temperatureCelsius.innerHTML = apiData.data.current.temp_c;
    temperatureFahrenheit.innerHTML = apiData.data.current.temp_f;
    weatherCondition.innerHTML = apiData.data.current.condition.text;
    feelLikeCelsius.innerHTML = apiData.data.current.feelslike_c;
    feelLikeFahrenheit.innerHTML = apiData.data.current.feelslike_f;
    humidity.innerHTML = apiData.data.current.humidity;
    windSpeedKMH.innerHTML = apiData.data.current.wind_kph;
    windSpeedMPH.innerHTML = apiData.data.current.wind_mph;
    pressureMB.innerHTML = apiData.data.current.pressure_mb;
    pressureIN.innerHTML = apiData.data.current.pressure_in;
    visibilityKM.innerHTML = apiData.data.current.vis_km;
    visibilityMiles.innerHTML = apiData.data.current.vis_miles;
    rain.innerHTML = apiData.data.current.chance_of_rain;
    uvIndex.innerHTML = apiData.data.current.uv;
    snow.innerHTML = apiData.data.current.chance_of_snow;

    console.log(apiData);
  } catch (error) {
    alert(error);
  }
}
