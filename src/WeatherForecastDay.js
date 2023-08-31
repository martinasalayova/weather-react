import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°C`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°C`;
  }
  return (
    <div className="WeatherForecastDay">
      <div className="Day-of-the-week">{props.data.dt}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={65} />
      <div className="TwoTemperatures">
        <span className="HighestTemperature">{maxTemperature()} /</span>
        <span className="LowestTemperature"> {minTemperature()}</span>
      </div>
    </div>
  );
}
