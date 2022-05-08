import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebse.init';
import Item from '../../Item/Item';

const MyItem = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        const getItems = async () => {
            const url = `http://localhost:5000/item?email=${user.email}`;
            const { data } = await axios.get(url);
            // console.log(data);
            setItems(data)
        }
        getItems();
    }, []);

    const handleDelete = (id) => {
        console.log("clicked", id);
        const proceed = window.confirm("Are you sure");
        if (proceed) {
          const url = `http://localhost:5000/item/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              const remaining = items.filter((service) => service._id !== id);
              setItems(remaining);
            });
        }
          
      };
    

    return (
        <div className='py-32 px-2 md:px-5 lg:px-10  flex flex-col min-h-screen'>
            <h2 className='mx-auto font-3xl lg:text-4xl font-bold text-gray-600'>Your Added Items</h2>
            <div className='grid grid-cols-1 gap-4 lg:mx-15 md:mx-5 sm:mx-2 p-1 lg:p-5'>
            {
                items.map(item => <Item
                    key={item.name}
                    item={item}
                    handleDelete={handleDelete}
                
                ></Item>)
            }
            </div>
            
        </div>
    );
};

export default MyItem;