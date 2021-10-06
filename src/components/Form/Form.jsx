import React, { useContext } from "react";
import { useForm } from "react-hook-form"
import { pokemonContext } from "../../context/pokemonContext";

const Form = () => {
  // FORM con hook-form
  // Estado para el formulario
  const { register, handleSubmit, formState: { errors } } = useForm();
  // En vez de crear uno nuevo "importamos" el que queremos modificar
  const { pokemon, setPokemon} = useContext(pokemonContext);

  
  const onSubmit = (info) => {
    if(info){
      console.log("nuevo pokemon",info);
      setPokemon([...pokemon, info])
    }else{
      alert('No hay pokemon')
    }
  }

  return (

    <form className="form-pok" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      {/* primero input, {register con el name y concidiones (require o lenght)*/}
      <input className="input-value" placeholder="ID" type="number" {...register("id", { required: true })} />
      {errors.id && <span>This field is required</span>}
      <input className="input-value" placeholder="Name"{...register("name", { required: true, minLength: 3 })} />
      {errors.name && <span>This field is required</span>}
      <input className="input-value" placeholder="IMG url"{...register("img", { required: true })} />
      {errors.img && <span>This field is required</span>}
      <select {...register("typeone", { required: true })}>
        <option>Type</option>
        <option value="bug">Insecto</option>
        <option value="dark">Dark</option>
        <option value="dragon">Dragon</option>
        <option value="electric">Electrico</option>
        <option value="fairy">Fairy</option>
        <option value="fighting">Fighting</option>
        <option value="fire">Fuego</option>
        <option value="flying">Flying</option>
        <option value="gosht">Gosht</option>
        <option value="grass">Hierba</option>
        <option value="ground">Ground</option>
        <option value="ice">Hielo</option>
        <option value="normal">Normal</option>
        <option value="poison">Poison</option>
        <option value="psychic">Psychic</option>
        <option value="rock">Roca</option>
        <option value="steel">Steel</option>
        <option value="water">Agua</option>
      </select>
      {errors.typeOne && <span>This field is required</span>}
      <select {...register("typetwo")}>
        <option>Type</option>
        <option value="bug">Insecto</option>
        <option value="dark">Dark</option>
        <option value="dragon">Dragon</option>
        <option value="electric">Electrico</option>
        <option value="fairy">Fairy</option>
        <option value="fighting">Fighting</option>
        <option value="fire">Fuego</option>
        <option value="flying">Flying</option>
        <option value="gosht">Gosht</option>
        <option value="grass">Hierba</option>
        <option value="ground">Ground</option>
        <option value="ice">Hielo</option>
        <option value="normal">Normal</option>
        <option value="poison">Poison</option>
        <option value="psychic">Psychic</option>
        <option value="rock">Roca</option>
        <option value="steel">Steel</option>
        <option value="water">Agua</option>
      </select>
      {errors.typeTwo && <span>This field is required</span>}

      <input type="submit" value="Añadir"/>
      
    </form>
    
  );
};

export default Form;
