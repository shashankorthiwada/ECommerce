import { useCart } from "../Contexts/cart-context";
import { useTheme } from "../Contexts/theme-context";

export const Cart = () => {
  const { itemsInCart } = useCart();
  const { theme } = useTheme();
  return (
    <div>
      {itemsInCart.length !== 0 ? (
        itemsInCart.map((item) => (
          <div
            key={item.id}
            style={{
              border: `1px solid ${theme.color}`,
              margin: "1rem",
              padding: "1rem",
            }}
          >
            <h2>{item.name}</h2>
            <p>Rs. {item.price} in Kg</p>
          </div>
        ))
      ) : (
        <p>Cart is Empty Add Some Delicious Sweets...</p>
      )}
    </div>
  );
};
