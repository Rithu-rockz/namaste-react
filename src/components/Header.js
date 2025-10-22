import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [buttonClicked, setButtonClicked] = useState("login");
  useEffect(() => {
    console.log("useEffect called");
  }, [buttonClicked]);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);
  console.log("Header user:", loggedInUser);
  //subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-purple-50 md:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container w-28 p-2">
        <img src={LOGO_URL} alt="logo" className="h-[96px]" />
      </div>
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="mr-4">Online Status{onlineStatus ? "✔" : "🔴"}</li>
          <li className="mr-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="mr-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="mr-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="mr-4">
            <Link to="/cart">
              <span className="inline-block bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded mr-1">
                {cartItems.length}
              </span>
              Cart
            </Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              buttonClicked === "login"
                ? setButtonClicked("Logout")
                : setButtonClicked("login");
            }}
          >
            {buttonClicked}
          </button>
          <li className="px-4 ">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
