import React, { useState } from "react";
import "./header.css";
import ProfileBar from "./ProfileBar.js";
import logo from "../Pages/images/logo.png";
import { FaUser } from "react-icons/fa";
import { FiShoppingCart, FiMail } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";

export default function Header() {
  const [showProfile, setShowProfile] = useState(false);

  function toggleProfileBar() {
    setShowProfile(!showProfile);
  }

  return (
    <div className="header-section w-full bg-white">
      <div className="header-left h-full">
        <img src={logo} className="header-logo w-1/6" alt="logo.png" />
        <p className="header-p1 font-bold text-blue-900 font-mono">
          BOOK HEAVEN
        </p>
      </div>
      <div className="header-right h-full">
        <div className="header-notification cursor-pointer">
          <MdNotificationsNone size={30} className="notification-icon" />
          <div className="notification-count">0</div>
        </div>
        <div className="header-mail">
          <FiMail size={30} className="mail-icon" />
          <div className="mail-count">0</div>
        </div>
        <div className="header-cart">
          <FiShoppingCart size={30} className="cart-icon" />
        </div>
        <div className="profile-name">
          <p className="Profile-name-p1">Welcome,</p>
          <p className="Profile-name-p2">Bartholomew Henry Allen</p>
        </div>
        <div onClick={toggleProfileBar} className="profile-logo">
          <FaUser size={35} />
        </div>
      </div>
      {showProfile && <ProfileBar />}{" "}
    </div>
  );
}
