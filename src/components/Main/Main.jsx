import "./Main.css";
import React from "react";
import { Link } from "react-router-dom";
import main_logo from "../../img/main_logo.png";

const Main = () => {
  return (
    <main className="main container d-flex flex-row justify-content-between mb-5">
      <div className="">
        <h2>Cooking Made Fun and Easy: Unleash Your Inner Chef</h2>
        <p>
          Discover more than 10,000 recipes in your hand with the best recipe.
          Help you to find the easiest way to cook.
        </p>
        <Link className="btn btn-warning btn-lg" to="/">
          Explore Recepies
        </Link>
      </div>
      <div className="">
        <img src={main_logo} className="w-100" alt="" />
      </div>
    </main>
  );
};

export default Main;
