export class Recipe {
  id = undefined;
  ingredients = undefined;
  ingredientsCount = undefined;
  quantityResult = undefined;
  resultTypeId = undefined;
  resultTypeName = undefined;

  constructor(recipe, ingredients) {
    this.id = recipe["id"].toNumber();
    this.ingredients = ingredients;
    this.ingredientsCount = recipe["ingredientsCount"].toNumber();
    this.quantityResult = recipe["quantityResult"].toNumber();
    this.resultTypeId = recipe["resultTypeId"].toNumber();
    this.resultTypeName = recipe["resultTypeName"];
  }
}
