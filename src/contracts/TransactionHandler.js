class TransactionHandler {
  async handleTransaction(transaction) {
    console.log("transaction: ", transaction);
    const transactionReceipt = await transaction.wait();
    console.log("transactionReceipt: ", transactionReceipt);
  }
}
