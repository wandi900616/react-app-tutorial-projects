import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const data = useGlobalContext();
  const { openSidebar, openModal } = data;
  // it console.log value prop
  console.log(data);
  return (
    <main>
      <button className="sidebar-toggle" onClick={() => openSidebar()}>
        <FaBars />
      </button>
      <button className="btn" onClick={() => openModal()}>
        showModal
      </button>
    </main>
  );
};

export default Home;
