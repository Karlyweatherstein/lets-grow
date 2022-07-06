import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/lg-logo.png";
import Auth from "../../utils/auth";
import { TOGGLE_CART } from "../../utils/actions";

function Header() {
  function showHeader() {
    if (Auth.loggedIn()) {
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
            {/* Logout */}
            <li>
              <Link to="/" onClick={() => Auth.logout()}>
                Logout
              </Link>
            </li>
            <li className="cart">
              {/* onClick={toggleCart} */}
              <div className="cart-closed">
                <span role="img" aria-label="trash">
                  🛒
                </span>
              </div>
            </li>
          </ul>
        </nav>
      );
    } else {
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
  }
  return (
    <header>
      <nav>{showHeader()}</nav>
    </header>
  );
}

export default Header;
