import React, { useState } from "react";

const HomePage = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    imageUrl: "",
    category: "",
    desc: "",
  });
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, product]);
    setProduct({ title: "", price: "", imageUrl: "", category: "", desc: "" });
  };

  return (
    <div className="bg-slate-200 p-6 h-full">
      <h1 className="text-2xl pb-6">Mahsulot Yaratish</h1>
      <form className="flex flex-col gap-2 w-100" onSubmit={handleSubmit}>
        <label>Sarlavha</label>
        <input
          name="title"
          value={product.title}
          onChange={handleChange}
          className="mb-4 bg-gray-300 p-2 rounded text-stone-950 outline-none"
          type="text"
        />
        <label>Narx</label>
        <input
          name="price"
          value={product.price}
          onChange={handleChange}
          className="mb-4 bg-gray-300 p-2 rounded text-stone-950 outline-none"
          type="text"
        />
        <label>Rasm-url</label>
        <input
          name="imageUrl"
          value={product.imageUrl}
          onChange={handleChange}
          className="mb-4 bg-gray-300 p-2 rounded text-stone-950 outline-none"
          type="text"
        />
        <label>Kategoriya</label>
        <select
          name="category"
          value={product.category}
          onChange={handleChange}
          className="mb-4 bg-gray-300 p-2 rounded text-stone-950 outline-none"
        >
          <option value="">Tanlash</option>
          <option value="expensive">Qimmat</option>
          <option value="cheap">Arzon</option>
        </select>
        <label>Tavsif</label>
        <textarea
          name="desc"
          value={product.desc}
          onChange={handleChange}
          className="mb-4 bg-gray-300 p-2 rounded text-stone-950 outline-none h-30"
        ></textarea>
        <button className="p-2 w-40 bg-zinc-700 rounded text-amber-50 cursor-pointer">
          Yaratish
        </button>
      </form>
    </div>
  );
};

export default HomePage;
