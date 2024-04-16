import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },

    file: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
  },
  {
    timestamp: true,
  }
);

export const Book = mongoose.model("Book", bookSchema);
