import React from "react";
import "./profileBar.css";
import { RiPagesFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { FaBook } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

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
      <div className="profilebar-link flex items-center">
        <RiPagesFill className="profilebar-icon" size={20} />
        <p>Dashboard</p>
      </div>
      <div className="profilebar-link flex items-center">
        <FaUser size={18} />
        <p>Your Profile</p>
      </div>
      <div className="profilebar-link flex items-center">
        <BiSolidMessageRoundedDots size={20} />
        <p>Message</p>
      </div>
      <div className="profilebar-link flex items-center">
        <FaBook size={18} />
        <p>Your Library</p>
      </div>
      <div className="Signout-link items-center">
        <TbLogout size={20} />
        <p>Sign out</p>
      </div>
    </div>
  );
}
