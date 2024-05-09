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
      await this.supplyChainContract.addProductType(productType);
    } catch (error) {
      console.error(error);
      const contractError = decodeError(error);
      alert(contractError.error);
    }
  }

  async addProduct(productType) {
    try {
      await this.supplyChainContract.addProduct(productType);
    } catch (error) {
      console.error(error);
      const contractError = decodeError(error);
      alert(contractError.error);
    }
  }

  async createProduct(recepieId) {
    try {
      await this.supplyChainContract.createProduct(recepieId);
    } catch (error) {
      console.error(error);
      const contractError = decodeError(error);
      alert(contractError.error);
    }
  }

  async addUser(user) {
    try {
      await this.supplyChainContract.addUser(user);
    } catch (error) {
      console.error(error);
      const contractError = decodeError(error);
      alert(contractError.error);
    }
  }

  async createSellRequest(buyerId, barcodeId, currentTime, quantity) {
    try {
      await this.supplyChainContract.createSellRequest(
        buyerId,
        barcodeId,
        currentTime,
        quantity
      );
    } catch (error) {
      console.error(error);
      const contractError = decodeError(error);
      alert(contractError.error);
    }
  }
}

export default SupplyChainContract;
