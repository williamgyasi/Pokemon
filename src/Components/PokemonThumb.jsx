import React from "react";
import "./pokemonThumb.css";

function PokemonThumb({ monsterObj }) {
  console.log(monsterObj);
  const { other } = monsterObj.sprite;
  const defaultImage = other["official-artwork"].front_default;
  return (
    <div style={{
        
    }} className="pokemonThumbContainer">
      <img
        style={{
          height: "150px",
          width: "150px",
        }}
        alt="Monter Image"
        src={defaultImage}
      />
      <h4
        style={{
          marginTop: "10px",
          letterSpacing: "1px",
        }}
      >
        {monsterObj.pokemon.toUpperCase()}
      </h4>
    </div>
  );
}

export default PokemonThumb;
