import * as React from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "../components/ProductCard";

function ProductsGrid(props) {
  return (
    <Grid container spacing={2}>
      {props.products?.map((product) => {
        return (
          <Grid item xs={4} key={product.barcodeId}>
            <ProductCard product={product}></ProductCard>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ProductsGrid;
