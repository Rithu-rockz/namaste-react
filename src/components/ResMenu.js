import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import ResMenuList from "./ResMenuList.js";

const ResMenu = () => {
  const { id } = useParams();
  const menuList = useRestaurantMenu(id);
  const [showIndex, setShowIndex] = useState(0);

  if (menuList === null) return <Shimmer />;
  console.log("menuList:", menuList);
  const {
    name,
    avgRating,
    cuisines,
    sla: { deliveryTime },
  } = menuList?.cards[2]?.card?.card?.info;
  // console.log({ avgRating, cuisines, deliveryTime });

  const { itemCards } =
    menuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  {
    /*menuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card ||
    menuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;*/
  }
  console.log(menuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    menuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);

  return (
    <div className=" ">
      <div className="">
        <h1 className="text-2xl my-2 font-bold text-center">{name}</h1>
      </div>
      <div className="flex items-center gap-10 p-4 m-auto w-5/12 bg-pink-50 border-gray-100 shadow-lg rounded-lg">
        <ul className="m-0 p-0 list-none text-lg">
          <li>🎉{avgRating}</li>
          <li className="underline decoration-red-500 text-red-800">
            {cuisines.join(",")}
          </li>
          <li>{deliveryTime}mins</li>
        </ul>
      </div>
      <div>
        <h1 className="text-xl my-4 font-bold text-center">🥣Menu🥣</h1>
        {categories.map((category, index) => (
          <ResMenuList
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ResMenu;
