import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import ProductsContract from "../contracts/ProductsContract";
import UsersContract from "../contracts/UsersContract";
import SupplyChainContract from "../contracts/SupplyChainContract";
import ProductTable from "../components/ProductTable";
import CreateProductForm from "../components/CreateProductForm";
import AddProductForm from "../components/AddProductForm";
import TransactionSnackbar from "../components/TransactionSnackbar";
import { UserRoles } from "../models/UserRoles";
import { useNavigate } from "react-router-dom";

function MyStockPage() {
  const _productsContract = new ProductsContract();
  const _usersContract = new UsersContract();
  const _supplyChainContract = new SupplyChainContract();
  const [productTypes, setProductTypes] = useState();
  const [products, setProducts] = useState();
  const [recipes, setRecipes] = useState();
  const [user, setUser] = useState();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [txReceipt, setTxReceipt] = useState(undefined);
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const navigate = useNavigate();

  async function loadBlockChainData() {
    const _user = await _usersContract.getCurrentUser();
    if (_user === undefined) {
      navigate("/connect");
    } else {
      console.log("user", _user);
      setUser(_user);

      const _productTypes = await _productsContract.getProductTypeList();
      setProductTypes(_productTypes);

      const _products = await _productsContract.getProductList(_user.id);
      setProducts(_products);

      const _recipes = await _productsContract.getRecipeList();
      setRecipes(_recipes);
    }
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

    //TODO: add this everywhere for reloading :D
    const _txReceipt = await _supplyChainContract.addProduct(product);
    setTxReceipt(_txReceipt);
    if (_txReceipt !== undefined) {
      const _products = await _productsContract.getProductList(user.id);
      setProducts(_products);
      setOpenSnackbar(true);
    }
  }

  async function createProduct(data) {
    const _txReceipt = await _supplyChainContract.createProduct(
      data["recipeId"]
    );
    setTxReceipt(_txReceipt);
    if (_txReceipt !== undefined) {
      const _products = await _productsContract.getProductList(user.id);
      setProducts(_products);
      setOpenSnackbar(true);
    }
  }

  let addProductSection;
  if (user?.role === UserRoles.Manufacturer) {
    addProductSection = (
      <div>
        {" "}
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
          recipeList={recipes}
        />
      </div>
    );
  }

  return (
    <div>
      {addProductSection}
      <br />
      <Typography gutterBottom variant="h5" component="div">
        {"Stocul de produse"}
      </Typography>
      <p>Aici sunt afisate produsele disponibile in stoc</p>
      <ProductTable items={products} />
      <TransactionSnackbar
        openSnackbar={openSnackbar}
        handleCloseSnackbar={handleCloseSnackbar}
        txReceipt={txReceipt}
      />
    </div>
  );
}

export default MyStockPage;
