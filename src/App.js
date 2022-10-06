import "./App.css";
import { useEffect, useState } from "react";
import PokemonThumb from "./Components/PokemonThumb";

const BASEURL = `https://pokeapi.co/api/v2/pokemon`;

function App() {
  const [monsters, setMonsters] = useState([]);

  async function getPokemonDetails(singlePokemon) {
    let data=[]
    const res = await fetch(`${BASEURL}/${singlePokemon.name}`);
    const resResults = await res.json();

    const pokemonData = {
      pokemon: singlePokemon.name,
    };

    

    setMonsters(data)
    
  }

  async function getPokemonList(callback) {
    let monster = [];
    const response = await fetch(`${BASEURL}?limit=20`);
    const resResults = await response.json();
    const { results } = resResults;
    if (results.length > 0) {
      results.map(getPokemonDetails);
    } else {
      console.log("NO POKEMON FOUND");
    }
  }

  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <div className="app">
      <div className="monsterscontainer">
        <div className="monsterscollection">
          {monsters.map((monster) => {
            console.log(monsters)
            return <PokemonThumb monsterObj={monster} key={monster.pokemon} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
