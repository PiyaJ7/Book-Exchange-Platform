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
          <img className="logo w-20" src={logo} alt="Logo" />
          <h1 className="text-5xl font-bold text-center text-blue-900">
            Welcome Back!
          </h1>
          <p className="mx-16 mt-8 mb-3 text-2xl font-bold text-gray-500">
            Login to Continue..
          </p>
          <form action="">
            <div className="login-input font-sans">
              <FaUser className="my-2.5 mx-3" />
              <input
                className="outline-none"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="login-input font-sans">
              <FaLock className="my-2.5 mx-3" />
              <input
                className="outline-none"
                type="password"
                placeholder="Password"
              />
            </div>
            <p className="forget pw mt-1 mx-24 mb-3 text-sm cursor-pointer">
              Forget Password?
            </p>

            <button className="login-button" type="submit">
              Login
            </button>
            <p className="forget pw mt-1 mx-24 mb-3 text-sm cursor-pointer">
              Don't have an account? <strong>Sign up</strong>
            </p>
          </form>

          <div className="flex">
            <hr className="w-52 my-2.5 ml-6 mr-3" />
            <p className=" text-gray-300 font-bold">OR</p>
            <hr className="w-52 my-2.5 ml-3 mr-6" />
          </div>
          <button className="signin-google font-sans">
            <FcGoogle size={29} className="mr-3" />
            Sign in with Google
          </button>
        </div>
        <div className="login-img">
          <img src={LoginImage} alt="Login" />
        </div>
      </div>
    </div>
  );
}
