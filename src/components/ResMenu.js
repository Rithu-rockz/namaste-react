import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";

const ResMenu = () => {
  const { id } = useParams();
  const menuList = useRestaurantMenu(id);

  if (menuList === null) return <Shimmer />;
  const {
    name,
    avgRating,
    cuisines,
    sla: { deliveryTime },
  } = menuList?.cards[2]?.card?.card?.info;
  console.log({ avgRating, cuisines, deliveryTime });

  const { itemCards } =
    menuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card ||
    menuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  console.log("itemCards", itemCards);
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h1>{name}</h1>
      </div>
      <div className="menu-details">
        <ul className="menu-list">
          <li>{avgRating}</li>
          <li>{cuisines.join(",")}</li>
          <li>{deliveryTime}</li>
        </ul>
      </div>
      <div className="menu-list">
        <ul>
          {(itemCards || []).map((item) => (
            <li key={item.card.info.id}>
              <p>{item.card.info.name}</p>
              <p>{item.card.info.price / 100}</p>
              <p>{item.card.info.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResMenu;
