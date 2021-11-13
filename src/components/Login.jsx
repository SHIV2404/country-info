import React from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
AOS.init();

const Login = () => {
  return (
    <div className="Form-wrapper">
      <div className="form-container">
        <div className="from-conainer-left">
          <h2 className="Heading-register" data-aos="fade-down" data-aos-duration="1200">Login to the webpage</h2>

          <input
            type="text"
            className="username"
            placeholder="Enter Your username"
            data-aos="flip-up" data-aos-duration="1500"
          />
          <input
            type="password"
            className="username"
            placeholder="Enter Your password"
            data-aos="flip-up" data-aos-duration="1500"
          />
          <Link to="/countries">
            <button className="register-button">Login</button>
          </Link>
          <Link to="/register" className="links">
            <p>Don't have an account?</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
