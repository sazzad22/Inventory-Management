import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Inventory from "../Inventory/Inventory";

const Inventories = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch(" https://hidden-citadel-35575.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);
  return (
    <div className="bg-white my-5">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl py-16">
          We have a large variety of{" "}
          <span className="text-sky-600">vehicle inventories</span>
        </h1>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {inventories.slice(0, 6).map((inventory) => (
            <Inventory key={inventory._id} inventory={inventory}></Inventory>
          ))}
        </div>
      </div>
      <div className="  flex justify-center">
        <Link
          className="rounded-lg shadow-md bg-sky-500  py-3 text-white  font-medium hover:shadow-2xl px-32 w-50 hover:bg-sky-400"
          to={"/manageinventory"}
        >
          Manage Inventories
        </Link>
      </div>
    </div>
  );
};

export default Inventories;
