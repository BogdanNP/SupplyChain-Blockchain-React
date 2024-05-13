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
              <TableCell> Actions </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.items.map((item) => (
              <TableRow
                key={item.barcodeId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{item.id.toNumber()}</TableCell>
                <TableCell>{item.sender.substring(0, 10) + "..."}</TableCell>
                <TableCell>{item.receiver.substring(0, 10) + "..."}</TableCell>
                <TableCell>{item.barcodeId}</TableCell>
                <TableCell>{item.quantity?.toNumber() ?? 0}</TableCell>
                <TableCell>
                  {item.status === 1
                    ? "Accepted"
                    : item.status === 2
                    ? "Refused"
                    : "Pending"}
                </TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TransferTable;
