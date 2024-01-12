import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchReipe = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipeSuggestions, setRecipeSuggestions] = useState([]);
  const navigation = useNavigate();

  const fetchRecipes = async (value) => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=" + value
    );
    const data = await response.json();

    setRecipeSuggestions(data.meals || []);
  };

  const handleInputChange = (e) => {
    fetchRecipes(e.target.value);
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.length > 0) {
      onSearch(searchTerm);
    } else {
      onSearch("beef");
    }
    navigation("/");
  };

  return (
    <div className="container mb-5">
      <div className="row mx-auto gap-2">
        <input
          type="text"
          className="form-control col"
          list="list-recipes"
          onChange={handleInputChange}
        />
        <button className="btn col-auto btn-warning" onClick={handleSearch}>
          Search
        </button>
        <datalist id="list-recipes">
          {recipeSuggestions.map((item) => (
            <option key={item.idMeal}>{item.strMeal}</option>
          ))}
        </datalist>
      </div>
    </div>
  );
};

export default SearchReipe;
