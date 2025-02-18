import React from "react";
import logo from "../../assets/logo-removebg-preview-D8Ms51qp.png";
import "./Header.css";
import searchSvg from "../../../public/search.svg";
import heart from "../../../public/heart.svg";
import basket from "../../../public/basket.svg";

const Header = () => {
  return (
    <div>
      <div className="navbar">
        <img className="logo" src={logo}></img>
        <ul className="navbar-list">
          <li>Men</li>
          <li>Women</li>
          <li>Boys</li>
          <li>Girls</li>
        </ul>
        <input
          className="search"
          type="search"
          id="search"
          placeholder="Search..."
        />
        <img className="searchSvg" src={searchSvg}></img>

        <div className="icons">
          <img className="heart" src={heart}></img>
          <img className="basket" src={basket}></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
