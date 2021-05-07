import faker from "faker";

faker.seed(123);

export const items = [...Array(50)].map((item) => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  image: faker.random.image(),
  price: faker.commerce.price(),
  material: faker.commerce.productMaterial(),
  brand: faker.lorem.word(),
  inStock: faker.datatype.boolean(),
  fastDelivery: faker.datatype.boolean(),
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  offer: faker.random.arrayElement([
    "Epic Sale 40 - 70% Off",
    "Flat 50% Off",
    "Buy 2 Get 3",
  ]),
  color: faker.commerce.color(),
  quantity: 0,
  description: faker.commerce.productDescription(),
}));

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
    case "ADD_TO_CART":
      if (
        state.itemsInCart.find(
          (cartItem) => cartItem._id === action.payload._id
        )
      ) {
        return {
          ...state,
          visibleCartItems: "visible",
          toastMessage: `${action.payload.name} Added To Cart Succesfully`,
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
          toastMessage: `${action.payload.name} Added To Cart Succesfully`,
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
        itemsInCart: state.itemsInCart.filter(
          (cartItem) => cartItem._id !== action.payload._id
        ),
      };
    case "ADD_TO_WISH_LIST":
      return {
        ...state,
        visibleWishListItems: "visible",
        itemsInWishList: state.itemsInWishList.concat(action.payload),
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        itemsInWishList: state.itemsInWishList.filter(
          (item) => item._id !== action.payload._id
        ),
      };
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
