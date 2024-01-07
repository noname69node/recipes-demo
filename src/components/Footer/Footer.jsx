import React from "react";
import Subscribe from "../Subscribe/Subscribe";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container d-flex flex-row justify-content-between">
      <div className="links d-flex flex-row flex-fill">
        <div className="menu flex-fill">
          <h4>Menu</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Recipes</Link>
            </li>
            <li>
              <Link to="/">Comunity</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="categories flex-fill">
          <h4>Categories</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Recipes</Link>
            </li>
          </ul>
        </div>
        <div className="social flex-fill">
          <h4>Social media</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Recipes</Link>
            </li>
          </ul>
        </div>
      </div>
      <Subscribe />
    </footer>
  );
};

export default Footer;
