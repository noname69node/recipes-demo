import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import React from "react";

const Nav = () => {
  return (
    <div className="navbartop" id="navbar">
      <ul className="list-reset gap-5 d-none d-md-flex">
        <li className="">
          <NavLink className="" to="/">
            Home
          </NavLink>
        </li>
        <li className="">
          <NavLink className="" to="/category">
            Category
          </NavLink>
        </li>
        <li className="">
          <NavLink className="" to="/comunity">
            Comunity
          </NavLink>
        </li>
        <li className="">
          <NavLink className="" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
