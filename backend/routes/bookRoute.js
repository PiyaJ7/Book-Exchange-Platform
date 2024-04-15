import express, { response } from "express";
import { Book } from "../models/bookModel.js";
import multer from "multer";
import path from "path";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import { request } from "http";

const router = express.Router();
router.use(express.static("Public"));
router.use(cookieParser());

const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, "Public/Images");
  },
  filename: (request, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

//Route for upload book
router.post("/upload", upload.single("file"), async (request, response) => {
  try {
    const newBook = await Book.create({
      title: request.body.title,
      author: request.body.author,
      price: request.body.price,
      category: request.body.category,
      file: request.file.filename,
    });

    console.log("Book upload successful");
    return response.status(201).send("Success");
  } catch (err) {
    console.error("Error uploading book:", err);
    return response.status(500).json({ error: "Error uploading book" });
  }
});

//Route for get books
router.get("/getBook", (request, response) => {
  Book.find()
    .then((books) => response.json(books))
    .catch((err) => response.json(err));
});

//Route for verify user
const verifyUser = (request, response, next) => {
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

export default router;
