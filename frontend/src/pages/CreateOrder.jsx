import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CreateOrder() {
  const [customer, setCustomer] = useState("");
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const addItem = () => {
    setItems([...items, { productId: "", quantity: 1 }]);
  };

  const createOrder = async () => {
    await axios.post("http://localhost:3000/api/orders", {
      customer,
      items,
    });
    alert("Order placed!");
  };

  return (
    <div>
      <h2>Create Order</h2>
      <input
        placeholder="Customer Name"
        onChange={(e) => setCustomer(e.target.value)}
      />

      <button onClick={addItem}>Add Item</button>

      {items.map((item, idx) => (
        <div key={idx}>
          <select
            onChange={(e) =>
              (items[idx].productId = Number(e.target.value))
            }
          >
            <option value="">Select Product</option>
            {products.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>

          <input
            type="number"
            min="1"
            onChange={(e) =>
              (items[idx].quantity = Number(e.target.value))
            }
          />
        </div>
      ))}

      <button onClick={createOrder}>Submit Order</button>
    </div>
  );
}
