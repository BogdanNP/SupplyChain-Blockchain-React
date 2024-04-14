export class ComposedProductEvent {
  name = undefined;
  barcodeId = undefined;
  manufacturerName = undefined;
  manDateEpoch = undefined;
  expDateEpoch = undefined;
  parentProducts = undefined;

  constructor(product) {
    this.name = product.name;
    this.barcodeId = product.barcodeId;
    this.manufacturerName = product.manufacturerName;
    this.manDateEpoch = product.manDateEpoch;
    this.expDateEpoch = product.expDateEpoch;
    this.parentProducts = product.parentProducts;
  }
}
