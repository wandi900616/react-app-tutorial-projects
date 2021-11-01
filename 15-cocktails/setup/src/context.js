import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("adggaggadada");
  const [cocktails, setCocktails] = useState([]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      // combine url with searchterm
      const { drinks } = await response.json();
      // console.log(drinks);
      if (drinks) {
        // setCocktails(drinks);
        // console.log(drinks);
        const newDrinksArr = drinks.map((drink) => {
          const {
            idDrink,
            strAlcoholic,
            strCategory,
            strDrink,
            strDrinkThumb,
            strGlass,
          } = drink;
          return {
            id: idDrink,
            category: strCategory,
            img: strDrinkThumb,
            glass: strGlass,
            alcoholic: strAlcoholic,
            name: strDrink,
          };
        });
        setCocktails(newDrinksArr);
      } else {
        setCocktails([]);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchData();
  }, [searchTerm, fetchData]);

  return (
    <AppContext.Provider
      value={{ loading, searchTerm, cocktails, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
