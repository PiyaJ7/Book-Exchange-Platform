import React, { useContext, useEffect, useState } from "react";
import "./myLibrary.css";
import Header from "../Components/Header";
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router";
import axios from "axios";
import { userContext } from "../App";
import Footer from "../Components/Footer";

export default function MyLibrary() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const user = useContext(userContext);

  useEffect(() => {
    axios
      .get("http://localhost:5555/book/getBook")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
          {books.map((book) =>
            user.email === book.email ? (
              <>
                <div className="myBook-div">
                  <div className="book-photo-div flex items-center justify-center">
                    <img
                      className="book-photo"
                      src={`http://localhost:5555/book/Images/${book.file}`}
                      alt={`${book.file}`}
                    />
                  </div>
                  <div className="book-details-div">
                    <h2>{book.title}</h2>
                    <h3>{book.author}</h3>
                    <h4>LKR {book.price}</h4>
                    <p>{book.category}</p>
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
              </>
            ) : (
              <></>
            )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
