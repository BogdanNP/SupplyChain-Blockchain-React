import ProductTrackForm from "../components/ProductTrackForm";
import ProductsContract from "../contracts/ProductsContract";

function TrackingPage() {
  const _productsContract = new ProductsContract();

  async function trackProducts(barcodeId) {
    console.log("_productsContract", _productsContract);
    const _barcodeId = barcodeId["barcodeId"];
    const _foundProducts = await _productsContract.parentProducts(_barcodeId);
    console.log("_foundProducts", _foundProducts);
  }

  return (
    <div>
      <ProductTrackForm onSubmit={trackProducts} />
    </div>
  );
}

export default TrackingPage;
