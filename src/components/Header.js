import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const Header = () => {
  const [buttonClicked, setButtonClicked] = useState("login");
  useEffect(() => {
    console.log("useEffect called");
  },[buttonClicked]);
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
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
