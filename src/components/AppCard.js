import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Barcode from "react-barcode";

function AppCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#F8F8F8" }}>
      <CardContent>
        {/* <Barcode value="1234567890123" /> */}
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{props.actionTitle1}</Button>
        <Button size="small">{props.actionTitle2}</Button>
      </CardActions>
    </Card>
  );
}

export default AppCard;
