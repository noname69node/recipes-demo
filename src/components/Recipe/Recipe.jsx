import "./Recipe.css";
import React, { useEffect, useState } from "react";
import { BarChartFill, Clock, PeopleFill } from "react-bootstrap-icons";
import { Link, useParams } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);

  const getIngredients = () => {
    const ingredientsAndMeasures = [];

    for (let i = 1; i <= 20; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;

      const ingredient = recipe[ingredientKey];
      const measure = recipe[measureKey];

      if (ingredient && measure) {
        ingredientsAndMeasures.push(
          <li key={i} className="list-group-item">
            {ingredient} - {measure}
          </li>
        );
      }
    }
    return ingredientsAndMeasures;
  };

  const getInstructions = () => {
    if (!recipe || !recipe.strInstructions) {
      console.error("Recipe or strInstructions is undefined.");
      return "";
    }

    const formattedInstructions = recipe.strInstructions
      .split("\r\n")
      .map((paragraph, index) => <p key={index}>{paragraph}</p>);

    return formattedInstructions;
  };

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
      );
      const data = await response.json();
      console.log(data.meals[0]);
      setRecipe(data.meals[0]);
    };
    fetchAPI();
  }, [id]);

  return (
    <section className="recipe container mb-5">
      <h1 className="container">{recipe.strMeal}</h1>
      <div className="container center-cropped position-relative">
        <img src={recipe.strMealThumb} alt="" />
        <div className="card-info position-absolute w-100 d-flex">
          <div>
            <Clock />
            <span>time</span>
          </div>
          <div>
            <PeopleFill />
            <span>serve</span>
          </div>
          <div>
            <BarChartFill />
            <span>level</span>
          </div>
        </div>
      </div>

      <div className="container">
        <h3>Ingredients</h3>
        <ul className="list-group list-group-flush">{getIngredients()}</ul>
      </div>
      <div className="container">
        <h3>Instructions</h3>
        {getInstructions()}
      </div>
      <Link to={`/category/${recipe.strCategory}`}>{recipe.strCategory}</Link>
    </section>
  );
};

export default Recipe;
