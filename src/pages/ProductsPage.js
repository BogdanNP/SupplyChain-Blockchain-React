import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AppCard from "../components/AppCard";
import ProductsGrid from "../components/ProductsGrid";

function ProductsPage() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      Products page
      <Grid container spacing={3}>
        {items.map((item) => {
          return (
            <Grid item xs={3} key={item}>
              <AppCard
                title={"Recepie Title (#" + item + ")"}
                body={`Recepie details about the\n\ncomponents\n and quantities required`}
                actionTitle1="View products"
                actionTitle2="Create product"
              ></AppCard>
            </Grid>
          );
        })}
      </Grid>
      <ProductsGrid
        products={[
          {
            name: "Name",
            productTypeId: 1,
            barcodeId: "383281312838",
            manufacturerName: "Man name",
            batchCount: 12,
            manufacturingDate: "Today",
            expirationDate: "1Week",
          },
        ]}
      ></ProductsGrid>
    </div>
  );
}

export default ProductsPage;
