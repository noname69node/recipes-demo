import "./Home.css";
import React from "react";
import Main from "../Main/Main";
import SearchRecipe from "../SearchRecipe/SearchRecipe";
import RecipesList from "../RecipesList/RecipesList";

const Home = () => {
  return (
    <>
      <SearchRecipe />
      <Main />
      <RecipesList />
    </>
  );
};

export default Home;
