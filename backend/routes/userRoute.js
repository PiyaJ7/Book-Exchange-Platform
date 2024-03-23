import express, { request, response } from "express";
import { User } from "../models/createUserModel.js";

const router = express.Router();

//Route for create user (Signup)
router.post("/register", async (request, reponse) => {
  try {
    if (
      !request.body.email ||
      !request.body.username ||
      !request.body.password
    ) {
      return response.status(400).send({
        message: "Send data successfully",
      });
    }
    const newUser = {
      email: request.body.email,
      username: request.body.username,
      password: request.body.password,
    };

    const user = await User.create(newUser);

    return reponse.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Router for login
router.post("/login", async (request, response) => {
  try {
    const user = await User.findOne({
      username: request.body.username,
      password: request.body.password,
    });
    if (user) {
      response.status(200).json({ message: "Login successfull" });
    } else {
      return response.status(400).json({ message: "Login failed" });
    }
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

export default router;
