import { useCart } from "../Contexts/cart-context";

export const CartHeader = () => {
  const { itemsInCart } = useCart();
  return <h3>Items in Cart {itemsInCart.length}</h3>;
};
