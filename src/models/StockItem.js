export class StockItem {
  barcodeId = undefined;
  quantity = undefined;

  constructor(stockItem) {
    this.barcodeId = stockItem.barcodeId;
    this.quantity = stockItem.quantity;
  }
}
