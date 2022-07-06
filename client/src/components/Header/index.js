import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/lg-logo.png";
import Auth from "../../utils/auth";
import { idbPromise } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { useLazyQuery } from "@apollo/client";
import { loadStripe } from "@stripe/stripe-js";

function Header() {
  class CartModal extends React.Component {
    constructor() {
      super();
      this.state = {
        isHidden: true,
      };
    }
    toggleHidden() {
      this.setState({
        isHidden: !this.state.isHidden,
      });
    }
    render() {
      return (
        <div>
          <button
            onClick={this.toggleHidden.bind(this)}
            className="shoppingIcon"
          >
            <span role="img" aria-label="trash">
              🛒
            </span>
          </button>
          {!this.state.isHidden && <ShoppingModal />}
        </div>
      );
    }
  }

  class ShoppingModal extends React.Component {
    constructor() {
      super();
      this.state = {
        isHidden: true,
      };
    }
    toggleHidden() {
      this.setState({
        isHidden: !this.state.isHidden,
      });
    }
    render() {
      return (
        <div className="shoppingModal">
          <h1>Nothing in your shopping cart!</h1>
        </div>
      );
    }
  }

  function showHeader() {
    if (Auth.loggedIn()) {
      return (
        <nav className="paragraphFonts">
          <img className="logo" src={Logo} alt="logo"></img>
          <ul>
            {/* Home */}
            <li className="navLinks">
              <Link to="/">Home</Link>
            </li>
            {/* About */}
            <li className="navLinks">
              <Link to="/about">About</Link>
            </li>
            {/* Logout */}
            <li className="navLinks">
              <Link to="/" onClick={() => Auth.logout()}>
                Logout
              </Link>
            </li>
            {/* Shopping Cart */}
            <li className="navLinks">
              <div className="cart-closed cart">
                <CartModal />
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
