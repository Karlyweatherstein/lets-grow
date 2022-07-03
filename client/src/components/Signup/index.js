import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

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
    Auth.login(token);
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
            id="email"
            placeholder="Enter your email!"
            onChange={handleChange}
          />
          <input
            type="text"
            id="username"
            placeholder="Enter your username!"
            onChange={handleChange}
          />
          <input
            type="text"
            id="password"
            placeholder="Enter your password!"
            onChange={handleChange}
          />
          <button type="submit" id="submit-btn" class="submit-btn">
            Submit
          </button>
        </form>
      </div>

      <div className="community paragraphFonts">
        <h2>
          Already part of the community?
          <a href="/login"> Login!</a>
        </h2>
      </div>
    </div>
  );
}

export default Signup;
