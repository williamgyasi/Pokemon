import React from "react";

function PokemonThumb({monsterObj}) {
  return (
  <div style={{
    height:200,
    width:200,
    backgroundColor:"red",
    marginRight:10,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    borderRadius:"10px",
    marginBottom:"10px"
  }}>
    {monsterObj.monstername}
  </div>);
}

export default PokemonThumb;
