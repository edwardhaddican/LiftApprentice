import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className="nav_bar_container">
      <div>
        <Link to={"/home"} className="nav_item">
          Home
        </Link>
        <Link to={"/home"} className="nav_item">
          Videos
        </Link>
      </div>

      <div className="nav_bar_right">
        <Link to={"/home"} className="nav_item">
          Contact
        </Link>
        <Link to={"/home"} className="nav_item">
          Facebook
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
