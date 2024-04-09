import { React, useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ProductsContract from "../contracts/ProductsContract";
import RecepieCard from "../components/RecepieCard";

function RecepiesPage(props) {
  var _productsContract = new ProductsContract();
  const [recepies, setRecepies] = useState();

  async function loadBlockChainData() {
    let _recepies = await _productsContract.getRecepieList();
    setRecepies(_recepies);
  }

  useEffect(() => {
    loadBlockChainData();
  }, []);

  return (
    <div>
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
    </div>
  );
}

export default RecepiesPage;
