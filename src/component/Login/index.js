import React, { useState } from "react";
import "./Style.css";
import { useNavigate, useNavigation } from "react-router-dom";

const Login = () => {
    // State variables to store email, password, and validation errors
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    // const navigate = useNavigation()
  
    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Reset previous error messages
      setEmailError("");
      setPasswordError("");
  
      // Email validation regex pattern
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      // Password validation regex pattern
      const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
  
      // Validate email
      if (!email.match(emailPattern)) {
        setEmailError("Invalid email address");
        return;
      }
  
      // Validate password
      if (!password.match(passwordPattern)) {
        setPasswordError(
          "Password must contain at least 1 numeric, 1 capital letter, 1 small letter, and 1 special symbol, and be at least 8 characters long"
        );
        return;
      }
  
      // If both validations are successful, store data in local storage
      const userData = {
        email,
        password
      };
  
      localStorage.setItem("userData", JSON.stringify(userData));
  
      // Clear input fields
      setEmail("");
      setPassword("");
      console.log(email, password);
      navigate("/home")
    };
  
    return (
      <div className="myform">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="error-message text-danger">{emailError}</div>
          </div>
          <div className="mb-3">
            <label>Password:</label>
            <input
              className="form-control"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="error-message text-danger">{passwordError}</div>
          </div>
          <button className="btn btn-primary" type="submit">Login</button>
        </form>
      </div>
    );
  };
  
  export default Login;
