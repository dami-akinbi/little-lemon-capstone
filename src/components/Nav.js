import React from "react";

import logo from "../images/Logo.svg";

function Nav() {
  return (
    <>
      <img src={logo} alt="little-lemon-logo" />
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
