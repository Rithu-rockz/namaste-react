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
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status{onlineStatus ? "✔" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
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
