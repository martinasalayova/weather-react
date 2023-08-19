import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY_DAY",
    "03n": "CLOUDY_NIGHT",
    "04d": "CLOUDY_DAY",
    "04n": "CLOUDY_NIGHT",
    "09d": "RAIN_DAY",
    "09n": "RAIN_NIGHT",
    "10d": "RAIN_DAY",
    "10n": "RAIN_NIGHT",
    "11d": "RAIN_DAY",
    "11n": "RAIN_NIGHT",
    "13d": "SNOW_DAY",
    "13n": "SNOW_NIGHT",
    "50d": "FOG_DAY",
    "50d": "FOG_NIGHT",
  };
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="goldenrod"
      size={100}
      animate={true}
    />
  );
}
