import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Barcode from "react-barcode";
import { toDateString } from "./utils/DateUtils";

function ProductTable(props) {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  if (props.items === undefined) {
    return <div></div>;
  }

  return (
    <div className="ProductTable">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> Name</TableCell>
              <TableCell> Type Id</TableCell>
              <TableCell> Man. Name</TableCell>
              <TableCell> Man. Id</TableCell>
              <TableCell> Quantity</TableCell>
              <TableCell> Man. Date</TableCell>
              <TableCell> Exp. Date</TableCell>
              <TableCell> Barcode</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.items.map((item) => (
              <TableRow
                key={item.barcodeId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.productTypeId}</TableCell>
                <TableCell>{item.manufacturerName}</TableCell>
                <TableCell>
                  {item.manufacturerId.substring(0, 10) + "..."}
                </TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <table>
        <thead>
          <tr>
            <th>Barcode</th>
            <th>Product Name</th>
            <th>Product Type Id</th>
            <th>Manufacturer Name</th>
            <th>Manufacturer Id</th>
            <th>Is batch</th>
            <th>Batch Count</th>
            <th>Man. Date</th>
            <th>Exp. Date</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item) => (
            <tr key={item.barcodeId}>
              <td>{item.barcodeId}</td>
              <td>{item.name}</td>
              <td>{item.productTypeId}</td>
              <td>{item.manufacturerName}</td>
              <td>{item.manufacturerId}</td>
              <td>{item.isBatch}</td>
              <td>{item.batchCount}</td>
              <td>{item.manufacturingDate.toString()}</td>
              <td>{item.expirationDate.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

export default ProductTable;
