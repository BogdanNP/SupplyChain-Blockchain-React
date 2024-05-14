function RecepieTable(props) {
  if (props.items === undefined) {
    return <div></div>;
  }

  return (
    <div className="RecepieTable">
      <h4>Recepie Table</h4>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Result Type Id</th>
            <th>Result Name</th>
            <th>Result Quantity</th>
            <th>Ingredients Count</th>
            <th>Ingredients</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item) => (
            <tr key={item.id}>
              <td>{item.id.toString()}</td>
              <td>{item.resultTypeId}</td>
              <td>{item.resultTypeName}</td>
              <td>{item.quantityResult}</td>
              <td>{item.ingredientsCount}</td>
              <td>
                {item.ingredients.map((i) => (
                  <div key={i.productTypeId}>
                    PTI: {i.productTypeId} PTQ: {i.productQuantity}{" "}
                  </div>

                  //   <table>
                  //     <tr></tr>
                  //     <tr>{i.productQuantity}</tr>
                  //   </table>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecepieTable;
