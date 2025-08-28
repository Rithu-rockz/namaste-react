import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, sla } = resData;

  return (
    <div className="m-4 p-4 w-[250px] bg-pink-50 hover:bg-pink-100 shadow-lg rounded-lg">
      <img className="rounded-lg" src={CDN_URL+cloudinaryImageId} alt="res-logo" />
      <h3 className="font-bold py-4 text-md">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla?.deliveryTime}</h4>
    </div>
  );
};
export default RestaurantCard;
