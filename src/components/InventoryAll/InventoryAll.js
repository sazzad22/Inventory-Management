import React from 'react';

const InventoryAll = ({ inventory,handleDelete }) => {
    
    return (
        <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-500 hover:border-white">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                    {inventory.name}
                </th>
                <td className="px-6 py-4 text-gray-700">
                    {inventory.quantity}
                </td>
                <td className="px-6 py-4 text-gray-700">
                {inventory.category}

                </td>
                <td className="px-6 py-4 text-gray-700">
                {inventory.price}
                    
                </td>
                <td className="px-6 py-4 text-right">
                    <button onClick={()=>handleDelete(inventory._id)} className='text-red-500 hover:underline text-md font-bold' >Delete</button>
                </td>
            </tr>
    );
};

export default InventoryAll;