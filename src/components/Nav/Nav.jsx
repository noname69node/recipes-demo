import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import { PersonFill, Search } from "react-bootstrap-icons";

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await response.json();
      setCategories(data.categories);
    };
    fetchAPI();
  }, []);

  const navStyle = {
    backgroundColor: "none",
  };

  return (
    <nav className="navbar navbar-expand-lg " style={navStyle}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <Logo />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </Link>
              <ul className="dropdown-menu">
                {categories.map((category) => (
                  <li key={category.idCategory}>
                    <NavLink
                      className="dropdown-item"
                      to={`/category/${category.strCategory}`}
                    >
                      {category.strCategory}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/community">
                Community
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
          <div className="d-flex gap-3 pt-1">
            <Search color="black" size="20"></Search>
            <PersonFill color="black" size="24"></PersonFill>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
