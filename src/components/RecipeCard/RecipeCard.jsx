import "./RecipeCard.css";
import React from "react";
import image from "../../img/1548772327.jpg";
import { BarChartFill, Clock, PeopleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const RecipeCard = () => {
  return (
    <div className="col mb-3">
      <div className="card shadow">
        <div className="position-relative">
          <img src={image} class="card-img-top" alt="..." />
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

        <div className="card-body">
          <h3 className="card-title">Card title</h3>
          <Link to="/" className="">
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
