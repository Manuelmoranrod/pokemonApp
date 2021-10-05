import React from "react";

const Card = (props) => {
  console.log("props en Card",props);
  
  return (
    <>
      <h1>Nombre {props.info.name}</h1>
      <img src={props.info.img}/>
      <p>Tamaño {props.info.height}</p>
      <p>Altura {props.info.weight}</p>
    </>
  );
}

export default Card;
