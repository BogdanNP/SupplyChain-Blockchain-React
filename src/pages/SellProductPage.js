import { useState, useEffect } from "react";
import UsersContract from "../contracts/UsersContract";
import ProductsContract from "../contracts/ProductsContract";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import TransactionSnackbar from "../components/TransactionSnackbar";
import TransferTable from "../components/TransferTable";
import { useNavigate } from "react-router-dom";

function SellProductPage(props) {
  const _usersContract = new UsersContract();
  const _productsContract = new ProductsContract();

  const params = useParams();
  const [inputs, setInputs] = useState({
    ["barcodeId"]: params.barcodeId,
    ["quantity"]: params.quantity,
  });
  const [user, setUser] = useState();
  const [buyers, setBuyers] = useState();
  const [accountTransfers, setAccountTransfers] = useState();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [txReceipt, setTxReceipt] = useState(undefined);
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  useEffect(() => {
    loadBlockChainData();
  }, []);

  const navigate = useNavigate();

  async function loadBlockChainData() {
    const _user = await _usersContract.getCurrentUser();
    if (_user === undefined) {
      navigate("/connect");
    } else {
      setUser(_user);

      const _buyers = await _usersContract.getUserList();
      setBuyers(_buyers);

      const _accountTransfers = await _productsContract.accountTransfers(
        _user.id
      );
      const newAccT = _accountTransfers.map((transfer) => {
        let receiver = _buyers?.find((buyer) => buyer.id === transfer.receiver);
        let sender = _buyers?.find((buyer) => buyer.id === transfer.sender);
        return {
          ...transfer,
          receiverName: receiver?.name ?? _user.name,
          senderName: sender?.name ?? _user.name,
        };
      });
      setAccountTransfers(newAccT);
    }
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const _txReceipt = await _productsContract.requestTransfer(
      inputs["barcodeId"],
      inputs["quantity"],
      buyers[inputs["buyerIndex"]].id
    );
    console.log(_txReceipt);
    if (_txReceipt !== undefined) {
      await loadBlockChainData();
      setTxReceipt(_txReceipt);
      setOpenSnackbar(true);
    }
  }

  return (
    <div>
      <h4>Creaza un transfer nou</h4>
      <p>
        {" "}
        Introduceti codul de bare al produsului pe care doriti sa il
        transferati, introduceti cantitatea, iar in final selectati destinatarul
        transferuli in sectiunea de Cumparator.{" "}
      </p>
      <form onSubmit={handleSubmit}>
        <TextField
          type="number"
          label="Cod de bare"
          name="barcodeId"
          value={inputs.barcodeId ?? ""}
          onChange={handleChange}
        ></TextField>
        <br />
        <br />
        <TextField
          type="number"
          label="Canitate"
          name="quantity"
          value={inputs.quantity ?? ""}
          onChange={handleChange}
        ></TextField>
        <br />
        <br />
        <FormControl fullWidth>
          <InputLabel>Cumparator</InputLabel>
          <Select
            value={inputs.buyerIndex ?? ""}
            label="Cumparator"
            onChange={handleChange}
            name="buyerIndex"
          >
            {buyers?.map((buyer, index) => (
              <MenuItem value={index} key={buyer.id.toString()}>
                {buyer.name.toString()}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <br />
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
      <br />
      <div>
        <h4>Transferuri</h4>
        <TransferTable
          items={accountTransfers}
          user={user}
          acceptTransfer={(id) => {
            _productsContract.acceptTransfer(id);
          }}
          refuseTransfer={(id) => {
            _productsContract.refuseTransfer(id);
          }}
          cancelTransfer={(id) => {
            _productsContract.cancelTransfer(id);
          }}
        ></TransferTable>
      </div>
      <TransactionSnackbar
        openSnackbar={openSnackbar}
        handleCloseSnackbar={handleCloseSnackbar}
        txReceipt={txReceipt}
      />
    </div>
  );
}

export default SellProductPage;
