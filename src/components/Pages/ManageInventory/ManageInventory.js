import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InventoryAll from "../../InventoryAll/InventoryAll";
import Inventory from "../Home/Inventory/Inventory";

const ManageInventory = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch(" https://hidden-citadel-35575.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);

  const handleDelete = (id) => {
    // console.log("clicked", id);
    const proceed = window.confirm("Are you sure");
    if (proceed) {
      const url = ` https://hidden-citadel-35575.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = inventories.filter((service) => service._id !== id);
          setInventories(remaining);
        });
    }
  };

  return (
    <div className="py-20 min-h-screen">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-10 mx-1 lg:mx-16  ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 bg-gray-100 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3 ">
                <span className="text-gray-300">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {inventories.map((inventory) => (
              <InventoryAll
                key={inventory._id}
                inventory={inventory}
                handleDelete={handleDelete}
              ></InventoryAll>
            ))}
          </tbody>
        </table>
      </div>

      <div className="  flex justify-center">
        <Link
          className="rounded-lg shadow-md bg-sky-500  py-3 text-white  font-medium hover:shadow-2xl px-32 w-50 hover:bg-sky-400"
          to={"/additem"}
        >
          Add New Item
        </Link>
      </div>
    </div>
  );
};

export default ManageInventory;
