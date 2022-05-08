import React from 'react';

const Item = ({ item }) => {
    // console.log(item);
    return (
        <div className='flex justify-around lg:flex-row flex-col  my-4 shadow-2xl border rounded hover:border-sky-400  items-center	  '>
            <img className='w-48 h-48 my-5 rounded-lg' src={item.img} alt="" />
            <h1 className='text-xl my-3 lg:mx-4 mx-1 '>Product: <span className='font-semibold font-mono text-gray-700'>{item.name}</span> </h1>
            <h1 className='text-xl font -semibold my-3 lg:mx-4 mx-1'>Added By: <span className='font-semibold font-mono text-gray-700'>{item.email}</span> </h1>
            <h1 className='text-xl font -semibold my-3 lg:mx-4 mx-1'>Catogory: <span className='font-semibold font-mono text-gray-700'>{item.catagory}</span> </h1>
            <h1 className='text-xl font -semibold my-3 lg:mx-4 mx-1'>Quantity: <span className='font-semibold font-mono text-gray-700'>{item.quantity}</span> </h1>
        </div>
    );
};

export default Item;