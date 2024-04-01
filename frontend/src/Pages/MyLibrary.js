import React from "react";
import "./myLibrary.css";
import Header from "../Components/Header";
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import book1 from "../Pages/images/Harry-Potter-and-the-Philosophers-Stone.jpeg";
import { useNavigate } from "react-router";

export default function MyLibrary() {
  const navigate = useNavigate();

  const uploadBook = () => {
    navigate("/Upload-book");
  };

  return (
    <div className="myLibrary-section">
      <Header />
      <div className="myLibrary-page">
        <div className="library-header flex">
          <div className="header-topic flex items-center justify-start">
            My Library
          </div>
          <div className="header-buttons flex items-center justify-center">
            <button onClick={uploadBook}>Upload a Book</button>
          </div>
        </div>
        <div className="library-body">
          <div className="myBook-div">
            <div className="book-photo-div flex items-center justify-center">
              <img
                className="book-photo"
                src={book1}
                alt="Harry-Potter-and-the-Philosophers-Stone.jpeg"
              />
            </div>
            <div className="book-details-div">
              <h2>Harry Potter and the Philosophers Stone</h2>
              <h3>By J K Rowling</h3>
              <h4>LKR 850.00</h4>
              <p>Fiction</p>
            </div>
            <div className="book-details-buttons flex items-center justify-around">
              <button className="library-edit-button flex items-center">
                Edit
                <BiSolidEdit />
              </button>
              <button className="library-delete-button flex items-center">
                Delete
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
