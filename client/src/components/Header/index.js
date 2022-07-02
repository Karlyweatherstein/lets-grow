import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/circle.png";

function Header() {
  return (
    <nav className="paragraphFonts">
      <img className="logo" src={Logo} alt="logo"></img>
      <ul>
        {/* Home */}
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* About */}
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* Login */}
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
