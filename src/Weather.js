import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date: "Friday 15:16",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <input type="search" placeholder="Enter a city.." />
          <input type="submit" value="search" />
        </form>
        <div className="row">
          <div className="col-sm-6">
            <h1>{weatherData.city}</h1>
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit"> °C</span>
            <h4>{weatherData.date}</h4>
            <ul>
              <li class="text-capitalize">{weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} Km/h</li>
            </ul>
          </div>
          <div className="col-sm-6">
            <img src={weatherData.iconUrl} alt="current weather"></img>
          </div>
        </div>
      </div>
    );
  } else {
    let units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=597c40c39084687093b091cd48b366f8&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return "Site is loading...";
  }
}
