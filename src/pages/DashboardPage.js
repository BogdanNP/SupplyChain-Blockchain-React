import { useState, useEffect } from "react";
import UsersContract from "../contracts/UsersContract";
import ProductsContract from "../contracts/ProductsContract";
import ProductTypeTable from "../components/ProductTypeTable";
import ProductEventTable from "../components/ProductEventTable";
import ProductBlockEventTable from "../components/ProductBlockEventTable";
import TransferTable from "../components/TransferTable";

function DashboardPage() {
  const _usersContract = new UsersContract();
  const _productsContract = new ProductsContract();
  const [user, setUser] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [productTypes, setProductTypes] = useState();
  const [products, setProducts] = useState();
  const [composedProducts, setComposedProducts] = useState();
  const [blockedProducts, setBlockedProducts] = useState();
  const [transfers, setTransfers] = useState();

  useEffect(() => {
    loadBlockChainData();
  }, []);

  async function loadBlockChainData() {
    const _user = await _usersContract.getUsersCount();
    setUser(_user);

    const _usersCount = await _usersContract.getUsersCount();
    setUsersCount(_usersCount);

    const _productTypeEventList =
      await _productsContract.getProductTypeEvents();
    const _productTypeList = _productTypeEventList?.map((productTypeEvent) => {
      return {
        id: productTypeEvent["args"].id.toNumber(),
        name: productTypeEvent["args"].name.toString(),
        details: "-",
      };
    });
    setProductTypes(_productTypeList);

    const _productEventList = await _productsContract.getProductEvents();
    const _products = _productEventList?.map((productEvent) => {
      return {
        name: productEvent["args"].name,
        manufacturerName: productEvent["args"].manufacturerName,
        barcodeId: productEvent["args"].barcodeId,
        manufacturingDate: productEvent["args"].manDateEpoch,
        expirationDate: productEvent["args"].expDateEpoch,
        details: "-",
      };
    });
    setProducts(_products);

    const _composedProductEventList =
      await _productsContract.getComposedProductEvents();
    const _composedProducts = _composedProductEventList?.map((productEvent) => {
      return {
        name: productEvent["args"].name,
        manufacturerName: productEvent["args"].manufacturerName,
        barcodeId: productEvent["args"].barcodeId,
        manufacturingDate: productEvent["args"].manDateEpoch,
        expirationDate: productEvent["args"].expDateEpoch,
        details:
          "Ingredients:" + productEvent["args"].parentProducts.join(", "),
      };
    });
    setComposedProducts(_composedProducts);

    const _blockedProductEventList =
      await _productsContract.getBlockedProductEvents();

    const _blockedProducts = _blockedProductEventList?.map((productEvent) => {
      return {
        barcodeId: productEvent["args"].barcodeId,
        status: productEvent["args"].status,
      };
    });

    setBlockedProducts(_blockedProducts);

    const _transferEventList =
      await _productsContract.getObjectTransferredEvents();

    const _transfers = _transferEventList?.map((transferEvent) => {
      return {
        id: transferEvent["args"].transferId,
        receiver: transferEvent["args"].receiver,
        sender: transferEvent["args"].sender,
        barcodeId: transferEvent["args"].barcodeId,
        quantity: transferEvent["args"].quantity,
        status: transferEvent["args"].status,
      };
    });

    setTransfers(_transfers);
  }

  return (
    <div>
      Dashboard Page, here we should display events from all contracts
      <br />
      <h4> {"Actors in system: " + usersCount}</h4>
      <br />
      <h4>Base Product Events:</h4>
      <ProductEventTable items={products} />
      <br />
      <br />
      <h4>Composed Product Events:</h4>
      <ProductEventTable items={composedProducts} />
      <br />
      <h4> Transfer Events:</h4>
      <TransferTable items={transfers} user={user} />
      <br />
      <h4>Blocked Product Events:</h4>
      <ProductBlockEventTable items={blockedProducts} />
      <br />
      <h4> Product Type Events:</h4>
      <ProductTypeTable items={productTypes} />
      <br />
    </div>
  );
}

export default DashboardPage;
