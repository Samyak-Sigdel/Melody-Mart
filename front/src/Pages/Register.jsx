import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { BsSpeakerFill } from "react-icons/bs";
import './Css/Register.css';

export const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { username, email, password, termsAccepted } = formData;

    if (!termsAccepted) {
      setError("You must agree to the terms and conditions.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Registration successful!");
        setTimeout(() => {
          navigate("/"); // Redirect to home page after successful registration
        }, 1000); // Optional delay for user to see the success message
      } else {
        setError(data.message || "Failed to register. Please try again.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
      console.error(error);
    }
  };

  return (
    <div className="register-container">
      <div className="register">
        <div className="header">
          <BsSpeakerFill color="white" size={50} />
          <div className="title">Melody Mart</div>
        </div>
        <div className="form-container">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="checkbox-group">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
              />
              <label htmlFor="terms">
                I agree with the <a href="#">terms and conditions</a>
              </label>
            </div>
            <button type="submit" className="btn-register">Register</button>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <p className="f">
              Already have an account? <a href="/login">Sign in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
