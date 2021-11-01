import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const [columns, setColumns] = useState("col-2");

  useEffect(() => {
    setColumns("col-2");

    if (links.length === 3) {
      setColumns("col-3");
      return;
    }
    if (links.length > 3) {
      setColumns("col-4");
      return;
    }
  }, [links]);

  const container = useRef(null);

  useEffect(() => {
    // console.log(container.current);
    const target = container.current;
    const { center, bottom } = location;
    target.style.left = `${center}px`;
    target.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside className={`submenu${isSubmenuOpen ? ` show` : ``}`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { icon, label, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
