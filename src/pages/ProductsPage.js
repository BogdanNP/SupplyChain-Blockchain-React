import { useState, useEffect } from "react";
import ProductTypeTable from "../components/ProductTypeTable";
import ProductsContract from "../contracts/ProductsContract";
import AddProductTypeForm from "../components/AddProductTypeForm";
import SupplyChainContract from "../contracts/SupplyChainContract";
import UsersContract from "../contracts/UsersContract";
import { UserRoles } from "../models/UserRoles";

function ProductsPage() {
  const _supplyChainContract = new SupplyChainContract();
  const _productsContract = new ProductsContract();
  const _usersContract = new UsersContract();
  const [productTypes, setProductTypes] = useState();
  const [user, setUser] = useState(undefined);

  async function loadBlockChainData() {
    const _productTypes = await _productsContract.getProductTypeList();
    const _user = await _usersContract.getCurrentUser();
    if (_user === undefined) {
      setUser(undefined);
    } else {
      setUser(_user);
    }
    setProductTypes(_productTypes);
  }

  async function addProductType(productTypeDetails) {
    const productType = {
      name: productTypeDetails["name"],
      details: productTypeDetails["details"],
    };
    await _supplyChainContract.addProductType(productType);
  }

  useEffect(() => {
    loadBlockChainData();
  }, []);

  let addProductTypeForm;
  if (user !== undefined) {
    if (user.role === UserRoles.Admin) {
      addProductTypeForm = (
        <AddProductTypeForm
          onSubmit={(e) => {
            addProductType(e);
          }}
        />
      );
    }
  }

  return (
    <div>
      {addProductTypeForm}
      <br />
      <h4> Tabelul cu tipuri de produse</h4>
      <p>
        {" "}
        Aici sunt afisate toate tipurile disponibile in sistem, acestea sunt
        utilizate in crearea de produse.
      </p>
      <ProductTypeTable items={productTypes} />
    </div>
  );
}

export default ProductsPage;
