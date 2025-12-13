import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

export default function Orders() {
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get("/orders").then((res) => setList(res.data));
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      <Link to="/orders/new">+ Create Order</Link>

      {list.map((o) => (
        <div key={o.id}>
          <h3>Order #{o.id}</h3>
          <p>Customer: {o.customer}</p>
          <Link to={`/orders/${o.id}`}>View / Edit</Link>
        </div>
      ))}
    </div>
  );
}
