import React from "react";

const Card = (props) => {

  const pok = props.info

  //console.log(pok.abilities.map((a, i) => console.log(a.ability.name)))

  return (
    <div className="pok-card">
      <div className="head-card">
        <h2>{pok.name ? pok.name : ""}</h2>
        <p>id #{pok.id ? pok.id : ""}</p>
      </div>
      <div className="img-card">
        {pok.sprites ? (
          <img src={pok.sprites.front_default} alt="" />)
          : (<img src={pok.img} alt="" />)}
      </div>
      <div className="medidas">
        <p>Altura {pok.height ? pok.height : "..."} m</p>
        <p>Peso {pok.weight ? pok.weight : "..."} kg</p>
      </div>
      <p>Estadistica: {pok.stats ? pok.stats[0].base_stat : "..."} px</p>
      <p>types: {pok.types ? pok.types[0].type.name : pok.typeone}</p>
      <p>type two: {pok.types[1] ? pok.types[1].type.name : "..."}</p>
      <div className="habilidad-card">
        abilities: {pok.abilities
          ? pok.abilities.map((a, i) => <p key={i}>{a.ability.name}</p>)
          : "..."}
      </div>
    </div>
  );
}

export default Card;
