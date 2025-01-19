import React, { useState } from "react";
import "../css/Signup.css";
import { Auth } from '../FireBase';
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (!email || !password) {
      setErrorMessage("Please fill all forms"); // Show error message if fields are empty
    } else {
      setErrorMessage(""); 

      try {
      
        await createUserWithEmailAndPassword(Auth, email, password);
        console.log("Account Created");
        
        alert("Account created successfully!");
      } catch (err) {
        
        console.error(err);
        setErrorMessage("Error creating account. Please try again.");
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Create a Swiggy Account</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <p className="login-redirect">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
