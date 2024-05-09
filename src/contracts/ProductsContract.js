import { CONTRACT_ABI_PRODUCTS, CONTRACT_ADDRESS_PRODUCTS } from "../config";

import { ethers } from "ethers";
import { Recepie } from "../models/Recepie";
import { RecepieIngredient } from "../models/RecepieIngredient";
import { ProductType } from "../models/ProductType";
import { Product } from "../models/Product";
import { ComposedProductEvent } from "../models/ComposedProductEvent";

class ProductsContract {
  // TODO: handle errors !!!
  // Maybe add UIModel??? Data, Loading, Error ???
  constructor() {
    const _provider = new ethers.providers.Web3Provider(window.ethereum);
    this.productsContract = new ethers.Contract(
      CONTRACT_ADDRESS_PRODUCTS,
      CONTRACT_ABI_PRODUCTS,
      _provider.getSigner(0)
    );
  }

  async getProductTypeEvents() {
    const productTypeEvents = await this.productsContract.queryFilter(
      "NewProductType"
    );
    // TODO: maybe convert data to model?
    return productTypeEvents.map((e) => e["args"]);
  }

  async getComposedProductEvents() {
    const productEvents = await this.productsContract.queryFilter(
      "ComposedProduct"
    );
    return productEvents.map((e) => new ComposedProductEvent(e["args"]));
  }

  async trackComposedProductEvents(barcodeId) {}

  async getRecepieEvents() {
    const recepieEvents = await this.productsContract.queryFilter("NewRecepie");
    // TODO: maybe convert data to model?
    return recepieEvents.map((e) => e["args"]);
  }

  async getRecepieCounter() {
    return (await this.productsContract.recepieCounter()).toNumber();
  }

  async getRecepieList() {
    let recepies = [];
    const recepieCounter = await this.productsContract.recepieCounter();
    for (let i = 0; i < recepieCounter.toNumber(); i++) {
      let recepie = await this.productsContract.recepies(i);
      let ingredients = [];
      for (let j = 0; j < recepie.ingredientsCount.toNumber(); ++j) {
        let ingredient = await this.productsContract.recepieIngredients(i, j);
        let productType = await this.productsContract.productTypes(
          ingredient.productTypeId
        );
        ingredients.push(new RecepieIngredient(ingredient, productType));
      }
      recepies.push(new Recepie(recepie, ingredients));
    }
    return recepies;
  }

  async getProductTypeList() {
    const productTypeCounter = await this.productsContract.productTypeCounter();
    let productTypeList = [];
    for (let i = 0; i < productTypeCounter.toNumber(); i++) {
      let productType = await this.productsContract.productTypes(i);
      productTypeList.push(new ProductType(productType));
    }
    return productTypeList;
  }

  async getProductList(userId) {
    const stockItemCounter = await this.productsContract.stockItemCounter(
      userId
    );
    console.log("stockItemCounter", stockItemCounter.toNumber());
    let productList = [];
    for (let i = 0; i < stockItemCounter.toNumber(); i++) {
      const userLinkedStockItem =
        await this.productsContract.userLinkedStockItems(userId, i);
      let product = await this.productsContract.products(
        userLinkedStockItem.barcodeId.toString() ?? ""
      );
      productList.push(
        new Product(product, userLinkedStockItem?.quantity.toNumber())
      );
    }
    return productList;
  }

  async getProduct(barcodeId) {
    const product = await this.productsContract.products(barcodeId);
    return product;
  }

  async trackProduct(barcodeId) {
    const product = await this.getProduct(barcodeId);
    const parentProducts = await this.parentProducts(barcodeId);
    return { product: product, parents: parentProducts };
  }

  async parentProducts(barcodeId) {
    const product = await this.productsContract.products(barcodeId);
    const ingredientsCount = product.ingredientsCount;
    var parentProductList = [];
    for (var i = 0; i < ingredientsCount; ++i) {
      const _parentBarcode = await this.productsContract.parentProducts(
        barcodeId.toString(),
        i
      );
      const _parentProducts = await this.parentProducts(_parentBarcode);
      const _product = await this.productsContract.products(_parentBarcode);
      parentProductList.push({
        product: new Product(_product),
        parents: _parentProducts,
      });
    }
    return parentProductList;
  }

  async requestTransfer(barcodeId, quantity, receiver) {
    await this.productsContract.requestTransfer(barcodeId, quantity, receiver);
  }

  async transfers() {
    const transferCount = await this.productsContract.transferCount();
    var transferList = [];
    for (let i = 0; i < transferCount.toNumber(); ++i) {
      const transfer = await this.productsContract.transfers(0);
      transferList.push(transfer);
    }
    return transferList;
  }

  async accountTransfers(id) {
    const accountTransferCount =
      await this.productsContract.accountTransferCount(id);
    var transferList = [];
    for (let i = 0; i < accountTransferCount.toNumber(); ++i) {
      const transferId = await this.productsContract.accountTransfers(id, i);
      const transfer = await this.productsContract.transfers(transferId);
      transferList.push(transfer);
    }
    return transferList;
  }

  async acceptTransfer(transferId) {
    await this.productsContract.acceptTransfer(transferId);
  }

  async refuseTransfer(transferId) {
    await this.productsContract.refuseTransfer(transferId);
  }

  async getTransferStatus(transferId) {
    await this.productsContract.getTransferStatus(transferId);
  }
}

export default ProductsContract;
