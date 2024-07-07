import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Barcode from "react-barcode";
import { toDateString } from "../utils/DateUtils";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ProductTable(props) {
  const navigate = useNavigate();

  if (props.items === undefined) {
    return <div></div>;
  }
  return (
    <div className="ProductTable">
      <TableContainer component={Paper} style={{ maxHeight: 800 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> Name</TableCell>
              {/* <TableCell> Type Id</TableCell> */}
              <TableCell> Man. Name</TableCell>
              {/* <TableCell> Man. Id</TableCell> */}
              <TableCell> Quantity</TableCell>
              <TableCell> Man. Date</TableCell>
              <TableCell> Exp. Date</TableCell>
              <TableCell> Barcode</TableCell>
              <TableCell> Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.items.map((item) => (
              <TableRow
                key={item.barcodeId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{item.name}</TableCell>
                {/* <TableCell>{item.productTypeId}</TableCell> */}
                <TableCell>{item.manufacturerName}</TableCell>
                {/* <TableCell>
                  {item.manufacturerId.substring(0, 10) + "..."}
                </TableCell> */}
                <TableCell>{item.quantity ?? 0}</TableCell>
                <TableCell>
                  {toDateString(item.manufacturingDate.toNumber())}
                </TableCell>
                <TableCell>
                  {toDateString(item.expirationDate.toNumber())}
                </TableCell>
                <TableCell>
                  <Barcode
                    value={item.barcodeId}
                    // format="EAN13"
                    height={20}
                    fontSize={16}
                    margin={0}
                  ></Barcode>
                </TableCell>
                <TableCell>
                  <Button
                    disabled={(item.quantity ?? 0) == 0}
                    onClick={() => {
                      navigate(`/transfers/${item.barcodeId}/${item.quantity}`);
                    }}
                  >
                    Sell
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

export default ProductTable;
