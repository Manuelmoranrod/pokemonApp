import React, { useContext } from "react";
import { useForm } from "react-hook-form"
import { pokemonContext } from "../../context/pokemonContext";

const Form = () => {
  // Estado para el formilario
  const { register, handleSubmit, formState: { errors } } = useForm();
  // En vez de crear uno nuevo "importamos" el que queremos modificar
  const { pokemon, setPokemon} = useContext(pokemonContext);

  
  const onSubmit = (data) => {
    if(data){
      setPokemon([...pokemon, data])
    }else{
      alert('No hay pokemon')
    }
  }

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      {/* primero input, {register con el name y concidiones (require o lenght)*/}
      <input defaultValue="ID" type="number" {...register("id", { required: true })} />
      <input defaultValue="Name"{...register("name", { required: true, minLength: 3 })} />
      <input defaultValue="Url img"{...register("img", { required: true })} />
      <select {...register("typeone", { required: true })}>
        <option value="water">Agua</option>
        <option value="fire">Fuego</option>
        <option value="electric">Rayo</option>
        <option value="rock">Roca</option>
      </select>
      <select {...register("typetwo")}>
        <option value="grass">Planta</option>
        <option value="fight">Lucha</option>
        <option value="other">other</option>
      </select>
      
      {errors.id && <span>This field is required</span>}
      {errors.name && <span>This field is required</span>}
      {errors.img && <span>This field is required</span>}
      {errors.typeOne && <span>This field is required</span>}
      {errors.typeTwo && <span>This field is required</span>}

      <input type="submit" />
      
    </form>
    
  );
};

export default Form;
