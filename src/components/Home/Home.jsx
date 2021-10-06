import React, { useState, useEffect, useContext } from "react";
import { useDebounce } from 'use-debounce';
import ListaPokemon from "../ListaPokemon/ListaPokemon";
import axios from 'axios';

import { pokemonContext } from '../../context/pokemonContext'


const Home = () => {
  // estado para el input
  const [value, setValue] = useState("");
  // Estado que almacenara los pokemons
  const { pokemon, setPokemon} = useContext(pokemonContext);

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
  useEffect(() => {
      try { // Manejo de errores porque la peticion puede no encontrar nada
        if (value) {
          axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
          .then(res => {
            console.log("axios", res.data);
            return setPokemon([...pokemon, res.data])
          })
        }
      } catch (e) {
        console.log("ERROR axios");
        //setPokemon([]) // En blanco si no hay fetch
      }
    },[debounceValue] // Esto es a lo que atiende cuando cambia
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

