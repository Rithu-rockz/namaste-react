import React from "react";
import { useState } from "react";
/* import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice.js"; */

const QuantityButton = ({ item, onHandleAddItem, onHandleRemoveItem }) => {
  const [quantity, setQuantity] = useState(item.quantity || 0);
  const handleAddItem = () => {
    /* dispatch(addItem(item)); */
    setQuantity((prevquantity) => prevquantity + 1);
    const updatedItem = {
      ...item,
      quantity: item.quantity ? item.quantity + 1 : 1,
    };
    onHandleAddItem(updatedItem);
  };
  const handleRemoveItem = () => {
    /* dispatch(removeItem(item)); */
    setQuantity((prevquantity) => prevquantity - 1);
    const updatedItem = {
      ...item,
      quantity: item.quantity ? item.quantity - 1 : 0,
    };
    onHandleRemoveItem(updatedItem);
  };
  return (
    <div className="flex items-center space-x-2">
      <button
        className="px-4 py-2 mx-auto bg-white text-black rounded-tl-lg rounded-bl-lg"
        onClick={handleAddItem}
      >
        +
      </button>
      <input
        type="text"
        className="px-4 py-2 mx-auto bg-white text-black w-12 text-center"
        value={quantity}
        readOnly
      />
      <button
        className="px-4 py-2 mx-auto bg-white text-black rounded-tr-lg rounded-br-lg"
        onClick={handleRemoveItem}
      >
        -
      </button>
    </div>
  );
};

export default QuantityButton;
