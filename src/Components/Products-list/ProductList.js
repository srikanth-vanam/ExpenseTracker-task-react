const ProductsList = (props) => {
  return (
    <ul>
    <h4>-- TotalProducts --</h4>
      {props.list.map((item) => (
        <>
          <li key={item.productId}>
            {item.productName}-{item.productPrice} { }
            <button  onClick={() =>props.onDelete(item.productId)}>Delete Product</button> 
          </li>
        </>
      ))}
    </ul>
  );
};

export default ProductsList;
