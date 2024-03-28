export class RecepieIngredient {
  productQuantity = undefined;
  productTypeId = undefined;
  recepieId = undefined;

  constructor(ingredient) {
    //we should save name
    this.productQuantity = ingredient["productQuantity"].toNumber();
    this.productTypeId = ingredient["productTypeId"].toNumber();
    this.recepieId = ingredient["recepieId"].toNumber();
  }
}
