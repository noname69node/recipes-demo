import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
      );
      const data = await response.json();
      setRecipe(data.meals[0]);
      console.log(recipe);
    };
    fetchAPI();
  }, [id]);

  return (
    <section className="container mb-5">
      <h2>{recipe.strMeal}</h2>
      <div className="container">
        <img src={recipe.strMealThumb} alt="" />
        <Link to={`/category/${recipe.strCategory}`}>{recipe.strCategory}</Link>
        <div>{recipe.strInstructions}</div>
      </div>
    </section>
  );
};

export default Recipe;
