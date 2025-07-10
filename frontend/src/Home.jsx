import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <div
        
      >
        <h1 >
          Welcome to the Home Page
        </h1>
        <p >
          This is a basic React.js home page. You can customize it as you like!
        </p>
      </div>
      <div
        
      >
        <Link to="/register">
          <button
           
          >
            Register
          </button>
        </Link>
        <Link to="/login">
          <button
            
          >
            Login
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
