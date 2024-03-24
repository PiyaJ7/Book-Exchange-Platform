import React from "react";
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

export default function Dashboard() {
  return (
    <div className="dashboard-Section">
      <Header />
      <ProfileBar />
      <NavigationBar />
      <div className="dashboard-page h-full">
        <div className="dashboard-heading">
          <div className="image-caption font-mono">
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
      </div>
    </div>
  );
}
