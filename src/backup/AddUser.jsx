import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAddUserData1 } from "./UserQuery";

export const AddUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(
    {
      defaultValues: {
        name: "xxxxxxx",
        email:"xx1"
      },
    },
    {
      mode: "onChange",
    }
  );
  const res = useAddUserData1();
  const validationSchema = {
    name: {
      required: {
        value: true,
        message: "Name is required",
      },
    },
    email: {
      required: {
        value: true,
        message: "Email is required",
      },
      maxLength: {
        value: 50,
        message: "Email should not be more than 50 characters",
      },
      minLength: {
        value: 5,
        message: "Email should not be less than 5 characters",
      },
    },
  };

  const submit = async (data) => {
    var user = {
      name: data.name,
      email: data.email,
      age: data.age,
      isActive: data.isActive === "true" ? true : false,
    };
    res.mutate(user);
  };
  useEffect(() => {
    res.isSuccess && alert("User Added Successfully");
  }, [res.isSuccess]);

  return (
    <div>
      <h1>ADD USER</h1>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", validationSchema.name)}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", validationSchema.email)}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" {...register("age")} />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          TRUE
          <input
            type="radio"
            name="status"
            {...register("isActive")}
            value="true"
          />
          FALSE
          <input
            type="radio"
            name="status"
            {...register("isActive")}
            value="false"
          />
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};
