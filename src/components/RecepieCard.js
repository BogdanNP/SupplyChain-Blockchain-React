import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function RecepieCard(props) {
  if (props.recepie === undefined) {
    return <div></div>;
  }
  return (
    <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#BEBEBE" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.recepie.resultTypeName + " (#" + props.recepie.id + ")"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {"Ingredients (" + props.recepie.ingredientsCount + "):"}
        </Typography>
        {props.recepie.ingredients?.map((ingredient, index) => {
          return <RecepieIngredientCard key={index} ingredient={ingredient} />;
        })}
        <Typography variant="body2" color="text.secondary">
          {"Quantity result:" + props.recepie.quantityResult}
        </Typography>
      </CardContent>
    </Card>
  );
}

function RecepieIngredientCard(props) {
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

export default RecepieCard;
