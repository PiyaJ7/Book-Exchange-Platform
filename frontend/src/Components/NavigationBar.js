import React from "react";
import "./navigationBar.css";
import { IoSearchSharp } from "react-icons/io5";

export default function NavigationBar() {
  return (
    <div className="NavigationBar">
      <div className="navigationbar-left w-1/4 h-full flex item-center justify-center">
        <select className="navigationBar-select">
          <option value="0">All Category</option>
          <option value="1">Mystery</option>
          <option value="2">Horror</option>
          <option value="3">Romance Novel</option>
          <option value="4">Fiction</option>
          <option value="5">Fairy tale</option>
          <option value="6">Thriller</option>
          <option value="7">Classic</option>
        </select>
      </div>
      <div className="navigationbar-middle w-1/2 h-full flex items-center justify-around">
        <div className="navigation-div">Latest</div>
        <div className="navigation-div">Recomended</div>
        <div className="navigation-div">Popular</div>
      </div>
      <div className="navigationbar-right w-1/4 h-full flex justify-center items-center">
        <div className="search-bar flex items-center justify-center">
          <input type="text" placeholder="Search a book" />
          <IoSearchSharp size={22} />
        </div>
      </div>
    </div>
  );
}
