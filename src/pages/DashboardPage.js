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
          "Ingrediente:" + productEvent["args"].parentProducts.join(", "),
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
      <h4> {"Actori inregistrati in sistem: " + usersCount}</h4>
      <p>
        Pagina de monitorizare, aici vor aparea fiecare modificare facuta in
        sistem.
      </p>
      <h4>Produse de baza</h4>
      <p>Aici vor aparea produsele de baza care au fost adaugate</p>
      <ProductEventTable items={products} />
      <br />
      <br />
      <h4>Produse compuse</h4>
      <p>Aici vor aparea produsele compuse care au fost adaugate</p>
      <ProductEventTable items={composedProducts} />
      <br />
      <h4>Transferuri intre utilizatori</h4>
      <p>Aici vor aparea transferurile de produse intre doi utilizatori</p>
      <TransferTable items={transfers} user={user} />
      <br />
      <h4>Produse blocate</h4>
      <p>Aici vor aparea produsele blocate si statusul blocarii lor</p>
      <ProductBlockEventTable items={blockedProducts} />
      <br />
      <h4>Tipuri de produse</h4>
      <p>Aici vor aparea tipurile de produse care au fost adaugate in sistem</p>
      <ProductTypeTable items={productTypes} />
      <br />
    </div>
  );
}

export default DashboardPage;
