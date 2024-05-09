import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import ProductsGrid from "../components/ProductsGrid";
import ProductsContract from "../contracts/ProductsContract";
import UsersContract from "../contracts/UsersContract";
import SupplyChainContract from "../contracts/SupplyChainContract";
import ProductTable from "../ProductTable";
import CreateProductForm from "../components/CreateProductForm";
import AddProductForm from "../AddProductForm";

function MyStockPage() {
  const _productsContract = new ProductsContract();
  const _usersContract = new UsersContract();
  const _supplyChainContract = new SupplyChainContract();
  const [productTypes, setProductTypes] = useState();
  const [products, setProducts] = useState();
  const [recepies, setRecepies] = useState();

  async function loadBlockChainData() {
    const _user = await _usersContract.getCurrentUser();

    let _productTypes = await _productsContract.getProductTypeList();
    let _products = await _productsContract.getProductList(_user.id);
    let _recepies = await _productsContract.getRecepieList();
    setProductTypes(_productTypes);
    setProducts(_products);
    setRecepies(_recepies);
  }

  useEffect(() => {
    loadBlockChainData();
  }, []);

  async function addProduct(productDetails) {
    // console.log(productDetails);
    const product = {
      productTypeId: productDetails["productTypeId"],
      manufacturingDate: productDetails["manufacturingDate"],
      expirationDate: productDetails["expirationDate"],
      isBatch: true, //productDetails["isBatch"],
      batchCount: productDetails["batchCount"],
    };
    // console.log(product);

    await _supplyChainContract.addProduct(product);
  }

  async function createProduct(data) {
    await _supplyChainContract.createProduct(data["recepieId"]);
  }
  return (
    <div>
      <AddProductForm
        onSubmit={(e) => {
          addProduct(e);
        }}
        productTypes={productTypes}
      />
      <br />
      <CreateProductForm
        onSubmit={(e) => {
          createProduct(e);
        }}
        recepieList={recepies}
      />
      <br />
      <Typography gutterBottom variant="h5" component="div">
        {"My Product Stock"}
      </Typography>
      {/* <ProductsGrid products={products} /> */}
      <ProductTable items={products} />
    </div>
  );
}

export default MyStockPage;
