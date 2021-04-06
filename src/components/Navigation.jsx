import { useRoute } from "../Contexts/route-context";

export const Navigation = () => {
  const { setRoute } = useRoute();
  return (
    <nav
      className="nav-section"
      style={{ textAlign: "right", backgroundColor: "#5A4041" }}
    >
      <ul>
        <li className="list-item-inline">
          <i
            className="fas fa-heart"
            style={{ color: "whitesmoke", cursor: "pointer" }}
          ></i>
        </li>
        <li className="list-item-inline">
          <i
            className="fas fa-shopping-bag"
            style={{ color: "whitesmoke", cursor: "pointer" }}
            onClick={() => setRoute("cart")}
          ></i>
        </li>
      </ul>
    </nav>
  );
};
