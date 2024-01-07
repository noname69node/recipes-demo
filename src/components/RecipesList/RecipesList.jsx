import "./RecipeList.css";
import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import { Link } from "react-router-dom";

const RecipesList = () => {
  return (
    <section className="recipe-list container mb-5">
      <div className="d-flex justify-content-between align-items-end mb-5">
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

      <div className="recipes-list row row-cols-1 row-cols-md-3 g-5">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </section>
  );
};

export default RecipesList;
