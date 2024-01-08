import "./Footer.css";
import React from "react";
import Subscribe from "../Subscribe/Subscribe";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer container d-flex flex-row justify-content-between mb-5">
      <div className="links d-flex flex-row flex-fill">
        <div className="menu flex-fill">
          <h4>Menu</h4>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/recipes">Recipes</NavLink>
            </li>
            <li>
              <NavLink to="/community">Community</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="categories flex-fill">
          <h4>Categories</h4>
          <ul>
            <li>
              <Link to="/">1</Link>
            </li>
            <li>
              <Link to="/">2</Link>
            </li>
          </ul>
        </div>
        <div className="social flex-fill">
          <h4>Social media</h4>
          <ul>
            <li>
              <Link to="/">Facebook</Link>
            </li>
            <li>
              <Link to="/">Instagram</Link>
            </li>
          </ul>
        </div>
      </div>
      <Subscribe />
    </footer>
  );
};

export default Footer;
