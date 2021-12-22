export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (
        state.itemsInCart.find(
          (cartItem) => cartItem._id === action.payload._id
        )
      ) {
        return {
          ...state,
          visibleCartItems: "visible",
          cartToastMessage: `${action.payload.name} Added To Cart Succesfully`,
          itemsInCart: state.itemsInCart.map((cartItem) =>
            cartItem._id === action.payload._id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      } else {
        return {
          ...state,
          visibleCartItems: "visible",
          cartToastMessage: `${action.payload.name} Added To Cart Succesfully`,
          itemsInCart: state.itemsInCart.concat({
            ...action.payload,
            quantity: 1,
          }),
        };
      }

    case "DECREASE_QTY":
      return {
        ...state,
        itemsInCart: state.itemsInCart.map((cartItem) =>
          cartItem._id === action.payload._id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        ),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartToastMessage: `${action.payload.name} Removed From Cart`,
        itemsInCart: state.itemsInCart.filter(
          (cartItem) => cartItem._id !== action.payload._id
        ),
      };
    case "SHOW_CART_ITEMS":
      return { ...state, itemsInCart: action.payload };

    case "CLOSE_TOAST":
      return {
        ...state,
        cartToastMessage: action.payload,
      };

    default:
      return { state };
  }
};
