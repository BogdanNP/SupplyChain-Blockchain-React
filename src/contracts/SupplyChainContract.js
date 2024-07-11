import {
  CONTRACT_ABI_SUPPLYCHAIN,
  CONTRACT_ADDRESS_SUPPLYCHAIN,
} from "../config";
import { ethers } from "ethers";
import { decodeError } from "ethers-decode-error";

class SupplyChainContract {
  constructor() {
    const _provider = new ethers.providers.Web3Provider(window.ethereum);
    this.supplyChainContract = new ethers.Contract(
      CONTRACT_ADDRESS_SUPPLYCHAIN,
      CONTRACT_ABI_SUPPLYCHAIN,
      _provider.getSigner(0)
    );
  }

  async addProductType(productType) {
    try {
      const tx = await this.supplyChainContract.addProductType(productType);
      return this.handleTransaction(tx);
    } catch (error) {
      // console.error(error);
      // const contractError = decodeError(error);
      // alert(contractError.error);
    }
  }

  async addProduct(product) {
    try {
      const tx = await this.supplyChainContract.addProduct(product);
      return this.handleTransaction(tx);
    } catch (error) {
      // console.error(error);
      // const contractError = decodeError(error);
      // alert(contractError.error);
    }
  }

  async createProduct(recipeId) {
    try {
      const tx = await this.supplyChainContract.createProduct(recipeId);
      return this.handleTransaction(tx);
    } catch (error) {
      const contractError = decodeError(error);
      if (contractError.error.includes("There are not enough ingredients")) {
        alert(
          "Nu sunt suficiente ingrediente in stoc pentru a realiza aceasta reteta."
        );
      }
    }
  }

  async addUser(user) {
    try {
      const tx = await this.supplyChainContract.addUser(user);
      return this.handleTransaction(tx);
    } catch (error) {
      // console.error(error);
      // const contractError = decodeError(error);
      // alert(contractError.error);
    }
  }

  async blockProduct(barcodeId) {
    try {
      const tx = await this.supplyChainContract.blockProduct(barcodeId, true);
      return tx;
    } catch (error) {
      const contractError = decodeError(error);
      if (contractError.error.includes("Product does not exist")) {
        alert("Produsul cu codul de bare " + barcodeId + " nu exista!");
      }
    }
  }

  async createSellRequest(buyerId, barcodeId, currentTime, quantity) {
    try {
      const tx = await this.supplyChainContract.createSellRequest(
        buyerId,
        barcodeId,
        currentTime,
        quantity
      );
      return this.handleTransaction(tx);
    } catch (error) {
      console.error(error);
    }
  }

  async handleTransaction(transaction) {
    // console.log("transaction: ", transaction);
    const transactionReceipt = await transaction.wait();
    // console.log("transactionReceipt: ", transactionReceipt);
    if (transactionReceipt.status === 1) {
      return transactionReceipt;
    }
    return undefined;
  }
}

export default SupplyChainContract;
