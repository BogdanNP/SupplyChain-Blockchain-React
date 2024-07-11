import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

function TransactionSnackbar(props) {
  return (
    <Snackbar
      open={props.openSnackbar}
      onClose={props.handleCloseSnackbar}
      autoHideDuration={5000}
    >
      <Alert
        onClose={props.handleCloseSnackbar}
        severity="success"
        variant="filled"
        sx={{ width: "100%" }}
      >
        {"Transactie confirmata!"} <br />
        {`* Catre: ${props.txReceipt?.to}`} <br />
        {`* De la: ${props.txReceipt?.from}`} <br />
        {/* {`* Hash tranzactie: ${props.txReceipt?.transactionHash}`} <br /> */}
        {/* {`* Hash block: ${props.txReceipt?.blockHash}`} <br /> */}
        {/* {`* Numar de block: ${props.txReceipt?.blockNumber}`} <br /> */}
        {/* {`* Gas utilizat: ${props.txReceipt?.gasUsed}`} <br /> */}
        {/* {`* Pret gas efectiv: ${props.txReceipt?.effectiveGasPrice}`} <br /> */}
        {/* {`* Pretul tranzactiei in ETH: ${
          ((props.txReceipt?.effectiveGasPrice ?? 0) *
            (props.txReceipt?.gasUsed ?? 0)) /
          1000000000000000000
        }`}{" "} */}
        <br />
      </Alert>
    </Snackbar>
  );
}

export default TransactionSnackbar;
