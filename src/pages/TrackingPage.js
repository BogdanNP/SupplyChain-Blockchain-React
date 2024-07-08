import { useState, useEffect } from "react";
import ProductTrackForm from "../components/ProductTrackForm";
import ProductBlockForm from "../components/ProductBlockForm";
import ProductsContract from "../contracts/ProductsContract";
import { toDateString } from "../utils/DateUtils";
import SupplyChainContract from "../contracts/SupplyChainContract";
import UsersContract from "../contracts/UsersContract";
import { UserRoles } from "../models/UserRoles";

function TrackingPage() {
  const _productsContract = new ProductsContract();
  const _usersContract = new UsersContract();
  const _supplyChain = new SupplyChainContract();

  const [productHistory, setProductHistory] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    loadBlockChainData();
  }, []);

  async function loadBlockChainData() {
    let _user = await _usersContract.getCurrentUser();
    setUser(_user);
  }

  async function trackProducts(barcodeId) {
    const _barcodeId = barcodeId["barcodeId"];
    const _productHistory = await _productsContract.trackProduct(_barcodeId);
    setProductHistory(_productHistory);
    console.log(_productHistory);
  }

  async function blockProduct(barcodeId) {
    const _barcodeId = barcodeId["barcodeId"];
    _supplyChain.blockProduct(_barcodeId, true);
  }

  let blockProductForm;

  if (user?.role === UserRoles.Admin) {
    blockProductForm = <ProductBlockForm onSubmit={blockProduct} />;
  }

  return (
    <div>
      {blockProductForm}
      <ProductTrackForm onSubmit={trackProducts} />
      <ProductHeader product={productHistory?.product}></ProductHeader>
      <ProductList
        product={productHistory?.product}
        parents={productHistory?.parents}
      ></ProductList>
    </div>
  );
}

function ProductHeader(props) {
  if (props?.product === undefined || props.product.name === "") {
    return <div></div>;
  }
  return (
    <h6 style={{ fontSize: 18 }}>
      {"Nume produs"} | {"Producator"} | {"Data productie"} | {"Data expirare"}{" "}
      | {"Cod de bare"}
    </h6>
  );
}

function ProductList(props) {
  if (props?.product === undefined) {
    return <h6 style={{ fontSize: 18 }}>Cauta un produs</h6>;
  }
  if (props.product.name === "") {
    return <h6 style={{ fontSize: 18 }}>Produsul nu a fost gasit</h6>;
  }

  return (
    <div>
      {" "}
      <h6 style={{ fontSize: 18 }}>
        {props.product.name} | {props.product.manufacturerName} |{" "}
        {toDateString(props.product.manufacturingDate.toNumber())} |{" "}
        {toDateString(props.product.expirationDate.toNumber())} |{" "}
        {props.product.barcodeId}
      </h6>
      <ul>
        {props.parents?.map((productData) => (
          <ProductList
            key={props.product.barcodeId + productData.product.barcodeId}
            product={productData.product}
            parents={productData.parents}
          />
        ))}
      </ul>
    </div>
  );
}

export default TrackingPage;
