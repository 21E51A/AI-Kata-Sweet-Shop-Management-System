import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

export default function Products() {
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get("/products").then((res) => setList(res.data));
  }, []);

  const remove = async (id) => {
    await api.delete(`/products/${id}`);
    setList(list.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h2>Products</h2>
      <Link to="/products/new">+ Add Product</Link>

      {list.map((p) => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>Price: ₹{p.price}</p>
          <Link to={`/products/${p.id}`}>Edit</Link>
          <button onClick={() => remove(p.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
