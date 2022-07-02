import React from "react";

function Login() {
  return (
    <div className="login">
      <div className="login-title">
        <h1 className="titleFonts">Login</h1>
      </div>

      <div className="login-box mx-auto paragraphFonts">
        <input type="text" id="username" placeholder="Enter your username!" />
        <input type="text" id="password" placeholder="Enter your password!" />
        <button id="submit-btn" class="submit-btn">
          Submit
        </button>
      </div>
      <div className="community paragraphFonts">
        <h2>
          Not part of the community?
          <a href="/Signup"> Join now!</a>
        </h2>
      </div>
    </div>
  );
}

export default Login;
