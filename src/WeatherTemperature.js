import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function setFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function setCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          {" "}
          °C{" "}
          <a href="/" rel="noreferrer" onClick={setFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    const convertToF = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(convertToF)}</span>
        <span className="unit">
          {" "}
          <a href="/" rel="noreferrer" onClick={setCelsius}>
            °C
          </a>{" "}
          °F
        </span>
      </div>
    );
  }
}
