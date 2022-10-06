import React from "react";

function PokemonThumb({ monsterObj }) {
    console.log(monsterObj)
    const imageS
  return (
    <div
      style={{
        height: 300,
        width: 200,
        backgroundColor: "#ffffff",
        marginRight: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "10px",
        marginBottom: "10px",
        boxShadow: "10px 11px 5px -3px rgba(0, 0, 0, 0.49)"
      }}
    >
        <img />
      <h4>{monsterObj.pokemon.toUpperCase()}</h4>
    </div>
  );
}

export default PokemonThumb;
