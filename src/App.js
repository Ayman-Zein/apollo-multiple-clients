import "./App.css";
import FilmsClient from "./components/FilmsClient";
import SpaceXClient from "./components/SpaceXClient";

const App = () => {
  return (
    <div className="App">
      <SpaceXClient />
      <FilmsClient />
    </div>
  );
};

export default App;
