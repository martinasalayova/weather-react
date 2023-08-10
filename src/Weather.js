import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Enter a city.." />
        <input type="submit" value="search" />
      </form>
      <div className="row">
        <div className="col-sm-6">
          <h1>Hradec Králové</h1>
          <span className="temperature">22</span>
          <span className="unit"> °C</span>
          <ul>
            <li>Broken clouds</li>
            <li>Humidity: 42%</li>
            <li>Wind: 2 Km/h</li>
          </ul>
        </div>
        <div className="col-sm-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="current weather"
          ></img>
        </div>
      </div>
    </div>
  );
}
