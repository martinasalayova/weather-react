import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
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
  );
}

export default App;
