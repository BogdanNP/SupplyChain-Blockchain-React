import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function RecepieCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#F8F8F8" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.recepie.resultTypeName + " (#" + props.recepie.id + ")"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {"Quantity result:" + props.recepie.quantityResult}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {"Ingredients (" + props.recepie.ingredientsCount + "):"}
        </Typography>
        {props.recepie.ingredients?.map((ingredient, index) => {
          return <RecepieIngredientCard key={index} ingredient={ingredient} />;
        })}
      </CardContent>
    </Card>
  );
}

function RecepieIngredientCard(props) {
  return (
    <div>
      <Typography variant="body2" color="text.secondary">
        {"IngredientName(#" +
          props.ingredient.productTypeId +
          "):" +
          props.ingredient.productQuantity}
      </Typography>
    </div>
  );
}

export default RecepieCard;
