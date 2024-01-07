import { Link } from "react-router-dom";
import "./Nav.css";
import React from "react";

const Nav = () => {
  return (
    <div className="navbartop" id="navbar">
      <ul className="list-reset gap-5 d-none d-md-flex">
        <li className="">
          <Link className="" to="/">
            Home
          </Link>
        </li>
        <li className="">
          <Link className="" to="/">
            Category
          </Link>
        </li>
        <li className="">
          <Link className="" to="/">
            Comunity
          </Link>
        </li>
        <li className="">
          <Link className="" to="/">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
