import React from "react";
import {useForm} from "react-hook-form";

export const StudentRegistration = () => {
  const { register, handleSubmit,formState:{errors} } = useForm(
    {
        mode: "onChange",
    }
  );

  const submit = (data) => {
    console.log("form data", data);
    
  };
  const validationSchma = {
    age :{
        required:"required...",
        minLength: {
            value: 5,
            message: "Password must have at least 8 characters"
          },
            maxLength: {
            value: 10,
            message: "Password must have at most 10 characters"
            }
          
          
        
        
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>Name</label>
          <input type="text" name="name" {...register("name",{required:"name is required..."})}></input>
          {
            errors.name && <div>{errors.name.message}</div>
          }
        </div>
        <div>
          <label>Email</label>
          <input type="text" name="email" {...register("email")}></input>
        </div>
        <div>
          <label>Age</label>
          <input type="text" name="age" {...register("age",validationSchma.age)}></input>
          {
            errors.age && <div>{errors.age.message}</div>
          }
        </div>
        <div>
          <input type="submit" value="Submit"></input>
        </div>
      </form>
    </div>
  );
};
