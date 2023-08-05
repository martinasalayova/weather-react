import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [cityChange, setCity] = useState(null);
  const [rightCitySubmit, setrightCitySubmit] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setrightCitySubmit(cityChange);
    callAxios(cityChange);
  }

  function callAxios(loadedCity) {
    if (loadedCity) {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${loadedCity}&appid=597c40c39084687093b091cd48b366f8&units=metric`;
      axios.get(url).then(showForecast);
    }
  }
  function changeCity(event) {
    setCity(event.target.value);
  }

  function showForecast(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  if (temperature) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city.."
            autoFocus="on"
            onChange={changeCity}
          ></input>
          <input type="submit" value="search"></input>
        </form>
        <h2>Weather forecast in {rightCitySubmit}:</h2>
        <ul>
          <li>
            The temperature: {Math.round(temperature)}
            °C.
          </li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind}km/h</li>
          <li>
            {" "}
            <img src={icon} alt={description} />
          </li>
        </ul>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city.."
        autoFocus="on"
        onChange={changeCity}
      ></input>
      <input type="submit" value="search"></input>
    </form>
  );
}
