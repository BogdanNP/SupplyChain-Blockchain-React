import { useState, useEffect } from "react";
import ProductTypeTable from "../components/ProductTypeTable";
import ProductsContract from "../contracts/ProductsContract";
import AddProductTypeForm from "../components/AddProductTypeForm";
import SupplyChainContract from "../contracts/SupplyChainContract";

function ProductsPage() {
  const _supplyChainContract = new SupplyChainContract();
  const _productsContract = new ProductsContract();
  const [productTypes, setProductTypes] = useState();

  async function loadBlockChainData() {
    const _productTypes = await _productsContract.getProductTypeList();

    setProductTypes(_productTypes);
  }
  async function addProductType(productTypeDetails) {
    // console.log(productTypeDetails);
    const productType = {
      name: productTypeDetails["name"],
      details: productTypeDetails["details"],
    };
    await _supplyChainContract.addProductType(productType);
  }

  useEffect(() => {
    loadBlockChainData();
  }, []);

  return (
    <div>
      <AddProductTypeForm
        onSubmit={(e) => {
          addProductType(e);
        }}
      />
      <ProductTypeTable items={productTypes} />
    </div>
  );
}

export default ProductsPage;
