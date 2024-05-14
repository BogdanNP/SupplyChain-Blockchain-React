function ProductTypeTable(props) {
  if (props.items === undefined) {
    return <div></div>;
  }

  return (
    <div className="ProductTypeTable">
      <h4>Product Type Table</h4>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item) => (
            <tr key={item.id}>
              <td>{item.id.toString()}</td>
              <td>{item.name}</td>
              <td>{item.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTypeTable;
