import React from "react";
import "./profilepg.css";
import banner from "./images/Profile banner.png";
import reading from "./images/reading banner.png";
import { FaUserLarge } from "react-icons/fa6";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Profilepg() {
  return (
    <div className="profilepg-section">
      <Header />
      <div className="profile-page">
        <div className="profilepg-left">
          <div className="profilepg-top bg-gray-50">
            <div className="banner-div">
              <img className="banner-img" src={banner} alt="banner.png" />
              <div className="profile-photo">
                <FaUserLarge size={70} />
              </div>
            </div>
            <div className="name-div">
              <h1>Bartholomew Henry Allen</h1>
              <h2>@BarryAllen</h2>
              <button className="edit-profile-button">Update Photo</button>
            </div>
          </div>
          <div className="profilepg-bottom">
            <img
              className="reading-banner"
              src={reading}
              alt="reading banner.png"
            />
          </div>
        </div>
        <div className="profilepg-right bg-gray-50">
          <h1>Personal Information</h1>
          <form action="">
            <div className="profile-input">
              <label htmlFor="">Name</label> <br />
              <input type="text" />
            </div>
            <div className="profile-input">
              <label htmlFor="">Email</label> <br />
              <input type="text" />
            </div>
            <div className="profile-input">
              <label htmlFor="">Username</label> <br />
              <input type="text" />
            </div>
            <div className="profile-input">
              <label htmlFor="">Phone No</label> <br />
              <input type="text" />
            </div>
            <div className="profile-input">
              <label htmlFor="">Address</label> <br />
              <input type="text" />
            </div>
            <button>Edit Profile</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
