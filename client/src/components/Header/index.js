import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <h1>Karly Weatherstein</h1>
      <ul>
        {/* Home */}
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* About me */}
        <li>
          <Link to="/about">About Me</Link>
        </li>
        {/* Portfolio */}
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        {/* Contact */}
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {/* Resume */}
        <li>
          <Link
            to="/resume"
            className={({ isActive }) => (isActive ? "tab-active" : "tab")}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
