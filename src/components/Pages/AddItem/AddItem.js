import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebse.init";

const AddItem = () => {
  const [user] = useAuthState(auth);

  const handleAddItem = (event) => {
      event.preventDefault();
      
    const newItem = {
      email: user.email,
      category: event.target.catagory?.value,
      name: event.target.name?.value,
      img: event.target.img?.value,
      quantity: event.target.quantity?.value,
      };
      console.log(newItem);
    
    const url = `http://localhost:5000/inventory`;
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
    <div className=" min-h-full flex items-center flex-col	 justify-center py-52 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold my-10 text-gray-600">Please add Informantion  about <span className="text-sky-500">your items</span></h2>
          <div>
          <img
              className="mx-auto mb-5 h-12 w-auto"
              src="https://i.ibb.co/qswzm8t/box.png"
              alt="Workflow"
            />
          </div>
      <form onSubmit={handleAddItem}>
        <input
          className="w-100 mb-2 rounded-xl border-blue-500"
          type="text"
          value={user?.email}
          name="email"
          placeholder="name"
          required
          readOnly
          
        />
        <br />
        <input
          className="w-100 mb-2 rounded-xl border-blue-500"
          type="text"
          name="catagory"
          placeholder="Product Catagory"
          required
        />
        <br />
        <input
          className="w-100 mb-2 rounded-xl border-blue-500"
          type="text"
          name="name"
          placeholder="Product Name"
          required
        />
        <br />
        <input
          className="w-100 mb-2 rounded-xl border-blue-500"
          type="text"
          name="img"
          placeholder="Image Link"
          required
        />
        <br />
        <input
          className="w-100 mb-2 rounded-xl border-blue-500"
          type="text"
          name="quantity"
          placeholder="Product quantity"
          required
        />
        <br />
        <input className="w-full bg-sky-500 rounded-xl py-2" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;
