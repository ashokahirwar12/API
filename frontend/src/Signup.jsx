import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!FirstName || !LastName || !Email ||!Password) {
      console.log("Please fill all fields");
      return;
    }

    try {
      await axios.post("http://localhost:3001/api/user/register", {
        FirstName,
        LastName,
        Email,
        Password
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      console.log("Registration successful");

      
      navigate("/login");
    } catch (error) {
      console.log(
        "Registration failed:",
        error.response?.data?.msg || error.message
      );
    }
  };

  return (
    <div
    >
      <h2>Registration Form</h2>

      {/* ✅ Use handleSubmit on form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={FirstName}
            
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div >
          <label>Last Name:</label>
          <input
            type="text"
            value={LastName}
          
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={Email}
            
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
         <div>
          <label>Password:</label>
          <input
            type="password"
            value={Password}
            
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* ✅ No Link wrapper, direct submit */}
        <button
          type="submit"
          
        >
          Register
        </button>
      </form>

      {/* Login button as navigation */}
      <Link to="/login">
        <button
          type="button"
          
        >
          Login
        </button>
      </Link>

      <div >
        <button onClick={()=>navigate("/forget-password")} >Forget pasasword</button>
      </div>
    </div>
  );
};

export default Signup;
