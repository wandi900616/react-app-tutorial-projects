import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    loading: false,
    cart: [],
    total: 20.0,
    amount: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [cart, setCart] = useState(initialState);//no need
  // const [cart, setCart] = useState(cartItems);
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const changeAmount = (id, change) => {
    dispatch({ type: "CHANGE_AMOUNT", payload: { id, change } });
  };

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cartData = await response.json();

    dispatch({ type: "DISPLAY_ITEMS", payload: cartData });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        // ...cart,wrong. actually pass the state define by useReducer
        // just spread all the props in cart stateValue in provider
        ...state,
        clearCart,
        removeItem,
        changeAmount,
      }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
