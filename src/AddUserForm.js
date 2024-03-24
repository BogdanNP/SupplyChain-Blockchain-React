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
      <h4>Add Company </h4>
      <form onSubmit={handleSubmit}>
        <label>
          Account Public Key:
          <input
            type="text"
            name="address"
            value={inputs.address || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Company Type:
          <select
            name="role"
            defaultValue={inputs.role || "Manufacturer"}
            onChange={handleChange}
          >
            <option value="Manufacturer">Manufacturer</option>
            <option value="Supplier">Supplier</option>
            <option value="Vendor">Vendor</option>
          </select>
        </label>
        <br />
        <label>
          Company Display Name:
          <input
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Company Email:
          <input
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default AddUserForm;
