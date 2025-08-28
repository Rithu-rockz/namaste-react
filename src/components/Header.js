import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [buttonClicked, setButtonClicked] = useState("login");
  useEffect(() => {
    console.log("useEffect called");
  }, [buttonClicked]);
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-purple-50 md:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container w-28 p-2">
        <img src={LOGO_URL} alt="logo" />
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
          <li className="mr-4">Cart</li>
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
        </ul>
      </div>
    </div>
  );
};
export default Header;
