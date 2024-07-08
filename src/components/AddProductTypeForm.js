import React from "react";
import { useState } from "react";

function AddProductTypeForm(props) {
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
      <h4>Adaugati un tip de produs</h4>
      <form onSubmit={handleSubmit}>
        <label>
          Numele tipului de produs:
          <input
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Detalii:
          <input
            type="text"
            name="details"
            value={inputs.details || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default AddProductTypeForm;
