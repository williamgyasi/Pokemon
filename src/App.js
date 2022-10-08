import "./App.css";
import { useEffect, useState } from "react";
import PokemonThumb from "./Components/PokemonThumb";
import { getRandomColor } from "./Utils/getRandomColor";
import SearchBox from "./Components/SearchBox";

const BASEURL = `https://pokeapi.co/api/v2/pokemon`;

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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
      sprite: results.sprites,
      bgColor: getRandomColor(),
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

  function onChange(e) {
    if (e.target.value) {
      let filtered = monsters.filter((item) =>
        item.pokemon.toUpperCase().includes(e.target.value.toUpperCase())
      );
      setMonsters(filtered);
    } else {
      console.log("not")
      setMonsters(monsters);
    }
  }

  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <div className="app">
      <h3>WELCOME TO POKEMON GO</h3>
      <SearchBox onChange={onChange} searchTerm={searchTerm} />
      <div className="monsterscontainer">
        <div className="monsterscollection">
          {monsters
            .sort((monster) => monster.id - monster.id)
            .map((monster) => {
              return <PokemonThumb monsterObj={monster} key={monster.id} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
