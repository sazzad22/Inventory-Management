import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebse.init";

const AddItem = () => {
  const [user] = useAuthState(auth);

  const handleAddItem = (event) => {
      event.preventDefault();
      
    const newItem = {
      email: user.email,
      catagory: event.target.catagory?.value,
      name: event.target.name?.value,
      img: event.target.img?.value,
      quantity: event.target.quantity?.value,
      };
      console.log(newItem);
    
    const url = `http://localhost:5000/item`;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="py-24  w-1/2`">
      <h2>Please add Informantion about your items</h2>
      <form onSubmit={handleAddItem}>
        <input
          className="w-100 mb-2"
          type="text"
          value={user?.email}
          name="email"
          placeholder="name"
          required
          readOnly
          
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="catagory"
          placeholder="Product Catagory"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="name"
          placeholder="Product Name"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="img"
          placeholder="Image Link"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="quantity"
          placeholder="Product quantity"
          required
        />
        <br />
        <input className="bg-sky-500 rounded" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;
