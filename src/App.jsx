import React from "react";
import { MainLayout } from "./layout";
import { Route, Routes } from "react-router";
import HomePage from "./pages/CreateProduct";
import { CreateCategory, ManageCategory, ManageProduct } from "./pages";
import { ProductProvider } from "./productsContext";

const App = () => {
  return (
    <ProductProvider>
      <MainLayout>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/manage-product" element={<ManageProduct />} />
          <Route path="/create-category" element={<CreateCategory />} />
          <Route path="/manage-category" element={<ManageCategory />} />
        </Routes>
      </MainLayout>
    </ProductProvider>
  );
};

export default App;
