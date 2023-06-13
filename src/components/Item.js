import React, { useState } from "react";

function Item({ name, category }) {


  const [isCart, setIsCart] = useState(false)

  function handleClick(){
    setIsCart((isCart) => !isCart)
  }

  const cart = isCart ? "in-cart" : ""
  const buttonText = isCart ? "Remove From Cart" : "Add to Cart"

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;
