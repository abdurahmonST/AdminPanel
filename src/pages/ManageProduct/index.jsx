import React, { useState } from "react";

const ManageProduct = () => {
  const [products] = useState([]);

  return (
    <div className="bg-slate-200 p-6 h-full">
      <h1 className="text-2xl pb-6">Mahsulotlarni Boshqarish</h1>
      {products.length > 0 ? (
        <ul>
          {products.map((prod, index) => (
            <li key={index} className="mb-4">
              <strong>{prod.title}</strong> - {prod.price} - {prod.category}
            </li>
          ))}
        </ul>
      ) : (
        <p>Hech qanday mahsulot topilmadi.</p>
      )}
    </div>
  );
};

export default ManageProduct;
