import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({ name: "", price: "" });

  useEffect(() => {
    axios.get(`http://localhost:3000/api/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  const updateProduct = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:3000/api/products/${id}`, product);
    alert("Updated!");
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={updateProduct}>
        <input
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <input
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <button>Update</button>
      </form>
    </div>
  );
}
