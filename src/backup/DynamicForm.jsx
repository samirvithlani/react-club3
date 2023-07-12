import React from "react";
import { useForm } from "react-hook-form";

export const DynamicForm = () => {
    
  const {register, handleSubmit, errors} = useForm();
  var formData = [
    {
      name: "name",
      label: "Enter Name",
      type: "text",
      placeholder: "Enter your name",
    },
    {
      name: "age",
      label: "Enter age",
      type: "number",
      placeholder: "Enter your age",
    },
    {
        name: "email",
        label: "Enter email",
        type: "email",
        placeholder: "Enter your email",
    },{
      name:"gender",
      type:"radio",
      label:"FEMALE",
      value:"female",
    },{
      name:"gender",
      type:"radio",
      label:"MALE",
      value:"female",
    },{
      name:"country",
      type:"select",
      label:"Select Country",
      options:[
        {
          value:"india",
          label:"India"
        },
        {
          value:"usa",
          label:"USA"
        },
      ]
    }
  ];
  
  const subbmit = (data) => {

    console.log(data);
  }
  return <div>
        <h1>Dynamic Form</h1>
        <form onSubmit={handleSubmit(subbmit)}>
          {
            formData?.map((data)=>{
              return(
                <>
                <div>
                  <label>{data?.label}</label>
                  <input type={data?.type} name={data?.name} placeholder={data?.placeholder} {...register(data?.name)} value={data?.value}/>
                  </div>
                  <div>
                    
                  </div>
                  </>
              )
            })
          }
          <input type="submit" value="Submit"/>

        </form>

  </div>;
};
