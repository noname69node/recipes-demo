import "./RecipeList.css";
import React, { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

const RecipesList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    async function fetchAPI() {
      const catResponse = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const catData = await catResponse.json();

      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=" +
          catData.categories[Math.floor(Math.random() * categories.length)]
            .strCategory
      );
      const data = await response.json();
      const shuffled = [...data.meals].sort(() => 0.5 - Math.random());
      console.log(data.meals);

      setRecipes(shuffled.slice(0, 6));
      setIsLoading(false);
    }
    fetchAPI();
  }, []);

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
        {isLoading ? (
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#f79f1a"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : (
          recipes &&
          recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))
        )}
      </div>
    </section>
  );
};

export default RecipesList;
