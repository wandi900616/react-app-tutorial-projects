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
              <p className="item-text">{desc.substring(0, 10)}</p>
              <p>
                structure note: main.menu-item[img,div.item-info]. only two
                items in main.menu-item
              </p>
              <p>main.menu-item[style= display: grid; gap: 1rem 2rem;]</p>
              <p>div.item-info[header,p]</p>
              <p>header[h4,h4]</p>
              <p>
                header[style= display: flex; justify-content: space-between]
              </p>
            </div>
          </main>
        );
      })}
    </div>
  );
};

export default Categories;
