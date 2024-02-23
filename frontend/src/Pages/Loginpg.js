import React from "react";
import "./loginpg.css";
import LoginImage from "./images/login img2.png";
import logo from "./images/logo.png";
import { FaUser, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Loginpg() {
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
          <form action="">
            <div className="login-input font-sans">
              <FaUser className="input-icon" />
              <input
                className="outline-none w-full bg-transparent"
                type="text"
                placeholder="Username"
                required
              />
            </div>
            <div className="login-input font-sans ">
              <FaLock className="input-icon" />
              <input
                className="outline-none w-full bg-transparent"
                type="password"
                placeholder="Password"
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
              Don't have an account? <strong>Sign up</strong>
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
