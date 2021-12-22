import { useAuthContext } from "../Contexts/auth-context";

export const UserDashBoard = () => {
  const {
    userDetails: { username, email },
  } = useAuthContext();

  return (
    <>
      <div
        style={{ border: "1px solid black", margin: "1rem", padding: "1rem" }}
      >
        <p>{username}</p>
        <p>{email}</p>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{ border: "1px solid black", margin: "1rem", padding: "1rem" }}
        >
          <p>Orders</p>
        </div>
        <div
          style={{ border: "1px solid black", margin: "1rem", padding: "1rem" }}
        >
          Wishlist
        </div>
        <div
          style={{ border: "1px solid black", margin: "1rem", padding: "1rem" }}
        >
          Saved Address
        </div>
      </div>
    </>
  );
};
