import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";

export default function OrderForm() {
  const { id } = useParams();
  const [order, setOrder] = useState({
    customer: "",
    items: [{ productId: "", quantity: 1 }],
  });

  useEffect(() => {
    if (id) api.get(`/orders/${id}`).then((res) => setOrder(res.data));
  }, [id]);

  const submit = async () => {
    if (id) await api.patch(`/orders/${id}`, order);
    else await api.post("/orders", order);
    window.location.href = "/orders";
  };

  return (
    <div>
      <h2>{id ? "Edit" : "New"} Order</h2>

      <input
        value={order.customer}
        placeholder="Customer"
        onChange={(e) => setOrder({ ...order, customer: e.target.value })}
      />

      <h3>Items</h3>

      {order.items.map((item, index) => (
        <div key={index}>
          <input
            placeholder="Product ID"
            value={item.productId}
            onChange={(e) =>
              updateItem(index, "productId", Number(e.target.value))
            }
          />
          <input
            placeholder="Qty"
            type="number"
            value={item.quantity}
            onChange={(e) =>
              updateItem(index, "quantity", Number(e.target.value))
            }
          />
        </div>
      ))}

      <button onClick={submit}>Save Order</button>
    </div>
  );

  function updateItem(i, key, value) {
    const updated = [...order.items];
    updated[i][key] = value;
    setOrder({ ...order, items: updated });
  }
}
