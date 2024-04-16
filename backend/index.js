import express, { request, response } from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";
import bookRoute from "./routes/bookRoute.js";
import cors from "cors";

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware to handle cors policy
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to book export System");
});

app.use("/user", userRoute);
app.use("/book", bookRoute);

mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listen to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
