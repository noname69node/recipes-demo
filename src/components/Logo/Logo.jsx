import "./Logo.css";
import React from "react";
import logo from "../../img/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="..." />
      Recipedia
    </div>
  );
};

export default Logo;
