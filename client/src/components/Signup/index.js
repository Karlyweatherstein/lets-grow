import React from "react";
import { link } from "react-router-dom";

function Signup() {
    return (
        <div className="signup">

            <div className="signup-title">
            <h1>Signup</h1>
            </div>
        
        <div className="signup-box mx-auto">
            <input 
            type="text"
            id="email"
            placeholder="Enter your email!"
            />
            <input
            type="text"
            id="username"
            placeholder="Enter your username!"
            />
            <input
            type="text"
            id="password"
            placeholder="Enter your password!"
            />
            <button id="submit-btn" class="submit-btn">
                Submit
            </button>
        </div>
        <div className="community">
        <h2>Already part of the community?
            <a href="/"> Login!</a> 
            </h2>
            </div>

        </div>
    ); 
}

export default Signup;