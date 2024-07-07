import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

function TransferTable(props) {
  if (props.items === undefined) {
    return <div></div>;
  }

  let showActions = true;
  if (
    props.acceptTransfer === undefined &&
    props.refuseTransfer === undefined &&
    props.cancelTransfer === undefined
  ) {
    showActions = false;
  }

  let actions;
  if (showActions) {
    actions = <TableCell> Actions </TableCell>;
  }

  return (
    <div className="TransferTable">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> Id</TableCell>
              <TableCell> Sender </TableCell>
              <TableCell> Receiver </TableCell>
              <TableCell> BarcodeId </TableCell>
              <TableCell> Quantity </TableCell>
              <TableCell> Status </TableCell>
              {actions}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.items.map((item) => {
              let actionAccept;
              let actionDelete;
              let actionCancel;
              if (showActions && props.user.id == item.receiver) {
                actionAccept = (
                  <TableCell>
                    <Button
                      disabled={item.status !== 0}
                      onClick={() => {
                        props.acceptTransfer(item.id);
                      }}
                    >
                      Accept
                    </Button>
                  </TableCell>
                );
                actionDelete = (
                  <TableCell>
                    <Button
                      disabled={item.status !== 0}
                      onClick={() => {
                        props.refuseTransfer(item.id);
                      }}
                    >
                      Refuse
                    </Button>
                  </TableCell>
                );
              } else if (showActions && props.user.id == item.sender) {
                actionCancel = (
                  <TableCell>
                    <Button
                      disabled={item.status !== 0}
                      onClick={() => {
                        props.cancelTransfer(item.id);
                      }}
                    >
                      Cancel
                    </Button>
                  </TableCell>
                );
              }

              return (
                <TableRow
                  key={item.id.toString() + item.status.toString()}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{item.id.toNumber()}</TableCell>
                  <TableCell>{item.senderName ?? item.sender}</TableCell>
                  <TableCell>{item.receiverName ?? item.receiver}</TableCell>
                  <TableCell>{item.barcodeId}</TableCell>
                  <TableCell>{item.quantity?.toNumber() ?? 0}</TableCell>
                  <TableCell>
                    {item.status === 1
                      ? "Accepted"
                      : item.status === 2
                      ? "Refused"
                      : "Pending"}
                  </TableCell>
                  {actionAccept}
                  {actionDelete}
                  {actionCancel}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TransferTable;
