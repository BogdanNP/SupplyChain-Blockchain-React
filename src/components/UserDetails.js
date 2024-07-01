import React from "react";
import Typography from "@mui/material/Typography";
import { userRoleToString } from "../models/UserRoles";

function UserDetails(props) {
  return (
    <div>
      <Typography gutterBottom variant="h5" component="div">
        Account details:
      </Typography>{" "}
      <Typography gutterBottom variant="body1" component="div">
        Name: {props.user?.name}
      </Typography>
      <Typography gutterBottom variant="body1" component="div">
        Email: {props.user?.email}
      </Typography>
      <Typography gutterBottom variant="body1" component="div">
        Role: {userRoleToString(props.user?.role)}
      </Typography>
      <Typography gutterBottom variant="body1" component="div">
        Id: {props.user?.id}
      </Typography>
    </div>
  );
}

export default UserDetails;
