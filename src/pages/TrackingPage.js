import { useState, useEffect } from "react";
import ProductTrackForm from "../components/ProductTrackForm";
import ProductsContract from "../contracts/ProductsContract";
import { toDateString } from "../utils/DateUtils";

function TrackingPage() {
  const _productsContract = new ProductsContract();

  const [productHistory, setProductHistory] = useState();

  useEffect(() => {
    loadBlockChainData();
  }, []);
  async function loadBlockChainData() {}

  async function trackProducts(barcodeId) {
    const _barcodeId = barcodeId["barcodeId"];
    const _productHistory = await _productsContract.trackProduct(_barcodeId);
    setProductHistory(_productHistory);
    // console.log(_productHistory);
  }

  return (
    <div>
      <ProductTrackForm onSubmit={trackProducts} />
      <ProductList
        product={productHistory?.product}
        parents={productHistory?.parents}
      ></ProductList>
    </div>
  );
}

function ProductList(props) {
  if (props?.product === undefined) {
    return <h6 style={{ fontSize: 18 }}>Search for a product</h6>;
  }
  if (props.product.name === "") {
    return <h6 style={{ fontSize: 18 }}>Product not found</h6>;
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
