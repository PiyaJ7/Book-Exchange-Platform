import express, { request, response } from "express";
import { Book } from "../models/bookModel.js";
import multer from "multer";
import path from "path";

const router = express.Router();
router.use(express.static("Public"));

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
router.post("/upload", upload.single("file"), (request, response) => {
  Book.create({
    title: request.body.title,
    author: request.body.author,
    price: request.body.price,
    category: request.body.category,
    file: request.file.filename,
  })
    .then((result) => {
      console.log("Book upload successfull");
      response.json("Success");
    })
    .catch((err) => response.json(err));
});

export default router;
