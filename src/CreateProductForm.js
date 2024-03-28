import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function CreateProductForm(props) {
  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    props.onSubmit(inputs);
  };

  return (
    <div>
      <h4>Create Product</h4>
      <form onSubmit={handleSubmit}>
        {/* <label> */}
        {/* Recepie Id: */}
        <TextField
          type="number"
          name="recepieId"
          id="outlined-basic"
          label="Recepie Id"
          variant="outlined"
          value={inputs.recepieId || ""}
          onChange={handleChange}
        />
        {/* </label> */}
        <br />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default CreateProductForm;
