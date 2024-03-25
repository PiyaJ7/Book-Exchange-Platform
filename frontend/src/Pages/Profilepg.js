import React from "react";
import "./profilepg.css";
import Header from "../Components/Header";
import { FaUserLarge } from "react-icons/fa6";

export default function Profilepg() {
  return (
    <div className="profilepg-section">
      <Header />
      <div className="profile-page">
        <div className="profilepg-left">
          <div className="profile-photo-div flex items-center justify-center">
            <div className="profile-photo flex items-center justify-center">
              <FaUserLarge size={200} />
            </div>
          </div>
          <div className="profile-name-div">
            <p className="profile-name-p1">Bartholomew Henry Allen</p>
            <p className="profile-username-p1">@BarryAllen</p>
            <button className="edit-photo-button">Edit Profile photo</button>
          </div>
        </div>
        <div className="profilepg-right">
          <div className="profile-deails-div flex items-center justify-center">
            <form action="">
              <div className="profile-input">
                <label htmlFor="">Name</label>
                <br />
                <input type="text" /> <br />
              </div>
              <div className="profile-input">
                <label htmlFor="">Email</label> <br />
                <input type="text" /> <br />
              </div>
              <div className="profile-input">
                <label htmlFor="">Username</label>
                <br />
                <input type="text" /> <br />
              </div>
              <button className="update-profile-button">Update Profile</button>
            </form>
          </div>
          <p className="resetpw-heading">Reset Password</p>
          <div className="profile-resetpw-div flex items-center justify-center">
            <form action="">
              <div className="reset-password-inut">
                <label htmlFor="">New Password</label> <br />
                <input type="password" /> <br />
              </div>
              <div className="reset-password-inut">
                <label htmlFor="">Confirm New Password</label> <br />
                <input type="password" /> <br />
              </div>
              <button className="reset-profile-button">Reset Password</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
