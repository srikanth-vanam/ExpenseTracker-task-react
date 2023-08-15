import { useEffect, useState } from "react";
import ExpenseForm from "./Components/Expenseform/ExpenseForm";
import ProductsList from "./Components/Products-list/ProductList";

const App = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const saveDataHandler = (formdata) => {
    setProducts((prevFormdata) => {
      return [...prevFormdata, formdata];
    });
  };

  const deleteHandler = (id) => {
    const newProducts = products.filter((item) => {
      return item.productId !== id;
    });
    setProducts(newProducts);
  };

  // whenever the product array changes we are calculating count
  useEffect(() => {
    let sum = 0;
    products.forEach((item) => {
      sum += item.productPrice;
    });
    setCount(sum);
  }, [products]);

  return (
    <>
      <ExpenseForm onSaveData={saveDataHandler} />
      <ProductsList list={products} onDelete={deleteHandler} />
      <h4>total value of the products :{count}</h4>
    </>
  );
};
export default App;
