import React from "react";
//import { CDN_URL } from "../utils/constants.js";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-0 border-b-2 text-left flex justify-between"
        >
          <div className="font-semibold w-9/12">
            <span>{item?.card?.info?.name}</span>
            <span> - ₹{item?.card?.info?.price / 100}</span>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button className="px-4 py-2 rounded mx-auto bg-blue-500 text-white">Add</button>
            </div>
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${item?.card?.info?.imageId}`}
              className="w-full rounded-lg p-2"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
