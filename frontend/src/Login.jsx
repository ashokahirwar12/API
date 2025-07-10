import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!email || !password) {
      setMessage("Please fill all fields");
      return;
    }
    try {
      const res = await axios.post("http://localhost:3001/api/user/login", {
         Email: email,
        Password: password,
      });
      setMessage(res.data.msg || "Login successful");
      setEmail("");
      setPassword("");

    
      navigate("/home");
    } catch (error) {
      setMessage(error.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div
      
    >
      <h2>Login</h2>
      {message && (
        <p>
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
        
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
       
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
       
        <button
          type="submit"
         
        >
          Login
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
