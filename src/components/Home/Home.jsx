import "./Home.css";
import React, { useEffect, useState } from "react";
import Main from "../Main/Main";
import SearchRecipe from "../SearchRecipe/SearchRecipe";
import RecipesList from "../RecipesList/RecipesList";
import { useParams } from "react-router-dom";
import WeekRecipes from "../WeekRecipes/WeekRecipes";

const Home = () => {
  const { catName: paramCategory } = useParams();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    paramCategory || null
  );

  const [searchTerm, setSearchTerm] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
        );
        const data = await response.json();
        setCategories(data.meals.map((obj) => obj.strCategory));
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (paramCategory) {
      setSelectedCategory(paramCategory);
      setSearchTerm(null);
    } else if (categories.length > 0) {
      const rndIndex = Math.floor(Math.random() * categories.length);
      setSelectedCategory(categories[rndIndex]);
      setSearchTerm(null);
    }
  }, [categories, paramCategory]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setSelectedCategory(null);
  };

  return (
    <>
      <SearchRecipe onSearch={handleSearch} />
      <Main />
      <WeekRecipes />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (selectedCategory || searchTerm) && (
        <RecipesList category={selectedCategory} searchTerm={searchTerm} />
      )}
    </>
  );
};

export default Home;
