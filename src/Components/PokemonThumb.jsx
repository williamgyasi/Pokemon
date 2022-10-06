import React from "react";

function PokemonThumb({ monsterObj }) {
    console.log(monsterObj)
    const {other}=monsterObj.sprite
    const defaultImage=other["official-artwork"].front_default
  return (
    <div
      style={{
        height: 300,
        width: 200,
        backgroundColor: `${monsterObj.bgColor}`,
        marginRight: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "10px",
        marginBottom: "10px",
        boxShadow: "10px 11px 5px -3px rgba(0, 0, 0, 0.49)",
        cursor:"pointer",
        color:"#fff"
      }}
    >
        <img style={{
            height:"150px",
            width:"150px"
        }} src={defaultImage} />
      <h4 style={{
        marginTop:"10px",
        letterSpacing:"1px"
      }}>{monsterObj.pokemon.toUpperCase()}</h4>
    </div>
  );
}

export default PokemonThumb;
