import { CONTRACT_ABI_PRODUCTS, CONTRACT_ADDRESS_PRODUCTS } from "../config";

import { ethers } from "ethers";
import { Recepie } from "../models/Recepie";
import { RecepieIngredient } from "../models/RecepieIngredient";
import { ProductType } from "../models/ProductType";
import { Product } from "../models/Product";

class ProductsContract {
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

  async getProductEvents() {
    const productEvents = await this.productsContract.queryFilter("NewProduct");
    // TODO: maybe convert data to model?
    return productEvents.map((e) => e["args"]);
  }

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
        ingredients.push(new RecepieIngredient(ingredient));
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
    console.log("userId", userId);

    const productCounter = await this.productsContract.productCounter(userId);
    console.log("productCounter", productCounter.toNumber());

    // console.log("productCounter", productCounter.toNumber());

    let productList = [];
    for (let i = 0; i < productCounter; i++) {
      const userLinkedProduct = await this.productsContract.userLinkedProducts(
        userId,
        i
      );
      let product = await this.productsContract.products(userLinkedProduct);
      productList.push(new Product(product));
    }
    return productList;
  }

  async parentProducts(barcodeId) {
    const product = await this.productsContract.products(barcodeId);
    const productType = await this.productsContract.productTypes(
      product.productTypeId
    );
    const parentProducts = await this.productsContract.parentProducts(
      barcodeId.toString(),
      0
    );
    console.log("parentProducts", parentProducts);
  }
}

export default ProductsContract;
