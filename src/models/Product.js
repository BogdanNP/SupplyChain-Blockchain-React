export class Product {
  name = undefined;
  productTypeId = undefined;
  barcodeId = undefined;
  manufacturerName = undefined;
  manufacturerId = undefined;
  manufacturingDate = undefined;
  expirationDate = undefined;
  quantity = undefined;

  constructor(product, quantity) {
    this.name = product.name;
    this.productTypeId = product.productTypeId?.toNumber();
    this.barcodeId = product.barcodeId;
    this.manufacturerName = product.manufacturerName;
    this.manufacturerId = product.manufacturerId;
    this.manufacturingDate = product.manufacturingDate;
    this.expirationDate = product.expirationDate;
    this.quantity = quantity ?? 0;
  }
}
