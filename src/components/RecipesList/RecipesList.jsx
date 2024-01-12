import "./RecipeList.css";
import React, { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

const RecipesList = ({ category, searchTerm }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const apiBaseURL = "https://www.themealdb.com/api/json/v1/1/";

        let apiUri = apiBaseURL;
        let slice = 6;

        if (searchTerm) {
          apiUri += `search.php?s=${searchTerm}`;
        }

        if (category) {
          apiUri += `filter.php?c=${category}`;
        }

        console.log("search: " + searchTerm);
        console.log("category: " + category);
        console.log(apiUri);

        const response = await fetch(apiUri);
        const data = await response.json();

        if (data.meals) {
          const shuffledRecipes = [...data.meals]
            .sort(() => 0.5 - Math.random())
            .slice(0, searchTerm ? data.meals.length : 6);

          setRecipes(shuffledRecipes);
        } else setRecipes([]);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, [category, searchTerm]);

  return (
    <div className="container mb-5">
      <h2 className="mb-3">{`Recipes from ${category} category`}</h2>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <div className="recipes-list row row-cols-1 row-cols-md-3 g-5">
        {recipes &&
          recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
      </div>
    </div>
  );
};

export default RecipesList;
