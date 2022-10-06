import "./App.css";
import { useState } from "react";
import PokemonThumb from "./Components/PokemonThumb";

function App() {
  const [monsters, setMonsters] = useState([]);

  return (
    <div className="app">
      <div className="monstercontainer">
        <div className="monsterscollection">
          {monsters.map((monster) => {
            return (
              <PokemonThumb monsterObj={monster} key={monster.monstername} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
