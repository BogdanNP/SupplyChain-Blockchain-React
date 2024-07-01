import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

function FindUserForm(props) {
  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(inputs);
    props.onSubmit(inputs);
  };

  return (
    <div>
      <h4>Find Company </h4>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="Public Key"
          name="address"
          value={inputs.address ?? ""}
          onChange={handleChange}
        />
      </form>
      <br />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
      <br />
      <br />
    </div>
  );
}

export default FindUserForm;
