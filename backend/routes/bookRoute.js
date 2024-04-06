import express from "express";
import { Book } from "../models/bookModel.js";
import multer from "multer";
import path from "path";

const router = express.Router();
router.use("/Public/Images", express.static("Public/Images"));

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

export default router;
