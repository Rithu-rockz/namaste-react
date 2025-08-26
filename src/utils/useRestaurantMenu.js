import React from "react";
import { useEffect, useState } from "react";
import { MENU_API } from "./constants.js";

const useRestaurantMenu = (id) => {
  const [menuList, setMenuList] = useState(null);
  useEffect(() => {
    fetchMenuData();
  }, []);
  const fetchMenuData = async () => {
    const res = await fetch(MENU_API + id);
    const json = await res.json();
    console.log(json);
    setMenuList(json?.data);
  };
  return menuList;
};

export default useRestaurantMenu;
