export class ProductType {
  id = undefined;
  name = undefined;
  details = undefined;

  constructor(productType) {
    this.id = productType.id.toNumber();
    this.name = productType.name;
    this.details = productType.details;
  }
}
