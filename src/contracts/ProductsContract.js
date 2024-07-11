import { CONTRACT_ABI_PRODUCTS, CONTRACT_ADDRESS_PRODUCTS } from "../config";

import { ethers } from "ethers";
import { decodeError } from "ethers-decode-error";
import { Recipe } from "../models/Recipe";
import { RecipeIngredient } from "../models/RecipeIngredient";
import { ProductType } from "../models/ProductType";
import { Product } from "../models/Product";

class ProductsContract {
  constructor() {
    this._provider = new ethers.providers.Web3Provider(window.ethereum);
    this.productsContract = new ethers.Contract(
      CONTRACT_ADDRESS_PRODUCTS,
      CONTRACT_ABI_PRODUCTS,
      this._provider.getSigner(0)
    );
  }

  async getProductEvents() {
    try {
      const productEvents = await this.productsContract.queryFilter(
        "NewProduct"
      );
      return productEvents;
    } catch (error) {
      // console.error(error);
      // const contractError = decodeError(error);
      // alert(contractError.error);
    }
  }

  async getComposedProductEvents() {
    try {
      const productEvents = await this.productsContract.queryFilter(
        "ComposedProduct"
      );
      return productEvents;
    } catch (error) {
      // console.error(error);
      // const contractError = decodeError(error);
      // alert(contractError.error);
    }
  }

  async getBlockedProductEvents() {
    try {
      const productEvents = await this.productsContract.queryFilter(
        "BlockedProduct"
      );
      return productEvents;
    } catch (error) {
      // console.error(error);
      // const contractError = decodeError(error);
      // alert(contractError.error);
    }
  }

  async getProductTypeEvents() {
    try {
      const productTypeEvents = await this.productsContract.queryFilter(
        "NewProductType"
      );
      return productTypeEvents;
    } catch (error) {
      // console.error(error);
      // const contractError = decodeError(error);
      // alert(contractError.error);
    }
  }

  async getRecipeEvents() {
    try {
      const recipeEvents = await this.productsContract.queryFilter("NewRecipe");
      return recipeEvents.map((e) => e["args"]);
    } catch (error) {
      // console.error(error);
      // const contractError = decodeError(error);
      // alert(contractError.error);
    }
  }

  async getObjectTransferredEvents() {
    try {
      const objectTransferredEvents = await this.productsContract.queryFilter(
        "ObjectTransferred"
      );
      return objectTransferredEvents;
    } catch (error) {
      // console.error(error);
      // const contractError = decodeError(error);
      // alert(contractError.error);
    }
  }

  async getRecipeCounter() {
    try {
      return (await this.productsContract.recipeCounter()).toNumber();
    } catch (error) {
      // console.error(error);
      // const contractError = decodeError(error);
      // alert(contractError.error);
    }
  }

  async getRecipeList() {
    try {
      let recipes = [];
      const recipeCounter = await this.productsContract.recipeCounter();
      for (let i = 0; i < recipeCounter.toNumber(); i++) {
        let recipe = await this.productsContract.recipes(i);
        let ingredients = [];
        for (let j = 0; j < recipe.ingredientsCount.toNumber(); ++j) {
          let ingredient = await this.productsContract.recipeIngredients(i, j);
          let productType = await this.productsContract.productTypes(
            ingredient.productTypeId
          );
          ingredients.push(new RecipeIngredient(ingredient, productType));
        }
        recipes.push(new Recipe(recipe, ingredients));
      }
      return recipes;
    } catch (error) {
      // console.error(error);
      // const contractError = decodeError(error);
      // alert(contractError.error);
    }
  }

  async getProductTypeList() {
    try {
      const productTypeCounter =
        await this.productsContract.productTypeCounter();
      let productTypeList = [];
      for (let i = 0; i < productTypeCounter.toNumber(); i++) {
        let productType = await this.productsContract.productTypes(i);
        productTypeList.push(new ProductType(productType));
      }
      return productTypeList;
    } catch (error) {
      // console.error(error);
      // const contractError = decodeError(error);
      // alert(contractError.error);
    }
  }

  async getProductList(userId) {
    try {
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
      productList.sort((a, b) => {
        if (a.quantity === 0) {
          return 1;
        }
        if (b.quantity === 0) {
          return -1;
        }
        return 0;
      });
      return productList;
    } catch (error) {
      // console.error(error);
      // const contractError = decodeError(error);
      // alert(contractError.error);
    }
  }

  async getProduct(barcodeId) {
    try {
      const product = await this.productsContract.products(barcodeId);
      return product;
    } catch (error) {
      // console.error(error);
      // const contractError = decodeError(error);
      // alert(contractError.error);
    }
  }

  async trackProduct(barcodeId) {
    try {
      const product = await this.getProduct(barcodeId);
      const parentProducts = await this.parentProducts(barcodeId);
      return { product: product, parents: parentProducts };
    } catch (error) {
      // console.error(error);
      // const contractError = decodeError(error);
      // alert(contractError.error);
    }
  }

  async parentProducts(barcodeId) {
    try {
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
    } catch (error) {
      // console.error(error);
      // const contractError = decodeError(error);
      // alert(contractError.error);
    }
  }

  async accountTransfers(id) {
    try {
      const accountTransferCount =
        await this.productsContract.accountTransferCount(id);
      var transferList = [];
      for (let i = 0; i < accountTransferCount.toNumber(); ++i) {
        const transferId = await this.productsContract.accountTransfers(id, i);
        const transfer = await this.productsContract.transfers(transferId);
        transferList.push(transfer);
      }
      return transferList;
    } catch (error) {
      // console.error(error);
      // const contractError = decodeError(error);
      // alert(contractError.error);
    }
  }

  async requestTransfer(barcodeId, quantity, receiver) {
    try {
      await this.product.product;
      return await this.productsContract.requestTransfer(
        barcodeId,
        quantity,
        receiver
      );
    } catch (error) {
      // console.error(error);
      // const contractError = decodeError(error);
      // alert(contractError.error);
    }
  }

  async acceptTransfer(transferId) {
    try {
      await this.productsContract.acceptTransfer(transferId);
    } catch (error) {
      // console.error(error);
      // const contractError = decodeError(error);
      alert("Transferul nu poate fi realizat, produsul nu este disponibil");
    }
  }

  async refuseTransfer(transferId) {
    try {
      await this.productsContract.refuseTransfer(transferId);
    } catch (error) {
      // console.error(error);
      // const contractError = decodeError(error);
      // alert(contractError.error);
    }
  }

  async cancelTransfer(transferId) {
    try {
      await this.productsContract.refuseTransfer(transferId);
    } catch (error) {
      // console.error(error);
      // const contractError = decodeError(error);
      // alert(contractError.error);
    }
  }

  async getTransferStatus(transferId) {
    try {
      await this.productsContract.getTransferStatus(transferId);
    } catch (error) {
      // console.error(error);
      // const contractError = decodeError(error);
      // alert(contractError.error);
    }
  }
}

export default ProductsContract;
