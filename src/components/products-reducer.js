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
        showAllInventory: !state.showAllInventory,
      });
    case "TOGGLE_FAST_DELIVERY":
      return (state = {
        ...state,
        showFastDelivery: !state.showFastDelivery,
      });
    default:
      return { state };
  }
};


