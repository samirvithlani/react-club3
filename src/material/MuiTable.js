import { CircularProgress, LinearProgress, Paper, Snackbar } from "@mui/material";
import { height } from "@mui/system";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

export const MuiTable = () => {
    
    const [flag, setflag] = useState(true)
    const click = ()=>{
        setflag(false)
    }
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "name",
      headerName: "Name",
    },
    {
      field: "age",
      headerName: "Age",
    },
  ];
  const rows = [
    {
      id: 1,
      name: "John",
      age: 20,
    },
    {
      id: 2,
      name: "Smith",
      age: 30,
    },
    {
      id: 3,
      name: "Peter",
      age: 40,
    },
  ];
  return (
    <div style={{ height: 400, width: 400 }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
      <Snackbar >
      </Snackbar>
      <button onClick={()=>{click()}}>click</button>
      <LinearProgress/>
    </div>
  );
};
