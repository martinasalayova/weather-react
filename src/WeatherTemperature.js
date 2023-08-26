import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function setFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function setCelsius(event) {
    event.preventDeafult();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          {" "}
          °C{" "}
          <a href="/" onClick={setFahrenheit}>
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
          <a href="/" onClick={setCelsius}>
            °C
          </a>{" "}
          °F
        </span>
      </div>
    );
  }
}
