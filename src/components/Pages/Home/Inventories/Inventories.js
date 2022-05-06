import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

const Inventories = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);
  return (
    <div>
      <h3>{inventories.length}</h3>
    </div>
  );
};

export default Inventories;
