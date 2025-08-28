import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST_API } from "../utils/constants.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST_API);
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (<h1>Offline, Please check your internet connection!!</h1>);

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center">
        <div className="search-container">
          <input className=" border-1  m-4 p-2"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="p-2 m-2 bg-blue-500 text-white rounded-lg"
            onClick={() => {
              const filteredres = listOfRestaurant.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredres);
            }}
          >
            Search
          </button>
        </div>
        <button className="p-2 m-2 bg-amber-900 text-white rounded-lg"
          onClick={() => {
            const filteredres = listOfRestaurant.filter(
              (res) => res?.info?.avgRating > 4
            );
            setListOfRestaurant(filteredres);
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="flex flex-wrap rounded-2xl">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
