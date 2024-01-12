import "./RecipeList.css";
import React, { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

const RecipesList = ({ category, searchData }) => {
  let cat = category;

  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    const fetchAPIRandomCategory = async () => {
      const catResponse = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const catData = await catResponse.json();

      return catData.categories[
        Math.floor(Math.random() * catData.categories.length)
      ].strCategory;
    };

    const fetchAPI = async () => {
      console.log(category, searchData);
      if (category === undefined && searchData.length === 0) {
        cat = await fetchAPIRandomCategory();
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + cat
        );

        const recData = await response.json();
        const shuffled = [...recData.meals].sort(() => 0.5 - Math.random());

        setRecipes(shuffled.slice(0, 6));
      } else if (searchData.length > 0) {
        setRecipes(searchData);
      }

      setIsLoading(false);
    };

    fetchAPI();
  }, [category]);

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

      <div className="container mb-5">
        <h2>
          {cat
            ? `Recipes from ${cat} category`
            : "Recipes from random category"}
        </h2>
      </div>

      <div className="recipes-list row row-cols-1 row-cols-md-3 g-5">
        {recipes &&
          recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
      </div>
    </section>
  );
};

export default RecipesList;
