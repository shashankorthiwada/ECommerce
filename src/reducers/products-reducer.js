export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return {
        ...state,
        sortBy: action.payload,
      };
    case "TOGGLE_INV":
      return (state = {
        ...state,
        inStock: !state.inStock,
      });
    case "TOGGLE_FAST_DELIVERY":
      return (state = {
        ...state,
        fastDelivery: !state.fastDelivery,
      });

    case "CLOSE_TOAST":
      return {
        ...state,
        toastMessage: action.payload,
      };
    case "SHOW_PRODUCTS":
      return { ...state, products: action.payload };

    default:
      return { state };
  }
};
