import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  //const mergedCartItemsById = (items) => {    const map = new Map();    for (const item of items) {      const id = item.card.info.id;      const price = item.card.info.price / 100;  if (map.has(id)) {
  //map.get(item.card.info.id).quantity += item.quantity;      } else {        map.set(item.card.info.id, {          ...item,          total: (item.card.info.price / 100) * item.quantity,        }); // clone to avoid mutation      }}
  //return Array.from(map.values()); // };

  const mergedCartItemsById = (items) => {
    const map = new Map();

    for (const item of items) {
      const id = item.card.info.id;
      const price = item.card.info.price / 100;
      // Simply overwrite instead of adding up
      map.set(id, {
        ...item,
        total: price * item.quantity,
      });
    }

    return Array.from(map.values());
  };

  const cartItems = useSelector((store) =>
    mergedCartItemsById(store.cart.items)
  );

  const dispatchCart = useDispatch();
  const handleClearCart = () => {
    dispatchCart(clearCart());
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.total, 0);
  const taxAmount = (totalAmount * 0.05).toFixed(2);
  const billAmount = (totalAmount + parseFloat(taxAmount)).toFixed(2);
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
      {cartItems.length > 0 && (
        <div className="flex gap-2">
          <div className="w-6/12 mx-auto">
            <ItemList items={cartItems} />
          </div>
          <div className="w-6/12 mx-auto">
            <h2>Summary</h2>
            <ul>
              {cartItems.map((item, index) => (
                <li
                  key={`${item?.card?.info?.id ?? "unknown"}-${index}`}
                  className="flex border-b-1 p-2 mb-2"
                >
                  <div className="flex justify-between w-full">
                    <p className="w-[350px] text-left">
                      {item?.card?.info?.name}
                    </p>
                    <p>x {item?.quantity}</p>
                    <p>{item?.total}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex">
              <div>Total Amount:</div>
              <div className="ml-auto font-bold">₹{totalAmount}</div>
            </div>
            <div className="flex">
              <div>Tax:</div>
              <div className="ml-auto font-bold">₹{taxAmount}</div>
            </div>
            <div className="flex">
              <div>Bill Amount:</div>
              <div className="ml-auto font-bold">₹{billAmount}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
