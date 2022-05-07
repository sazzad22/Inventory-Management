import React from "react";
import { useNavigate } from "react-router-dom";

const Inventory = ({ inventory }) => {
  const navigate = useNavigate();
  const { _id, name, price, img, shortDescription,quantity,seller } = inventory;
  
  const handleManage = id => {
    navigate(`/inventory/${id}`)
    console.log('clicked');
  }
  return (
    <div className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md  group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={img}
          alt=""
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className=" text-sky-800">
            
              <span  className=" inset-0" />
              {name}
            
          </h3>
          <p className="my-1 text-sm text-gray-500">
            {shortDescription}
          </p>

          <p className="my-1 text-sm font-medium text-gray-900">Price:{price}</p>
          <p className="my-1 text-sm font-medium text-gray-900">Quantity:{quantity}</p>
          <p className="my-1 text-sm font-medium text-gray-900">Supplier:{seller}</p>

          <button onClick={()=>handleManage(_id)} className="bg-sky-500 rounded-md px-2 py-1 text-white ">Update</button>
          
        </div>
        
      </div>
      
    </div>
  );
};

export default Inventory;
