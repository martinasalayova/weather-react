import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=597c40c39084687093b091cd48b366f8&units=${units}`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Day-of-the-week">Mon</div>
          <WeatherIcon code="01d" size={65} />
          <div className="TwoTemperatures">
            <span className="HighestTemperature">20 /</span>
            <span className="LowestTemperature"> 15</span>
          </div>
        </div>
      </div>
    </div>
  );
}
