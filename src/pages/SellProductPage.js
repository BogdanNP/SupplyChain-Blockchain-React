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
  const [user, setUser] = useState();
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
      console.log("_accountTransfers", newAccT);
      setAccountTransfers(newAccT);
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
    </div>
  );
}

export default SellProductPage;
