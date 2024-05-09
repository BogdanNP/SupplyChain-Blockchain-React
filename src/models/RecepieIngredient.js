import { ProductType } from "./ProductType";

export class RecepieIngredient {
  productQuantity = undefined;
  productTypeId = undefined;
  recepieId = undefined;
  productType = undefined;

  constructor(ingredient, productType) {
    //we should save name
    this.productQuantity = ingredient["productQuantity"].toNumber();
    this.productTypeId = ingredient["productTypeId"].toNumber();
    this.recepieId = ingredient["recepieId"].toNumber();
    this.productType = new ProductType(productType);
  }
}
