import { useState, useEffect } from "react";
import ProductTrackForm from "../components/ProductTrackForm";
import ProductsContract from "../contracts/ProductsContract";
import { toDateString } from "../utils/DateUtils";

function TrackingPage() {
  const _productsContract = new ProductsContract();

  const [productEventList, setProductEventList] = useState();
  const [productHistory, setProductHistory] = useState();

  useEffect(() => {
    loadBlockChainData();
  }, []);
  async function loadBlockChainData() {
    const productEvents = await _productsContract.getComposedProductEvents();
    setProductEventList(productEvents);
  }

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
    return <div>Search for a product</div>;
  }
  if (props.product.name === "") {
    return <div>Product not found</div>;
  }

  // if (props.parents.length === 0) {
  //   return <div>{props.product.name}</div>;
  // }
  return (
    <div>
      {props.product.name} | {props.product.manufacturerName} |{" "}
      {toDateString(props.product.manufacturingDate.toNumber())} |{" "}
      {toDateString(props.product.expirationDate.toNumber())} |{" "}
      {props.product.barcodeId}
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
