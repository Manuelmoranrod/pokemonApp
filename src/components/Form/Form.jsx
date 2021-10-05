import React from "react";
import { useForm } from "react-hook-form"

const Form = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      {/* primero input, {register con el name y concidiones (require o lenght)*/}
      <input defaultValue="ID" type="number" {...register("id", { required: true })} />
      <input defaultValue="Name"{...register("name", { required: true, minLength: 3 })} />
      <input defaultValue="Url img"{...register("img", { required: true })} />
      <select {...register("typeOne", { required: true })}>
        <option value="water">Agua</option>
        <option value="fire">Fuego</option>
        <option value="electric">Rayo</option>
        <option value="rock">Roca</option>
      </select>
      <select {...register("typeTwo")}>
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
