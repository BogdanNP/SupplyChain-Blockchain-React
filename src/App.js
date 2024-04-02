import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import { userRoleFromString } from "./UserRoles";
import "./App.css";
// import Web3 from "web3";

// contracts
import ProductsContract from "./contracts/ProductsContract";
import UsersContract from "./contracts/UsersContract";
import SupplyChainContract from "./contracts/SupplyChainContract";
// library coomponents
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
// pages
import ProfilePage from "./pages/ProfilePage";
import ProductsPage from "./pages/ProductsPage";
import DashboardPage from "./pages/DashboardPage";
import TrackingPage from "./pages/TrackingPage";
// components
import RecepieTable from "./RecepieTable";
import AddProductTypeForm from "./AddProductTypeForm";
import AddProductForm from "./AddProductForm";
import CreateProductForm from "./CreateProductForm";
import AddUserForm from "./AddUserForm";
import FindUserForm from "./FindUserForm";
import UserDetails from "./UserDetails";
import ProductTypeTable from "./ProductTypeTable";
/*
  How should things happen:
  * Connect => save user state
  * 
  * 
*/
function App() {
  const [contractUsers, setContractUsers] = useState();
  const [recepieList, setRecepieList] = useState([]);
  const [usersCount, setUsersCount] = useState(0);
  const [foundUser, setFoundUser] = useState();
  const [newProducts, setNewProducts] = useState([]);
  const [newProductTypes, setNewProductTypes] = useState([]);

  var _productsContract = new ProductsContract();
  var _usersContract = new UsersContract();
  const _supplyChainContract = new SupplyChainContract();

  const navigate = useNavigate();
  const goToProfile = () => {
    navigate("/profile");
  };

  async function loadBlockChainData() {
    // console.log(accounts);

    // const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    // const accounts = await web3.eth.getAccounts();
    // console.log(accounts);
    // setAccount(accounts[0]);

    // setContractProducts(productsContract);

    // const _usersCount = await _usersContract.getUsersCount();
    // .methods
    // .call();
    // setUsersCount(_usersCount);
    const _user = await _usersContract.getCurrentUser();
    // console.log("User:", _user);

    // contractUsers.events.NewUser({ fromBlock: 0 }).on("data", function (event) {
    //   console.log("EVENT:", event);
    // });
    // usersContract.on("NewUser", function (event) {
    //   console.log("EVENT:", event);
    // });

    // const NewUserEvent =
    //   usersContract.interface.events["NewUser(address,string,string,uint8)"];

    // const ev = usersContract.interface.getEvent("NewUser");
    // console.log("ev:", ev);
    // const logs = await _provider.getLogs({
    //   fromBlock: 0,
    //   toBlock: "latest",
    //   address: usersContract.address,
    //   topics: NewUserEvent.topics,
    // });

    // for (const log of logs) {
    //   // const logData = NewUserEvent.parse(log.topics, log.data);
    //   // console.log("Log:", logData);
    // }

    // const userEvents = await _usersContract.queryFilter("NewUser");
    // console.log(userEvents.map((e) => e.args));

    await loadProductsData(_user);
  }

  async function loadProductsData(_user) {
    const productTypeEvents = await _productsContract.getProductTypeList();
    setNewProductTypes(productTypeEvents);
    console.log("productTypeEvents", productTypeEvents);

    const productListEvents = await _productsContract.getProductEvents();

    const recepieEvents = await _productsContract.getRecepieEvents();
    console.log("recepieEvents", recepieEvents);

    const recepieCounter = await _productsContract.getRecepieCounter();
    console.log("recepieCounter", recepieCounter);

    const _recepieList = await _productsContract.getRecepieList();
    setRecepieList(_recepieList);
    // console.log("recepieList", _recepieList);
  }

  async function addProductType(productTypeDetails) {
    console.log(productTypeDetails);
    const productType = {
      name: productTypeDetails["name"],
      details: productTypeDetails["details"],
    };
    await _supplyChainContract.addProductType(productType);
  }
  async function addProduct(productDetails) {
    console.log(productDetails);
    const product = {
      productTypeId: productDetails["productTypeId"],
      manufacturingDate: productDetails["manufacturingDate"],
      expirationDate: productDetails["expirationDate"],
      isBatch: true, //productDetails["isBatch"],
      batchCount: productDetails["batchCount"],
    };
    console.log(product);

    await _supplyChainContract.addProduct(product);
  }
  async function createProduct(data) {
    console.log("createProductData", data);

    await _supplyChainContract.createProduct(data["recepieId"]);
  }

  async function addUser(userDetails) {
    console.log(userDetails);
    const newUser = {
      id: userDetails["address"],
      name: userDetails["name"],
      email: userDetails["email"],
      role: userRoleFromString(userDetails["role"]),
    };
    await _supplyChainContract.addUser(newUser);
  }

  async function findUser(userAddress) {
    const _address = userAddress["address"];
    const _foundUser = await contractUsers.users(_address);
    setFoundUser(_foundUser);
  }

  useEffect(() => {
    loadBlockChainData();
  }, []);

  let foundUserDetails;
  if (foundUser !== undefined) {
    foundUserDetails = <UserDetails user={foundUser} />;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit">Connect</Button>
          <Button color="inherit">Dashboard</Button>
          <Button color="inherit" onClick={goToProfile}>
            Profile
          </Button>
          <Button color="inherit">Companies</Button>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/products");
            }}
          >
            Products
          </Button>
          <Button color="inherit">Track</Button>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/track" element={<TrackingPage />} />
          <Route path="*" element={<div>No Page</div>} />
        </Routes>

        <p> {"Contract users: " + usersCount}</p>
        {/* <h4> {"Connected account: " + user.id}</h4> */}
        <AddUserForm
          onSubmit={(e) => {
            addUser(e);
          }}
        />
        <FindUserForm
          onSubmit={(e) => {
            findUser(e);
          }}
        />
        {foundUserDetails}
        <AddProductTypeForm
          onSubmit={(e) => {
            addProductType(e);
          }}
        />
        <AddProductForm
          onSubmit={(e) => {
            addProduct(e);
          }}
        />
        <CreateProductForm
          onSubmit={(e) => {
            createProduct(e);
          }}
          recepieList={recepieList}
        />
        <ProductTypeTable items={newProductTypes} />
        <RecepieTable items={recepieList} />
      </Box>
    </Box>
  );
}

export default App;
