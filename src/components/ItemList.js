import React from "react";
//import { CDN_URL } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice.js";
import QuantityButton from "./QuantityButton.js";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          //key={item?.card?.info?.id + index}
          key={`${item?.card?.info?.id ?? "unknown"}-${index}`}
          className="p-2 m-0 border-b-2 text-left flex justify-between"
        >
          <div className="font-semibold w-9/12">
            <span>{item?.card?.info?.name}</span>
            <span> - ₹{item?.card?.info?.price / 100}</span>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 relative">
            <div className="absolute bottom-[10px] left-[24px] shadow-2xs">
              <QuantityButton
                item={item}
                onHandleAddItem={handleAddItem}
                onHandleRemoveItem={handleRemoveItem}
              />
            </div>
            <img
              src={
                item?.card?.info?.imageId
                  ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${item?.card?.info?.imageId}`
                  : "/default-image.jpg"
              }
              className="w-full rounded-lg p-2"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
