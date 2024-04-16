import React, { useState } from "react";
import "./signup.css";
import LoginImage from "./images/login img2.png";
import logo from "./images/logo.png";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      email,
      username,
      password,
    };

    axios
      .post("http://localhost:5555/user/register", newUser)
      .then((response) => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-page">
      <div className="login-containe">
        <div className="login">
          <img className="logo" src={logo} alt="Logo" />
          <p className="p2 mx-15% my-0 font-bold text-blue-900">
            Create your Account now..
          </p>
          <form onSubmit={handleSubmit}>
            <>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="signup-input text-blue-900"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingUsername"
                label="Username"
                className="signup-input text-blue-900"
              >
                <Form.Control
                  type="text"
                  placeholder="username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="signup-input text-blue-900"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingConfirmPassword"
                label="Confirm Password"
                className="signup-input text-blue-900"
              >
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </FloatingLabel>
            </>
            <button className="login-button" type="submit">
              Create Account
            </button>
            <p className="no-acc mt-1 mx-15% mb-3 text-1.2vw cursor-pointer">
              Already have an account?{" "}
              <strong>
                <Link to="/">Login</Link>
              </strong>
            </p>
          </form>
        </div>
        <div className="login-img">
          <img className="w-full" src={LoginImage} alt="Login" />
        </div>
      </div>
    </div>
  );
}
