import React from 'react';
import { Loginregnav } from '../Components/Loginregnav/Loginregnav';
import { BsSpeakerFill } from "react-icons/bs";
import './Css/Login.css';

export const Login = () => {
  return (
    <div className="register-container">
    <div className="register">
      <div className="header">
        <BsSpeakerFill color='white' size={50} />
        <div className="title">Melody Mart</div>
      </div>
      <div className="form-container">
        <h1>Sign In</h1>
        <form>
          <div className="input-group">
            <input type="email" id="email" placeholder="Email" required />
          </div>
         
          <div className="input-group">
            <input   type="password"name="password" placeholder="Password" required />
          </div>
        
          <button type="submit" className="btn-register">Register</button>
          <p className="f">
            Dont have an account? <a href="/register">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  </div>

  );
};
