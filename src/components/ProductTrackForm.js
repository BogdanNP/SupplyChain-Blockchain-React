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
      <h4>Track Product </h4>
      <form onSubmit={handleSubmit}>
        <label>
          Product Barcode:
          <input
            type="text"
            name="barcodeId"
            value={inputs.barcodeId || ""}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
}

export default ProductTrackForm;
