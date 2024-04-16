import { useState, useEffect } from "react";
import UsersContract from "../contracts/UsersContract";
import ProductsContract from "../contracts/ProductsContract";
import SupplyChainContract from "../contracts/SupplyChainContract";
import ObjectTransfersContract from "../contracts/ObjectTransfersContract";
import Button from "@mui/material/Button";

function SellProductPage() {
  const _usersContract = new UsersContract();
  const _productsContract = new ProductsContract();
  const _supplyChainContract = new SupplyChainContract();
  const _objectsTransfersContract = new ObjectTransfersContract();
  //what is needed for sell request:
  // buyerid
  // barcodeId
  // currentTime
  // quantity

  // what is needed for accept sell request
  // sellerId
  // barcodeId
  // currentId
  // acceptSell

  // what do we need: a form

  const [inputs, setInputs] = useState("");
  const [user, setUser] = useState();
  const [accountTransfers, setAccountTransfers] = useState();

  useEffect(() => {
    loadBlockChainData();
  }, []);

  async function loadBlockChainData() {
    const _user = await _usersContract.getCurrentUser();
    const _transfers = await _productsContract.transfers();
    const _accountTransfers = await _productsContract.accountTransfers(
      _user.id
    );
    setUser(_user);
    setAccountTransfers(_accountTransfers);
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    _productsContract.requestTransfer(
      inputs["barcodeId"],
      inputs["quantity"],
      inputs["buyerId"]
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Barcode Id:
          <input
            type="string"
            name="barcodeId"
            value={inputs.barcodeId || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Buyer Id:
          <input
            type="string"
            name="buyerId"
            value={inputs.buyerId || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={inputs.quantity || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <input type="submit" />
      </form>
      <div>
        My Transfers
        <br />
        id | sender | receiver | barcodeId | quantity | status(0 = P, 1 = A, 2 =
        R)
        {accountTransfers?.map((transfer, index) => (
          <div key={index}>
            {transfer.id.toNumber()} | {transfer.sender.substring(0, 10)} |{" "}
            {transfer.receiver.substring(0, 10)} | {transfer.barcodeId} |{" "}
            {transfer.quantity.toNumber()} | {transfer.status} |{" "}
            <Button
              onClick={() => {
                _productsContract.acceptTransfer(transfer.id);
              }}
            >
              Accept
            </Button>{" "}
            |{" "}
            <Button
              onClick={() => {
                _productsContract.refuseTransfer(transfer.id);
              }}
            >
              Refuse
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SellProductPage;
