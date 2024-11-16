import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { BsSpeakerFill } from "react-icons/bs";
import './Css/Login.css';

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:4000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Save token to localStorage or context (optional)
        localStorage.setItem("token", data.token);

        // Navigate to home page
        navigate("/");
      } else {
        setError(data.message || "Login failed. Please try again.");
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
          <BsSpeakerFill color='white' size={50} />
          <div className="title">Melody Mart</div>
        </div>
        <div className="form-container">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
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
            {error && <p className="error">{error}</p>}
            <button type="submit" className="btn-register">Sign In</button>
            <p className="f">
              Don’t have an account? <a href="/register">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
