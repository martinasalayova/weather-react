import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-sm-6">
          <h1>{props.data.city}</h1>
          <WeatherTemperature celsius={props.data.temperature} />
          <h4>
            <FormattedDate date={props.data.date} />
          </h4>
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} Km/h</li>
          </ul>
        </div>
        <div className="col-sm-6">
          <WeatherIcon code={props.data.icon} size={100} />
        </div>
      </div>
      <WeatherForecast />
    </div>
  );
}
