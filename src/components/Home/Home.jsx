import "./Home.css";
import React from "react";
import Main from "../Main/Main";
import SearchRecipe from "../SearchRecipe/SearchRecipe";
import RecipesList from "../RecipesList/RecipesList";
import { useParams } from "react-router-dom";

const Home = () => {
  const { catName } = useParams();

  return (
    <>
      <SearchRecipe />
      <Main />
      <RecipesList category={catName} />
    </>
  );
};

export default Home;
