import React from "react";
import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className="fixed flex flex-col p-5 gap-2 text-xl bg-zinc-800 w-90 h-screen">
      <h1 className="text-3xl mb-10 font-semibold flex justify-center text-white">
        Admin Dashboard
      </h1>
      <NavLink
        className="hover:bg-zinc-600 transition-all p-1 rounded text-amber-50"
        to="/"
      >
        Create Product
      </NavLink>
      <NavLink
        className="hover:bg-zinc-600 transition-all p-1 rounded text-amber-50"
        to="/manage-product"
      >
        Manage Product
      </NavLink>
      <NavLink
        className="hover:bg-zinc-600 transition-all p-1 rounded text-amber-50"
        to="/create-category"
      >
        Create Category
      </NavLink>
      <NavLink
        className="hover:bg-zinc-600 transition-all p-1 rounded text-amber-50"
        to="/manage-category"
      >
        Manage Category
      </NavLink>
    </div>
  );
};

export default Sidebar;
