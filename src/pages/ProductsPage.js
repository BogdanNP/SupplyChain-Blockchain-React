import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AppCard from "../components/AppCard";
import ProductsGrid from "../components/ProductsGrid";
import ProductsContract from "../contracts/ProductsContract";
import RecepieCard from "../components/RecepieCard";
import ProductTable from "../ProductTable";

function ProductsPage() {
  const _productsContract = new ProductsContract();
  const [products, setProducts] = useState();
  const [recepies, setRecepies] = useState();

  async function loadBlockChainData() {
    let _products = await _productsContract.getProductList(
      "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
    );
    let _recepies = await _productsContract.getRecepieList();
    setProducts(_products);
    setRecepies(_recepies);
  }

  useEffect(() => {
    loadBlockChainData();
  }, []);

  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      {/* Products page */}

      <Typography gutterBottom variant="h5" component="div">
        {"Recepies"}
      </Typography>
      <Grid container spacing={3}>
        {recepies?.map((recepie) => {
          return (
            <Grid item xs={5} key={recepie.id}>
              <RecepieCard recepie={recepie} />
            </Grid>
          );
        })}
      </Grid>
      <Typography gutterBottom variant="h5" component="div">
        {"My Product Stock"}
      </Typography>
      <ProductsGrid products={products} />
      <ProductTable items={products} />
    </div>
  );
}

export default ProductsPage;
