import React from "react";
import Card from "../Card/Card";

const ListaPokemon = (props) => {
  console.log("Props List",props);

  const paintCard = () => {
    console.log("LLEgas a pintar");
    return props.info.map((pokemon,i)=> <Card info={pokemon} key={i}/>)
  }

  return (
    <div className="card_wrapper">
      {paintCard()}
    </div>
    
  )
};

export default ListaPokemon;
