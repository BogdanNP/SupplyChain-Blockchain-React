import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { useState } from "react";

function AddUserForm(props) {
  const [inputs, setInputs] = useState({ ["role"]: "Manufacturer" });

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
      <h4>Adaugati un actor </h4>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="Public Key"
          name="address"
          value={inputs.address ?? ""}
          onChange={handleChange}
        />
        <br />
        <br />

        <FormControl>
          <InputLabel>Rolul utilizatorului</InputLabel>
          <Select
            value={inputs.role ?? ""}
            label="User Type"
            defaultValue={"Client"}
            onChange={handleChange}
            name="role"
          >
            <MenuItem value={"Manufacturer"} key={0}>
              Producator
            </MenuItem>
            <MenuItem value={"Supplier"} key={1}>
              Distribuitor
            </MenuItem>
            <MenuItem value={"Vendor"} key={2}>
              Vanzator
            </MenuItem>
            {/* <MenuItem value={"Customer"} key={3}>
              Customer
            </MenuItem> */}
          </Select>
        </FormControl>
        <br />
        <br />
        <TextField
          type="text"
          label="Nume"
          name="name"
          value={inputs.name ?? ""}
          onChange={handleChange}
        />
        <br />
        <br />
        <TextField
          type="text"
          label="Email"
          name="email"
          value={inputs.email ?? ""}
          onChange={handleChange}
        />
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

export default AddUserForm;
