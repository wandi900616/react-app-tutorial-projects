import React from "react";

const Menu = ({ categories, filterByCategory }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <p> inside of menu component. everything is wrapped in btn-container</p>
        <p>
          btn-container[style= margin-bottom: 4rem; display: flex;
          justify-content: center;]
        </p>
      </div>
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              className="filter-btn"
              onClick={() => filterByCategory(category)}>
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
