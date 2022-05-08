import React from 'react';

const Item = ({ item,handleDelete }) => {
    // console.log(item);
    return (
        <div className='flex justify-around lg:flex-row flex-col  my-4 shadow-2xl border rounded hover:border-sky-400  items-center	  '>
            <img className='w-48 h-48 my-5 rounded-lg' src={item.img} alt="" />
            <h1 className='text-xl my-3 lg:mx-4 mx-1 '>Product: <span className='font-semibold font-mono text-gray-700'>{item.name}</span> </h1>
            <h1 className='text-xl font -semibold my-3 lg:mx-4 mx-1'>Added By: <span className='font-semibold font-mono text-gray-700'>{item.email}</span> </h1>
            <h1 className='text-xl font -semibold my-3 lg:mx-4 mx-1'>Category: <span className='font-semibold font-mono text-gray-700'>{item.category}</span> </h1>
            <h1 className='text-xl font -semibold my-3 lg:mx-4 mx-1'>Quantity: <span className='font-semibold font-mono text-gray-700'>{item.quantity}</span> </h1>
            <button onClick={()=>handleDelete(item._id)} className='text-red-500 hover:shadow-xl text-md font-bold border border-red-600 py-1 px-4' >Delete</button>
        </div>
    );
};

export default Item;