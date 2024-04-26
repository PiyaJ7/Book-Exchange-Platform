import React, { useEffect, useState } from "react";
import "./dashboard.css";
import Header from "../Components/Header";
import ProfileBar from "../Components/ProfileBar";
import NavigationBar from "../Components/NavigationBar";
import Carousel from "react-bootstrap/Carousel";
import background1 from "./images/background1.jpg";
import background2 from "./images/background2.jpg";
import background3 from "./images/background3.jpeg";
import background4 from "./images/background4.jpg";
import background5 from "./images/background5.jpg";
import "./myLibrary.css";
import axios from "axios";
import Footer from "../Components/Footer";

export default function Dashboard() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5555/book/getBook")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="dashboard-Section">
      <Header />
      <ProfileBar />
      <NavigationBar />
      <div className="dashboard-page h-full">
        <div className="dashboard-heading">
          <div className="image-caption font-mono grid items-center justify-center">
            <h1>Buy, Sell & Exchange Books for free!!</h1>
            <p>You can exchange used books with others..</p>
          </div>
          <Carousel interval={2000}>
            <Carousel.Item>
              <img
                className="background-img"
                src={background1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="background-img"
                src={background2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="background-img"
                src={background3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="background-img"
                src={background4}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="background-img"
                src={background5}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="book-sell-heading">
          <h1>Books for sell...</h1>
        </div>
        <div className="library-body">
          {books.map((book) => (
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
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
