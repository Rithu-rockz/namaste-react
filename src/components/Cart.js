import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatchCart = useDispatch();
  const handleClearCart = () => {
    dispatchCart(clearCart());
  };
  return (
    <div className="text-center m-4 p-2">
      <h1 className="font-bold text-2xl">Cart</h1>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded-lg m-4"
        onClick={handleClearCart}

      >
        Clear cart
      </button>
      {cartItems.length === 0 && (
        <h1 className="font-bold text-xl">Cart is empty!!</h1>
      )}
      <div className="w-6/12 mx-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
