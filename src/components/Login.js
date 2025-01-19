import React, { useState } from "react";
import "../css/Login.css";
import { Auth } from '../FireBase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); 

 
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (!email || !password) {
      setErrorMessage("Please fill all forms"); 
    } else {
      setErrorMessage(""); 
      try {
       
        await signInWithEmailAndPassword(Auth, email, password);
        console.log("Login Successful");
        alert("Login successful!");
        navigate("/welcome"); 
      } catch (err) {
        
        console.error(err);
        setErrorMessage("Error logging in. Please try again.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login to Swiggy</h1>
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
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <p className="signup-redirect">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
