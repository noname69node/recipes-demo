import "./Logo.css";
import React from "react";
import logo from "../../img/logo.svg";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="..." />
      Recipedia
    </div>
  );
};

export default Logo;
