import React from "react";
import "./profileBar.css";
import { RiPagesFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { FaBook } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function ProfileBar() {
  function hideProfileBar() {
    const profile = document.querySelector(".profile-bar");
    profile.style.display = "none";
  }

  return (
    <div className="profile-bar">
      <button
        onClick={hideProfileBar}
        className="absolute top-1 right-1 cursor-pointer"
      >
        <IoClose size={23} />
      </button>
      <Link to="/Dashboard">
        <div className="profilebar-link flex items-center">
          <RiPagesFill className="profilebar-icon" size={20} />
          <p>Dashboard</p>
        </div>
      </Link>
      <Link to="/MyProfile">
        <div className="profilebar-link flex items-center">
          <FaUser size={18} />
          <p>Your Profile</p>
        </div>
      </Link>
      <div className="profilebar-link flex items-center">
        <BiSolidMessageRoundedDots size={20} />
        <p>Message</p>
      </div>
      <Link to="/MyLibrary">
        <div className="profilebar-link flex items-center">
          <FaBook size={18} />
          <p>My Library</p>
        </div>
      </Link>
      <div className="Signout-link items-center">
        <TbLogout size={20} />
        <p>Sign out</p>
      </div>
    </div>
  );
}
