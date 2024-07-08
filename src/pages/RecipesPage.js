import { React, useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ProductsContract from "../contracts/ProductsContract";
import RecipeCard from "../components/RecipeCard";

function RecipesPage(props) {
  var _productsContract = new ProductsContract();
  const [recipes, setRecipes] = useState();

  async function loadBlockChainData() {
    let _recipes = await _productsContract.getRecipeList();
    setRecipes(_recipes);
  }

  useEffect(() => {
    loadBlockChainData();
  }, []);

  return (
    <div>
      <Typography gutterBottom variant="h5" component="div">
        {"Retete"}
      </Typography>
      <p>
        Aici sunt afisate toate retetele disponibile pentru utilizarea in
        sistem.
      </p>
      <Grid container spacing={3}>
        {recipes?.map((recipe) => {
          return (
            <Grid item xs={5} key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default RecipesPage;
