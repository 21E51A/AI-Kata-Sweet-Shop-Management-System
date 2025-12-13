import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: 20, background: "#eee" }}>
      <Link to="/products" style={{ marginRight: 20 }}>Products</Link>
      <Link to="/orders" style={{ marginRight: 20 }}>Orders</Link>
      <Link to="/create-order" style={{ marginRight: 20 }}>Create Order</Link>
      <Link to="/login">Logout</Link>
    </nav>
  );
}
