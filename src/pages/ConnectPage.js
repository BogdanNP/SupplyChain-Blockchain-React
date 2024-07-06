import { useState, useEffect } from "react";
import UsersContract from "../contracts/UsersContract";
import { userRoleFromString } from "../models/UserRoles";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

function ConnectPage() {
  const _usersContract = new UsersContract();
  const userTypes = ["Manufacturer", "Supplier", "Vendor", "Client"];
  const [inputs, setInputs] = useState({ ["role"]: "Manufacturer" });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(inputs);
  };

  async function addUser(userDetails) {
    console.log(userDetails);
    const newUser = {
      name: userDetails["name"],
      email: userDetails["email"],
      role: userRoleFromString(userDetails["role"]),
    };
    await _usersContract.register(newUser);
  }

  useEffect(() => {
    loadBlockChainData();
  }, []);
  async function loadBlockChainData() {}

  return (
    <div>
      <h4>Select user type</h4>
      <form>
        <FormControl>
          <InputLabel>User Type</InputLabel>
          <Select
            value={inputs.role ?? ""}
            label="User Type"
            defaultValue={"Client"}
            onChange={handleChange}
            name="role"
          >
            <MenuItem value={"Manufacturer"} key={0}>
              Manufacturer
            </MenuItem>
            <MenuItem value={"Supplier"} key={1}>
              Supplier
            </MenuItem>
            <MenuItem value={"Vendor"} key={2}>
              Vendor
            </MenuItem>
            <MenuItem value={"Customer"} key={3}>
              Customer
            </MenuItem>
          </Select>
        </FormControl>
        <br />
        <br />
        <TextField
          type="text"
          label="Display Name"
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

export default ConnectPage;
