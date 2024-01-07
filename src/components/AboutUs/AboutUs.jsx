import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about container-fluid mb-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">Test</div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">About Us</h1>
                <p className="card-text">
                  Our recipes are the heart and soul of our culinary community,
                  and they reflect our commitment to providing you with
                  memorable and delightful dining experiences.
                </p>
                <Link to="/" className="btn btn-warning">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
