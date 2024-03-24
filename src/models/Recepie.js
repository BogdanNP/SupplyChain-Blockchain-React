export class Recepie {
  id = undefined;
  ingredients = undefined;
  ingredientsCount = undefined;
  quantityResult = undefined;
  resultTypeId = undefined;
  resultTypeName = undefined;

  constructor(recepie, ingredients) {
    this.id = recepie["id"].toNumber();
    this.ingredients = ingredients;
    this.ingredientsCount = recepie["ingredientsCount"].toNumber();
    this.quantityResult = recepie["quantityResult"].toNumber();
    this.resultTypeId = recepie["resultTypeId"].toNumber();
    this.resultTypeName = recepie["resultTypeName"];
  }
}
