import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-div">
        <div className="footer-top">
          <div className="footer-top-left">
            <h1>Book Heaven</h1>
            <div className="footer-logo">
              <FaFacebook size={40} className="icon" />
              <FaSquareInstagram size={40} className="icon" />
              <FaTwitter size={40} className="icon" />
            </div>
          </div>
          <div className="footer-top-middle">
            <h1>Popular Categories</h1>
            <div className="list-div">
              <div className="list-p">
                <p>Mystery</p>
                <p>Horror</p>
                <p>Romance Novel</p>
                <p>Fiction</p>
              </div>
              <div className="list-p">
                <p>Fairy tale</p>
                <p>Thriller</p>
                <p>Classic</p>
              </div>
            </div>
          </div>
          <div className="footer-top-right">
            <h1>About</h1>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © bookheaven.com-{currentYear}. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
