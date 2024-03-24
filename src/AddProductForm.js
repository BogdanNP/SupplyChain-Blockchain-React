import React from "react";
import { useState } from "react";

function AddProductForm(props) {
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
      <h4>Create Primary Product</h4>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Product Type Id:
          <input
            type="number"
            name="productTypeId"
            value={inputs.productTypeId || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Manufacturing Date:
          <input
            type="number"
            name="manufacturingDate"
            value={inputs.manufacturingDate || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Expiration Date:
          <input
            type="number"
            name="expirationDate"
            value={inputs.expirationDate || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Batch Count:
          <input
            type="number"
            name="batchCount"
            value={inputs.batchCount || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Composition:
          <input
            type="text"
            name="composition"
            value={inputs.composition || ""}
            onChange={handleChange}
          />
        </label>
        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default AddProductForm;
