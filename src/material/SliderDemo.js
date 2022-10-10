import { Slider } from "@mui/material";
import React, { useState } from "react";

export const SliderDemo = () => {
  const [value, setValue] = useState(0);
  const users = [
    {
      name: "Raj",
      age: 20,
    },
    {
      name: "Rajesh",
      age: 25,
    },
    {
      name: "Rajeshwari",
      age: 30,
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue+1);
    console.log(value)
  };
  return (
    <div>
      <Slider aria-label="Volume" value={value} onChange={handleChange} />

      {users.map((user) => {
        return (
          <ul>
            <li>{user.name}</li>
            <li>{user.age}</li>
          </ul>
        );
      })}
    </div>
  );
};
