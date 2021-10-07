import React, {useEffect, useState} from 'react';
import useFetch from '../../hooks/fetch-hook';

const First = () => {
  // Estado vacio para recibir datos del fetch mediante hook
  const [options, setOptions] = useState([])
  // Es un hook, pero creado por nosotros
  const {loading, result} = useFetch('https://pokeapi.co/api/v2/pokemon');

  // Atiende al cambio de result, que al inicio esta vacío
  // Cuando cambie, en este caso cuando cargue
  useEffect(()=>{
    setOptions(result.results)
  },[result])
  
  return (
    <section>
      <h3>Muestra de los pokemons disponibles</h3>
      <ul>
        {loading ? <p>CARGANDO...</p>:options.map((pokemon, i) =>
          <li key={i}>{pokemon.name}.</li>
        )}
      </ul>
    </section>
  )
};


export default First;
