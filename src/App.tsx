import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const personName = {
    first: "Clark",
    last: "Kent",
  };

  const nameList = [
    {
      first: "Zain",
      last: "shahid",
    },
    {
      first: "Arif",
      last: "Khan",
    },
    {
      first: "shareyaar",
      last: "pilayyy",
    },
  ];
  return (
    <div className="App">
      <Status status="loading" />
    </div>
  );
}

export default App;
