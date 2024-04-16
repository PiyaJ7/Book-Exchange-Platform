import "./uploadBook.css";
import { MdCloudUpload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { userContext } from "../App";

export default function UploadBook() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState("");
  const user = useContext(userContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("email", user.email);
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5555/book/upload",
        formData
      );
      if (response.data === "Success") {
        navigate("/MyLibrary");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <div className="uploadBook-section flex items-center justify-center">
      <div className="bookUpload-div">
        <button onClick={handleNavigate} className="upload-book-close-button">
          <IoCloseSharp size={40} className="upload-book-close-icon" />
        </button>
        <h1 className="font-bold text-center text-blue-900">Upload a Book</h1>
        <form onSubmit={handleSubmit}>
          <div className="upload-book-input">
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="upload-book-input">
            <input
              type="text"
              placeholder="Author"
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="upload-book-input">
            <input
              type="text"
              placeholder="Price (LKR)"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="upload-book-input">
            <select
              name=""
              id=""
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="Null">Choose category</option>
              <option value={"Mystery"}>Mystery</option>
              <option value={"Horror"}>Horror</option>
              <option value={"Romance Novel"}>Romance Novel</option>
              <option value={"Fiction"}>Fiction</option>
              <option value={"Fairy tale"}>Fairy tale</option>
              <option value={"Thriller"}>Thriller</option>
              <option value={"Classic"}>Classic</option>
            </select>
          </div>
          <div
            className="upload-bookimg"
            onClick={() =>
              document.querySelector(".input-file-bookimg").click()
            }
          >
            <MdCloudUpload size={50} className="cloud-icon" />
            <p>Drag and Drop files here</p>
            <input
              type="file"
              className="input-file-bookimg"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </div>
          <div className="upload-button-div flex items-center justify-center">
            <button className="book-upload-button">Upload Book</button>
          </div>
        </form>
      </div>
    </div>
  );
}
