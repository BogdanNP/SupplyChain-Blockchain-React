import React from "react";
import { useState } from "react";

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
        <label>
          Recepie Id:
          <input
            type="number"
            name="recepieId"
            value={inputs.recepieId || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Product Name:
          <input
            type="text"
            name="resultName"
            value={inputs.resultName || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default CreateProductForm;
