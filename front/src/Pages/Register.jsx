import React from "react";
import { BsSpeakerFill } from "react-icons/bs";
import './Css/Register.css';

export const Register = () => {
  return (
    <div className="register-container">
      <div className="register">
        <div className="header">
          <BsSpeakerFill color='white' size={50} />
          <div className="title">Melody Mart</div>
        </div>
        <div className="form-container">
          <h1>Sign Up</h1>
          <form>
            <div className="input-group">
              <input type="email" id="email" placeholder="Email" required />
            </div>
            <div className="input-group">
              <input type="text" id="phoneno" placeholder="Phone no" required />
            </div>
            <div className="input-group">
              <input   type="password"name="password" placeholder="Password" required />
            </div>
            <div className="checkbox-group">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                I agree with the <a href="#">terms and conditions</a>
              </label>
            </div>
            <button type="submit" className="btn-register">Register</button>
            <p className="f">
              Already have an account? <a href="/login">Sign in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
