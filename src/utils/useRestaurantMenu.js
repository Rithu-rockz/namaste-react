import React from "react";
import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "./mockData.js";

const useRestaurantMenu = (id) => {
  const [menuList, setMenuList] = useState(null);
  useEffect(() => {
    fetchMenuData();
  }, []);
  const fetchMenuData = () => {
    setMenuList(RESTAURANT_MENU?.data);
  };
  return menuList;
};

export default useRestaurantMenu;
