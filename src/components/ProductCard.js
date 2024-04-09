import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Barcode from "react-barcode";

function ProductCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#F8F8F8" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {"Type id:" + props.product.productTypeId}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {"Manufacturer:" + props.product.manufacturerName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {"Batch count:" + props.product.batchCount}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {"Manufacturin date:" + props.product.manufacturingDate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {"Expiration date:" + props.product.expirationDate}
        </Typography>
        <Barcode
          value={props.product.barcodeId}
          // format="EAN13"
          height={30}
          fontSize={16}
          margin={0}
        />{" "}
        <CardActions>
          <Button
            size="small"
            //   style={{ background: "#123" }}
          >
            Sell
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
