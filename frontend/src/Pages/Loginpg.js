import React, { useState } from "react";
import "./loginpg.css";
import LoginImage from "./images/login img2.png";
import logo from "./images/logo.png";
import { FaUser, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Loginpg() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = {
      username,
      password,
    };

    axios
      .post("http://localhost:5555/user/login", loginData)
      .then((response) => {
        if (response.data === "Login Successfull..") {
          navigate("/Dashboard");
        } else {
          console.log("Login Unsuccessfull...");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-page">
      <div className="login-containe">
        <div className="login">
          <img className="logo" src={logo} alt="Logo" />
          <h1 className="welcm-text text-3vw font-bold text-center text-blue-900">
            Welcome Back!
          </h1>
          <p className="p1 mx-15% my-0 text-2vw font-bold text-gray-500">
            Login to Continue..
          </p>
          <form onSubmit={handleSubmit}>
            <div className="login-input font-sans">
              <FaUser className="input-icon" />
              <input
                className="outline-none w-full bg-transparent"
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
              />
            </div>
            <div className="login-input font-sans ">
              <FaLock className="input-icon" />
              <input
                className="outline-none w-full bg-transparent"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>
            <p className="forget-pw mt-1 mx-15% mb-3 text-1.2vw cursor-pointer">
              Forget Password?
            </p>

            <button className="login-button" type="submit">
              Login
            </button>
            <p className="no-acc mt-1 mx-15% mb-3 text-1.2vw cursor-pointer">
              Don't have an account?{" "}
              <strong>
                <Link to="/Signup">Sign up</Link>
              </strong>
            </p>
          </form>

          <div className="or-separator mt-0 mb-0">
            <span className="line"></span>
            <span className="or-text">or</span>
            <span className="line"></span>
          </div>
          <button className="signin-google font-sans">
            <FcGoogle size={29} className="mr-3" />
            Sign in with Google
          </button>
        </div>
        <div className="login-img">
          <img className="w-full" src={LoginImage} alt="Login" />
        </div>
      </div>
    </div>
  );
}
