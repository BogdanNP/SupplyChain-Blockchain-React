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
  const [user, setUser] = useState(undefined);

  async function loadBlockChainData() {
    let _user;
    _user = await _usersContract.getCurrentUser();
    if (_user === undefined) {
      setUser(undefined);
    } else {
      setUser(_user);
    }
  }

  useEffect(() => {
    loadBlockChainData();
  }, []);
  let profileButton;
  let transfersButton;
  let myStockButton;
  let connectButton;
  if (user !== undefined) {
    profileButton = (
      <Button
        color="inherit"
        onClick={() => {
          navigate("/profile");
        }}
      >
        Profile
      </Button>
    );
    transfersButton = (
      <Button
        color="inherit"
        onClick={() => {
          navigate("/transfers");
        }}
      >
        Transfers
      </Button>
    );
    myStockButton = (
      <Button
        color="inherit"
        onClick={() => {
          navigate("/my_stock");
        }}
      >
        MY STOCK
      </Button>
    );
  } else {
    connectButton = (
      <Button
        color="inherit"
        onClick={() => {
          navigate("/connect");
        }}
      >
        Connect
      </Button>
    );
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
          {connectButton}
          <Button
            color="inherit"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Dashboard
          </Button>
          {profileButton}
          <Button
            color="inherit"
            onClick={() => {
              navigate("/companies");
            }}
          >
            Companies
          </Button>{" "}
          {myStockButton}
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
          {transfersButton}
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
