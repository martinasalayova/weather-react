import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Hradec Králové" />
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
