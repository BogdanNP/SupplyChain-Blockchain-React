import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

function TransactionSnackbar(props) {
  return (
    <Snackbar
      open={props.openSnackbar}
      onClose={props.handleCloseSnackbar}
      // autoHideDuration={5000}
    >
      <Alert
        onClose={props.handleCloseSnackbar}
        severity="success"
        variant="filled"
        sx={{ width: "100%" }}
      >
        {"Transaction receipt:"} <br />
        {`* To: ${props.txReceipt?.to}`} <br />
        {`* From: ${props.txReceipt?.from}`} <br />
        {`* Transaction hash: ${props.txReceipt?.transactionHash}`} <br />
        {`* Block hash: ${props.txReceipt?.blockHash}`} <br />
        {`* Block number: ${props.txReceipt?.blockNumber}`} <br />
        {`* Gas used: ${props.txReceipt?.gasUsed}`} <br />
        {`* Effective gas price: ${props.txReceipt?.effectiveGasPrice}`} <br />
        {`* Transaction price in ETH: ${
          ((props.txReceipt?.effectiveGasPrice ?? 0) *
            (props.txReceipt?.gasUsed ?? 0)) /
          1000000000000000000
        }`}{" "}
        <br />
      </Alert>
    </Snackbar>
  );
}

export default TransactionSnackbar;
