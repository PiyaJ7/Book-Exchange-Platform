import express, { request, response } from "express";
import { UserModel } from "../models/createUserModel.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";

const router = express.Router();
router.use(cookieParser());

//Route for create user (Signup)
router.post("/register", (request, response) => {
  const { username, email, password } = request.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      UserModel.create({ username, email, password: hash })
        .then((user) => response.json(user))
        .catch((err) => response.json(err));
    })
    .catch((err) => console.log(err));
});

//Route for verify user
export const verifyUser = (request, response, next) => {
  const token = request.cookies.token;
  if (!token) {
    console.log("Token is missing.");
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return response.json("The token is wrong");
      } else {
        request.email = decoded.email;
        request.username = decoded.username;
        next();
      }
    });
  }
};

router.get("/verify", verifyUser, (request, response) => {
  return response.json({
    email: request.email,
    username: request.username,
  });
});

//Router for login
router.post("/login", (request, response) => {
  const { username, password } = request.body;

  UserModel.findOne({ username: username }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          const token = jwt.sign(
            {
              username: user.username,
              email: user.email,
            },
            "jwt-secret-key",
            { expiresIn: "1d" }
          );
          response.cookie("token", token);
          return response.json("Login Successfull..");
        } else {
          return response.json("Incorrect Password.");
        }
      });
    } else {
      response.json("User doesn't exit.");
    }
  });
});

export default router;
