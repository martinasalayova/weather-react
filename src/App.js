import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather in your city</h1>
        <Weather />
        <br />
        <br />
        <footer>
          Coded by{" "}
          <a
            href="https://github.com/martinasalayova/weather-react"
            rel="noreferrer"
            target="_blank"
          >
            Martina Salayová
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
