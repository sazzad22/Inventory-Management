import React from 'react';
import { Link } from 'react-router-dom';

const ManageInventory = () => {
    return (
        <div className='py-20 min'>


            <div className="  flex justify-center"><Link className="rounded-lg shadow-md bg-sky-500  py-3 text-white  font-medium hover:shadow-2xl px-32 w-50 hover:bg-sky-400" to={'/additem'}>
                  Add New Item
              </Link></div>

        </div>
    );
};

export default ManageInventory;
