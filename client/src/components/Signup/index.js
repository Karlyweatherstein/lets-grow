import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import AuthService from "../../utils/auth";
import { Link } from 'react-router-dom';


function Signup() {
  const [formState, setFormState] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        username: formState.username,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    AuthService.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="signup">
      <div className="signup-title">
        <h1 className="titleFonts">Signup</h1>
      </div>

      <div className="signup-box mx-auto paragraphFonts">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name= "email"
            id="email"
            placeholder="Enter your email!"
            onChange={handleChange}
          />
          <input
            type="text"
            name= "username"
            id="username"
            placeholder="Enter your username!"
            onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Enter your password!"
            onChange={handleChange}
          />
          <button type="submit" id="submit-btn" className="submit-btn">
            Submit
          </button>
        </form>
      </div>

      <div className="community paragraphFonts">
        <h2>
          Already part of the community?
          <Link to="/login"> Login!</Link>
        </h2>
      </div>
    </div>
  );
}

export default Signup;
