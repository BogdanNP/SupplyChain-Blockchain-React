import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function RecipeCard(props) {
  if (props.recipe === undefined) {
    return <div></div>;
  }
  return (
    <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#BEBEBE" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.recipe.resultTypeName + " (#" + props.recipe.id + ")"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {"Ingrediente (" + props.recipe.ingredientsCount + "):"}
        </Typography>
        {props.recipe.ingredients?.map((ingredient, index) => {
          return <RecipeIngredientCard key={index} ingredient={ingredient} />;
        })}
        <Typography variant="body2" color="text.secondary">
          {"Cantitatea rezultata:" + props.recipe.quantityResult}
        </Typography>
      </CardContent>
    </Card>
  );
}

function RecipeIngredientCard(props) {
  return (
    <div>
      <Typography variant="body2" color="text.secondary">
        {"* " +
          props.ingredient.productType.name.toString() +
          " (#" +
          props.ingredient.productTypeId +
          "): " +
          props.ingredient.productQuantity}
      </Typography>
    </div>
  );
}

export default RecipeCard;
