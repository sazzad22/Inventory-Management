import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InventoryDetail = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [inventory]);

  const handleReduceQuantity = () => {
    let quantity = inventory.quantity;
    quantity -= 1;

    const updatedInventory = { quantity };
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedInventory),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
      });
  };
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 m-32 rounded-md shadow-2xl">
      <div className="w-90 p-10 rounded-md">
        <img className="rounded-md" src={inventory.img} alt="" />
      </div>
      <div className="w-90 p-10 text-left">
        <h3 className="font-bold text-5xl text-gray-700 mb-2 ">
          {inventory.name}
        </h3>
        <p className="text-gray-700 font font-medium">
          Description:{" "}
          <span className="text-gray-800 font-mono font-semibold">
            {inventory.shortDescription}
          </span>{" "}
        </p>
        <p className="text-gray-700 font font-medium">
          Price: ${" "}
          <span className="text-gray-800 font-mono font-semibold">
            {inventory.price}
          </span>{" "}
        </p>

        <p className="text-gray-700 font font-medium">
          Seller:{" "}
          <span className="text-gray-800 font-mono font-semibold">
            {inventory.seller}
          </span>{" "}
        </p>
        <p className="text-gray-700 font font-medium">
          Catagory:{" "}
          <span className="text-gray-800 font-mono font-semibold">
            {" "}
            {inventory.catagory}
          </span>
        </p>
        <p className="text-gray-700 font font-medium">
          Available: <span className="text-gray-800">Yes</span>{" "}
        </p>
        <p className="text-gray-700 text-lg my-3 font-medium">
          Quantity:{" "}
          <span className="text-gray-800 font-mono font-semibold underline">
            {" "}
            {inventory.quantity}
          </span>
        </p>
        <button onClick={handleReduceQuantity}>delivered</button>
        <form action="">
          <input type="number" name="" id="" />
        </form>
      </div>
    </div>
  );
};

export default InventoryDetail;
