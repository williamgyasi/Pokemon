import "./App.css";
import { useEffect, useState } from "react";
import PokemonThumb from "./Components/PokemonThumb";
import { getRandomColor } from "./Utils/getRandomColor";

const BASEURL = `https://pokeapi.co/api/v2/pokemon`;

function App() {
  const [monsters, setMonsters] = useState([]);
  let data = [];

  async function getPokemonDetails(singlePokemon) {
    const newRes = await fetch(`${BASEURL}/${singlePokemon.name}`);
    const results = await newRes.json();
    const pokemonData = {
      id: results.id,
      pokemon: results.name,
      height: results.height,
      weight: results.weight,
      baseExperience: results.base_experience,
      sprite:results.sprites,
      bgColor:getRandomColor()
    };
    setMonsters((monsters) => [...monsters, pokemonData]);
  }

  async function getPokemonList() {
    const response = await fetch(`${BASEURL}?limit=20`);
    const resResults = await response.json();
    const { results } = resResults;
    if (results.length > 0) {
      results.map(getPokemonDetails);
    } else {
      console.log("NO POKEMON WAS FOUND");
    }
  }

  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <div className="app">
      <div className="monsterscontainer">
        <div className="monsterscollection">
          {monsters.sort(monster=>monster.id-monster.id).map((monster) => {
            return <PokemonThumb monsterObj={monster} key={monster.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
