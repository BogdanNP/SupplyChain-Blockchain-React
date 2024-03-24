export class RecepieIngredient {
  productQuantity = undefined;
  productTypeId = undefined;
  recepieId = undefined;

  constructor(ingredient) {
    this.productQuantity = ingredient["productQuantity"].toNumber();
    this.productTypeId = ingredient["productTypeId"].toNumber();
    this.recepieId = ingredient["recepieId"].toNumber();
  }
}
