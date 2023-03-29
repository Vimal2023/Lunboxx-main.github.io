import React, { useState } from "react";
import Card from "./Card";
const Category = ({ selectedCategory, name, liteDesc, regDesc, megaDesc }) => {
  return (
    <div className="categoryWrapper">
      <Card
        selectedCategory={selectedCategory}
        name={name}
        description={liteDesc}
        pack="Lite"
      />
      <Card
        selectedCategory={selectedCategory}
        name={name}
        description={regDesc}
        pack="Regular"
      />
      <Card
        selectedCategory={selectedCategory}
        name={name}
        description={megaDesc}
        pack="Mega"
      />
    </div>
  );
};

export default Category;
