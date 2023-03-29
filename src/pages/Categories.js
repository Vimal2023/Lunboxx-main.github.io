import React, { useState } from "react";
import "./Categories.css";
import Category from "../Components/Category";
const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("Lunch");

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  const renderCategoryComponent = () => {
    switch (selectedCategory) {
      case "Lunch":
        return (
          <Category
            selectedCategory={selectedCategory}
            name="Lunch"
            liteDesc="Small but Satisfying Meals for a Guilt Free Meal"
            regDesc="The Perfect amount of Food to Keep you going"
            megaDesc="The Ultimate Food Experience in one Mega Pack"
          />
        );
      case "Dinner":
        return (
          <Category
            selectedCategory={selectedCategory}
            liteDesc="Small but Satisfying Meals for a Guilt Free Meal"
            regDesc="The Perfect amount of Food to Keep you going"
            megaDesc="The Ultimate Food Experience in one Mega Pack"
            name="Dinner"
          />
        );
      case "both":
        return (
          <Category
            selectedCategory={selectedCategory}
            liteDesc="Small but Satisfying Meals for a Guilt Free Meal"
            regDesc="The Perfect amount of Food to Keep you going"
            megaDesc="The Ultimate Food Experience in one Mega Pack"
            // here selectedCategory = both NOT Lunch & Dinner
            name="Lunch & Dinner"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="cat-section-wrapper">
        <div className="cat-section-top">
          <h1 className="primary-sheading">Categories</h1>
        </div>
        <div className="">
          <div className="btnWrapper">
            <button onClick={() => handleClick("Lunch")}>Lunch</button>
            <button onClick={() => handleClick("Dinner")}>Dinner</button>
            <button onClick={() => handleClick("both")}>Both</button>
          </div>
          {renderCategoryComponent()}
        </div>
      </div>
    </div>
  );
};

export default Categories;
