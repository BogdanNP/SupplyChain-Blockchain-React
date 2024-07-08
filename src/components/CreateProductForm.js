import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SimplePopup from "./SimplePopup";
import RecipeCard from "./RecipeCard";

function CreateProductForm(props) {
  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setInputs({ recipeId: value });
  };

  const handleSubmit = () => {
    props.onSubmit(inputs);
  };

  return (
    <div>
      <h4>Crearea unui produs pe baza unei retete</h4>
      <p>Selectati retetea pe care doriti sa o utilizati</p>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Recipe</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={inputs.recipeId ?? ""}
            label="Reteta"
            onChange={handleChange}
          >
            {props.recipeList?.map((recipe) => (
              <MenuItem value={recipe.id.toString()} key={recipe.id.toString()}>
                {recipe.resultTypeName.toString()}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <br />
        <SimplePopup buttonKey="Vizualizare reteta">
          <RecipeCard
            recipe={props.recipeList?.find(
              (recipe) => recipe.id.toString() === inputs.recipeId
            )}
          ></RecipeCard>
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
