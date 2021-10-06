import React, { useState, useEffect } from "react";
import { useDebounce } from 'use-debounce';
import ListaPokemon from "../ListaPokemon/ListaPokemon";

const Home = () => {
  // estado para el input
  const [value, setValue] = useState("");
  
  // Estado que almacenara los pokemons
  const [pokemon, setPokemon] = useState([]);
  const [debounceValue] = useDebounce(value, 2000)
  /*
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit",e.target.elements.name.value);
    setValue(e.target.elements.name.value)
  }
  */
  const handleChange = (e)=> {
    console.log("change",e.target.value);
    setValue(e.target.value)
  }
  // peticion a la API
  useEffect(
    async () => {
      try { // Manejo de errores porque la peticion puede no encontrar nada
        if (value) {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
          const data = await res.json();
          const pok = {
            name: data.name,
            weight: data.weight,
            img: data.sprites.front_default,
            height: data.height
          }
          console.log("axios", pok);
          setPokemon([...pokemon, pok]);
        }
      } catch (e) {
        console.log("ERROR axios");
        //setPokemon([]) // En blanco si no hay fetch
      }
    },
    [debounceValue] // Esto es a lo que atiende cuando cambia
    // con el debounce, hay que cambiar [value] x [debounceValue]
  );

  

  return (
    <main className="home">
      <h1>PoKEAPI: hazte con todos</h1>
      <input type="text" name="name" onChange={handleChange}/>
      <ListaPokemon info={pokemon}/>
    </main>
  )
}

export default Home

