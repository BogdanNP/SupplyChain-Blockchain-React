import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SimplePopup from "./SimplePopup";
import RecepieCard from "./RecepieCard";

function CreateProductForm(props) {
  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setInputs({ recepieId: value });
  };

  const handleSubmit = () => {
    props.onSubmit(inputs);
  };

  return (
    <div>
      <h4>Use Recepie</h4>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Recepie</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={inputs.recepieId ?? ""}
            label="Recepie"
            onChange={handleChange}
          >
            {props.recepieList?.map((recepie) => (
              <MenuItem
                value={recepie.id.toString()}
                key={recepie.id.toString()}
              >
                {recepie.resultTypeName.toString()}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <br />
        <SimplePopup buttonKey="View Recepie">
          <RecepieCard
            recepie={props.recepieList?.find(
              (recepie) => recepie.id.toString() === inputs.recepieId
            )}
          ></RecepieCard>
        </SimplePopup>
        <br />
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </div>
  );
}

export default CreateProductForm;
