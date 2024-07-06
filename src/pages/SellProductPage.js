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
  // const [user, setUser] = useState();
  const [buyers, setBuyers] = useState();
  const [accountTransfers, setAccountTransfers] = useState();

  useEffect(() => {
    loadBlockChainData();
  }, []);

  const navigate = useNavigate();

  async function loadBlockChainData() {
    const _user = await _usersContract.getCurrentUser();
    if (_user === undefined) {
      navigate("/connect");
    } else {
      // setUser(_user);

      const _accountTransfers = await _productsContract.accountTransfers(
        _user.id
      );
      setAccountTransfers(_accountTransfers);

      const _buyers = await _usersContract.getUserList();
      setBuyers(_buyers);
    }
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    _productsContract.requestTransfer(
      inputs["barcodeId"],
      inputs["quantity"],
      buyers[inputs["buyerIndex"]].id
    );
  };

  return (
    <div>
      <h4> New transfer </h4>
      <form onSubmit={handleSubmit}>
        <TextField
          type="number"
          label="Barcode Id"
          name="barcodeId"
          value={inputs.barcodeId ?? ""}
          onChange={handleChange}
        ></TextField>
        <br />
        <br />
        <TextField
          type="number"
          label="Quantity"
          name="quantity"
          value={inputs.quantity ?? ""}
          onChange={handleChange}
        ></TextField>
        <br />
        <br />
        <FormControl fullWidth>
          <InputLabel>Buyer</InputLabel>
          <Select
            value={inputs.buyerIndex ?? ""}
            label="Buyer"
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
        <h4>My Transfers </h4>
        <TransferTable
          items={accountTransfers}
          acceptTransfer={(id) => {
            _productsContract.acceptTransfer(id);
          }}
          refuseTransfer={(id) => {
            _productsContract.refuseTransfer(id);
          }}
        ></TransferTable>
      </div>
    </div>
  );
}

export default SellProductPage;
