<<<<<<< Updated upstream
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> Stashed changes
import "./signup.css";
import LoginImage from "./images/login img2.png";
import logo from "./images/logo.png";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
<<<<<<< Updated upstream
import { Link } from "react-router-dom";

export default function Signup() {
=======
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      email,
      username,
      password,
    };

    try {
      const response = await axios.post("http://localhost:5555/user", newUser);
      console.log(response);
      if (response.status === 201) {
        console.log("Login successfull: ", response.data);
        navigate("/");
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

>>>>>>> Stashed changes
  return (
    <div className="login-page">
      <div className="login-containe">
        <div className="login">
          <img className="logo" src={logo} alt="Logo" />
          <p className="p2 mx-15% my-0 font-bold text-blue-900">
            Create your Account now..
          </p>
<<<<<<< Updated upstream
          <form action="">
=======
          <form onSubmit={handleSubmit}>
>>>>>>> Stashed changes
            <>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="signup-input text-blue-900"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
<<<<<<< Updated upstream
=======
                  onChange={(e) => setEmail(e.target.value)}
>>>>>>> Stashed changes
                  required
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingUsername"
                label="Username"
                className="signup-input text-blue-900"
              >
<<<<<<< Updated upstream
                <Form.Control type="text" placeholder="username" required />
=======
                <Form.Control
                  type="text"
                  placeholder="username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
>>>>>>> Stashed changes
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="signup-input text-blue-900"
              >
<<<<<<< Updated upstream
                <Form.Control type="password" placeholder="Password" required />
=======
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
>>>>>>> Stashed changes
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingPassword"
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
