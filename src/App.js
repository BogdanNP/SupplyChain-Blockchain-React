import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Routes, Route, Link } from "react-router-dom";
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
import ConnectPage from "./pages/ConnectPage";
import ProfilePage from "./pages/ProfilePage";
import MyStockPage from "./pages/MyStockPage";
import ProductsPage from "./pages/ProductsPage";
import RecepiesPage from "./pages/RecepiesPage";
import DashboardPage from "./pages/DashboardPage";
import TrackingPage from "./pages/TrackingPage";
import CompaniesPage from "./pages/CompaniesPage";
import SellProductPage from "./pages/SellProductPage";

function App() {
  const [contractUsers, setContractUsers] = useState();

  var _productsContract = new ProductsContract();
  var _usersContract = new UsersContract();
  const _supplyChainContract = new SupplyChainContract();

  const navigate = useNavigate();

  async function loadBlockChainData() {
    // console.log(accounts);

    // const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    // const accounts = await web3.eth.getAccounts();
    // console.log(accounts);
    // setAccount(accounts[0]);

    // setContractProducts(productsContract);

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
    // console.log("productTypeEvents", productTypeEvents);

    const recepieEvents = await _productsContract.getRecepieEvents();
    // console.log("recepieEvents", recepieEvents);

    const recepieCounter = await _productsContract.getRecepieCounter();
    // console.log("recepieCounter", recepieCounter);
  }

  useEffect(() => {
    loadBlockChainData();
  }, []);

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
          <Button
            color="inherit"
            onClick={() => {
              navigate("/connect");
            }}
          >
            Connect
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Dashboard
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/profile");
            }}
          >
            Profile
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/companies");
            }}
          >
            Companies
          </Button>{" "}
          <Button
            color="inherit"
            onClick={() => {
              navigate("/my_stock");
            }}
          >
            MY STOCK
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/products");
            }}
          >
            Products
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/recepies");
            }}
          >
            Recepies
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/track");
            }}
          >
            Track
          </Button>{" "}
          <Button
            color="inherit"
            onClick={() => {
              navigate("/transfers");
            }}
          >
            Transfers
          </Button>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/my_stock" element={<MyStockPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/recepies" element={<RecepiesPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/track" element={<TrackingPage />} />
          <Route path="/transfers" element={<SellProductPage />} />
          <Route path="/transfers/:barcodeId" element={<SellProductPage />} />
          <Route
            path="/transfers/:barcodeId/:quantity"
            element={<SellProductPage />}
          />
          <Route path="*" element={<div>No Page</div>} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
