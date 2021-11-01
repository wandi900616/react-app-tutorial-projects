import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  // current mouse location
  const [page, setPage] = useState({ page: "", links: [] });

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = (text, coordinate) => {
    const ChoosenPage = sublinks.find((object) => {
      return object.page === text;
    });

    setPage(ChoosenPage);

    setLocation(coordinate);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        location,
        page,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
