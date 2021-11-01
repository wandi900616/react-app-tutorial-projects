import React from "react";

const Categories = ({ menu }) => {
  return (
    <div className="section-center">
      {menu.map((item) => {
        const { id, title, img, price, desc } = item;

        return (
          <main key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </main>
        );
      })}
    </div>
  );
};

export default Categories;
