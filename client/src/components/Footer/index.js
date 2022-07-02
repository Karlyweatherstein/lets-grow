import React from "react";
import Email from "../../assets/email-icon.png";

function Footer() {
  return (
    <footer className="paragraphFonts">
      <ul>
        <li>Find us online!</li>
        <li>
          <a href="https://github.com/Karlyweatherstein">
            <i aria-hidden="true"></i>
            <img className="icons" src={Email} alt="Email"></img>
          </a>
        </li>
        <li>
          <a href="mailto: karlyweatherstein@gmail.com">
            <i aria-hidden="true"></i>
            <img className="icons" src={Email} alt="Email"></img>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
