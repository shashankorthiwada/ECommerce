export function wishlistReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_WISH_LIST":
      return {
        ...state,
        visibleWishListItems: "visible",
        wishlistToastMessage: `${action.payload.name}  added to wishlist`,
        itemsInWishList: state.itemsInWishList.concat(action.payload),
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlistToastMessage: `${action.payload.name}  removed from wishlist`,
        itemsInWishList: state.itemsInWishList.filter(
          (item) => item._id !== action.payload._id
        ),
      };
    case "SHOW_WISHLIST_ITEMS":
      return { ...state, itemsInWishList: action.payload };

    case "CLOSE_TOAST":
      return {
        ...state,
        wishlistToastMessage: action.payload,
      };

    default:
      return { state };
  }
}
