import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
const allCategories = ["all", ...new Set(items.map((data) => data.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategory] = useState(allCategories);

  const filterByCategory = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }

    const filteredMenuItems = items.filter(
      (data) => data.category === category
    );
    setMenuItems(filteredMenuItems);
  };

  return (
    <main>
      inside of main. main[main.'menu section']. which means there is main
      within main and the classes are .menu and .section
      <main className="menu section">
        inside of main.menu&section. main.menu&section[
        <strong>div.title</strong>,<strong>MenuComp</strong>,
        <strong>CategoriesComp</strong>]
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Menu categories={categories} filterByCategory={filterByCategory} />
        <Categories menu={menuItems} />
      </main>
    </main>
  );
}

export default App;
