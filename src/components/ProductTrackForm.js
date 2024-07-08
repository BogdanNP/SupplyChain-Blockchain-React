import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

function ProductTrackForm(props) {
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
      <h4>Vezi istoricul unui produs </h4>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="Cod de bare"
          name="barcodeId"
          value={inputs.barcodeId ?? ""}
          onChange={handleChange}
        ></TextField>
        <br />
        <br />
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
        <br />
        <br />
      </form>
    </div>
  );
}

export default ProductTrackForm;
