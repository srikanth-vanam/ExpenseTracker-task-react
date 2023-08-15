import { useState } from "react";

const ExpenseForm = (props) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPricec] = useState("");
  const idHandler = (event) => {
    setId(event.target.value);
  };
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const priceHandler = (e) => {
    setPrice(e.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const formdata = {
      productId: id,
      productName: name,
      productPrice: +price,
    };
    props.onSaveData(formdata);
    setId('');
    setName('')
    setPrice('')
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <label>Product Id</label>
        <input type="number" min={1} value={id} onChange={idHandler}></input>
        <label>Product price</label>
        <input type="number" value={price} onChange={priceHandler}></input>
        <label>Product name</label>
        <input type="text" value={name} onChange={nameHandler}></input>
        <button>Add Product</button>
      </form>
    </>
  );
};

export default ExpenseForm;
