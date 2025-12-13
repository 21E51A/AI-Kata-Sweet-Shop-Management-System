import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";

export default function ProductForm() {
  const { id } = useParams();
  const [data, setData] = useState({ name: "", price: "" });

  useEffect(() => {
    if (id) api.get(`/products/${id}`).then((res) => setData(res.data));
  }, [id]);

  const submit = async () => {
    if (id) await api.patch(`/products/${id}`, data);
    else await api.post("/products", data);
    window.location.href = "/products";
  };

  return (
    <div>
      <h2>{id ? "Edit" : "New"} Product</h2>

      <input value={data.name} placeholder="Name"
        onChange={(e) => setData({ ...data, name: e.target.value })} />

      <input value={data.price} placeholder="Price" type="number"
        onChange={(e) => setData({ ...data, price: +e.target.value })} />

      <button onClick={submit}>Save</button>
    </div>
  );
}
