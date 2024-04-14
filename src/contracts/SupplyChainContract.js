import {
  CONTRACT_ABI_SUPPLYCHAIN,
  CONTRACT_ADDRESS_SUPPLYCHAIN,
} from "../config";

import { ethers } from "ethers";

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
    await this.supplyChainContract.addProductType(productType);
  }

  async addProduct(productType) {
    await this.supplyChainContract.addProduct(productType);
  }

  async createProduct(recepieId) {
    await this.supplyChainContract.createProduct(recepieId);
  }

  async addUser(user) {
    await this.supplyChainContract.addUser(user);
  }

  async createSellRequest(buyerId, barcodeId, currentTime, quantity) {
    await this.supplyChainContract.createSellRequest(
      buyerId,
      barcodeId,
      currentTime,
      quantity
    );
  }
}

export default SupplyChainContract;
