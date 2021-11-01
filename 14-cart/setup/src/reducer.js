const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE_ITEM") {
    let NewCartArray = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: NewCartArray };
  }
  if (action.type === "CHANGE_AMOUNT") {
    let newCartArray = state.cart
      .map((item) => {
        if (item.id === action.payload.id) {
          let newAmount =
            item.amount + action.payload.change < 0
              ? 0
              : item.amount + action.payload.change;
          return { ...item, amount: newAmount };
        } else {
          return item;
        }
      })
      .filter((item) => item.amount !== 0);
    // technically it can return negative
    // but the state.cart.amount will reach 0 before negative, so it is removed before the process
    return { ...state, cart: newCartArray };
  }

  if (action.type === "GET_TOTALS") {
    let initialObject = { total: 0, amount: 0 }; //this will be return in reduce function

    var { total, amount } = state.cart.reduce((accumulated, current) => {
      // take the current object props in array
      const { price, amount } = current;
      //change the accumulated value
      accumulated.amount += amount;
      accumulated.total += price * amount;
      // return accumulated
      return accumulated;
    }, initialObject);
    var total = total.toFixed(2);
    // console.log(total);

    return { ...state, total, amount };
  }

  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }

  if ((action.type = "DISPLAY_ITEMS")) {
    return { ...state, cart: action.payload, loading: false };
  }

  return state;
};

export default reducer;
