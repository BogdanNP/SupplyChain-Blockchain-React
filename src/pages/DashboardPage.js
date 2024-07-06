import { useState, useEffect } from "react";
import UsersContract from "../contracts/UsersContract";
import ProductsContract from "../contracts/ProductsContract";

function DashboardPage() {
  const _usersContract = new UsersContract();
  const _productsContract = new ProductsContract();
  const [usersCount, setUsersCount] = useState(0);
  const [productTypeEventList, setProductTypeEventList] = useState();
  const [productEventList, setProductEventList] = useState();
  const [composedProductEventList, setComposedProductEventList] = useState();

  useEffect(() => {
    loadBlockChainData();
  }, []);

  async function loadBlockChainData() {
    const _usersCount = await _usersContract.getUsersCount();
    setUsersCount(_usersCount);

    const _productTypeEventList =
      await _productsContract.getProductTypeEvents();
    setProductTypeEventList(_productTypeEventList);

    const _productEventList = await _productsContract.getProductEvents();
    setProductEventList(_productEventList);

    const _composedProductEventList =
      await _productsContract.getComposedProductEvents();
    setComposedProductEventList(_composedProductEventList);
  }

  return (
    <div>
      Dashboard Page, here we should display events from all contracts
      <br />
      <h4> Product Type Events:</h4>
      {productTypeEventList?.map((productTypeEvent) => {
        return (
          <div key={productTypeEvent["args"].id.toNumber()}>
            {"#"}
            {productTypeEvent["args"].id.toNumber()}{" "}
            {productTypeEvent["args"].name}
            {/* <br />* block number: {productTypeEvent.blockNumber}
            <br />* block hash: {productTypeEvent.blockHash} */}
          </div>
        );
      })}
      <h4>Product Events:</h4>
      {productEventList?.map((productEvent) => {
        return (
          <div key={productEvent["args"].barcodeId}>
            {productEvent["args"].name} {" | "}{" "}
            {productEvent["args"].manufacturerName} {" | "}
            {productEvent["args"].barcodeId} {" | "}
            {/* <br />* block number: {productEvent.blockNumber}
            <br />* block hash: {productEvent.blockHash} */}
          </div>
        );
      })}
      <h4>Composed Product Events:</h4>
      {composedProductEventList?.map((productEvent) => {
        return (
          <div key={productEvent["args"]?.barcodeId.toString()}>
            {productEvent["args"].name} {" | "}{" "}
            {productEvent["args"].manufacturerName} {" | "}
            {productEvent["args"].barcodeId} {" | "}
            {productEvent["args"].parentProducts.join(", ")} {" | "}
            {/* <br />* block number: {productEvent.blockNumber}
            <br />* block hash: {productEvent.blockHash} */}
          </div>
        );
      })}
      <p> {"Contract users: " + usersCount}</p>
    </div>
  );
}

export default DashboardPage;
