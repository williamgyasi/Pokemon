import React from "react";

function PokemonThumb({ monsterObj }) {
  return (
    <div
      style={{
        height: 300,
        width: 200,
        backgroundColor: "red",
        marginRight: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "10px",
        marginBottom: "10px",
      }}
    >
      <h4>{monsterObj.pokemon.toUpperCase()}</h4>
    </div>
  );
}

export default PokemonThumb;
