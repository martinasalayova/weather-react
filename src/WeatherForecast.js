import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
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
