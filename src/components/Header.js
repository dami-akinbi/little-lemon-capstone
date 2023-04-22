import React from "react";

import logo from "../images/Logo.svg";

function Header() {
  return (
    <header>
      <img src={logo} alt="little-lemon-logo" />
      {/* <img src={require("./restaurant.jpg")} alt="restaurant-logo" width="100px" height="45px" /> */}
    </header>
  );
}

export default Header;
