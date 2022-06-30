import React from "react";
import Email from "../../assets/email-icon.png";

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://github.com/Karlyweatherstein">
            <i aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="mailto: karlyweatherstein@gmail.com">
            <i aria-hidden="true"></i>
            <img className="icons" src={Email} alt="Email"></img>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/karly-weatherstein-963922137/">
            <i aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
