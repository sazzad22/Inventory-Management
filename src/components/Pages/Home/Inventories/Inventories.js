import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Inventory from "../Inventory/Inventory";

const Inventories = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);
  return (
    <div className="bg-white my-5">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl py-16">We have a large variety of <span className="text-sky-600">vehicle inventories</span></h1>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {inventories.slice(0, 6).map((inventory) => (
            <Inventory key={inventory._id} inventory={inventory}></Inventory>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventories;
