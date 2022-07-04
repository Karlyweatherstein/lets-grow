import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../../utils/mutations';
import AuthService from '../../utils/auth';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../../utils/mutations';
// import Auth from '../../utils/auth';

function Login(props) {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { username: formState.username, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      AuthService.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    
    <div className="login">
      
      <div className="login-title">
        <h1 className="titleFonts">Login</h1>
      </div>
      <div className="signup-box mx-auto paragraphFonts">
        <form onSubmit={handleFormSubmit}>
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
          Not part of the community?
          <Link to="/Signup"> Join now!</Link>
        </h2>
      </div>
    </div>
  );
}

export default Login;
