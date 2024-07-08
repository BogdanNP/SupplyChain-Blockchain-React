import { ProductType } from "./ProductType";

export class RecipeIngredient {
  productQuantity = undefined;
  productTypeId = undefined;
  recipeId = undefined;
  productType = undefined;

  constructor(ingredient, productType) {
    //we should save name
    this.productQuantity = ingredient["productQuantity"].toNumber();
    this.productTypeId = ingredient["productTypeId"].toNumber();
    this.recipeId = ingredient["recipeId"].toNumber();
    this.productType = new ProductType(productType);
  }
}
