function ProductTable(props) {
  if (props.items === undefined) {
    return <div></div>;
  }

  return (
    <div className="ProductTable">
      <h4>Product Table</h4>
      <table>
        <thead>
          <tr>
            <th>Barcode</th>
            <th>Product Name</th>
            <th>Product Type Id</th>
            <th>Manufacturer Name</th>
            <th>Manufacturer Id</th>
            <th>Is batch</th>
            <th>Batch Count</th>
            <th>Man. Date</th>
            <th>Exp. Date</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item) => (
            <tr key={item.barcodeId}>
              <td>{item.barcodeId}</td>
              <td>{item.name}</td>
              <td>{item.productTypeId}</td>
              <td>{item.manufacturerName}</td>
              <td>{item.manufacturerId}</td>
              <td>{item.isBatch}</td>
              <td>{item.batchCount}</td>
              <td>{item.manufacturingDate.toString()}</td>
              <td>{item.expirationDate.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
