import React from "react";
import { Link } from "react-router-dom";

const WeekRecipes = () => {
  return (
    <div className="container d-flex justify-content-between align-items-end mb-3">
      <div>
        <h1>Discover, Create, Share </h1>
        <h4>Check our most popular recipes of this week</h4>
      </div>
      <div className="ms-auto align-self-center">
        <Link to="/" className="btn btn-warning btn-lg">
          See All
        </Link>
      </div>
    </div>
  );
};

export default WeekRecipes;
