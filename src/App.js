import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="main">
          <Weather defaultCity="Hradec Králové" />
          <br />
          <br />
        </div>
        <footer>
          Coded by{" "}
          <a
            href="https://github.com/martinasalayova/weather-react"
            rel="noreferrer"
            target="_blank"
            className="gitHubLink"
          >
            Martina Salayová
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
