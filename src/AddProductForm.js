import React from "react";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { Button, TextField } from "@mui/material";

function AddProductForm(props) {
  const [productTypeIndex, setProductTypeIndex] = useState();
  const [manufacturingDate, setManufacturingDate] = useState(dayjs(Date()));
  const [expirationDate, setExpirationDate] = useState(dayjs(Date()));
  const [batchCount, setBatchCount] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    let inputs = {
      productTypeId: props.productTypes[productTypeIndex]?.id ?? null,
      manufacturingDate: manufacturingDate.toDate().getTime() / 1000,
      expirationDate: expirationDate.toDate().getTime() / 1000,
      batchCount: batchCount,
    };
    console.log(inputs);
    if (inputs.productTypeId === null) {
      alert("Please select product");
    } else if (inputs.batchCount === undefined || inputs.batchCount < 0) {
      alert("Please write a valid batch count");
    } else {
      props.onSubmit(inputs);
    }
  };

  return (
    <div>
      <h4>Add Product</h4>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Product</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={productTypeIndex ?? ""}
            label="Product"
            onChange={(event) => {
              setProductTypeIndex(event.target.value);
            }}
            name="productTypeId"
          >
            {props.productTypes?.map((product, index) => (
              <MenuItem value={index} key={product.id.toString()}>
                {product.name.toString()}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <br />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Manufacturing Date"
            value={manufacturingDate}
            onChange={(newDate) => setManufacturingDate(newDate)}
          />
        </LocalizationProvider>{" "}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Expiration Date"
            value={expirationDate}
            onChange={(newDate) => setExpirationDate(newDate)}
          />
        </LocalizationProvider>
        <br />
        <br />
        <TextField
          type="number"
          label="Batch Count"
          value={batchCount ?? ""}
          onChange={(newValue) => setBatchCount(newValue.target.value)}
        ></TextField>
        <br />
        <br />
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default AddProductForm;
