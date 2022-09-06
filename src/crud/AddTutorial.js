import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export const AddTutorial = () => {
  const { register, handleSubmit } = useForm();
  const [data1, setdata] = useState([]);

  const submit = async (data) => {
    var published = data.published === "true" ? true : false;

    var tutorial = {
      title: data.title,
      description: data.description,
      published: published,
      fees: data.fees,
    };

    console.log(tutorial);

    await axios.post("http://localhost:8080/tutorial", tutorial).then((res) => {
      console.log(res);
    });
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div class="form-group">
          <label for="exampleInputPassword1">Title</label>
          <input type="text" class="form-control" {...register("title")} />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Description</label>
          <input
            type="text"
            class="form-control"
            {...register("description")}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">fees</label>
          <input type="text" class="form-control" {...register("fees")} />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Published</label>

          <input type="text" class="form-control" {...register("published")} />
        </div>
        <div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
