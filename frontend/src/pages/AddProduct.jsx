import React, { useState } from "react";
import axios from "axios";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/api/products", {
      name,
      price: Number(price),
    });
    alert("Product created!");
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
