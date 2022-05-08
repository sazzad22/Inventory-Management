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
    },[])
    return (
        <div className='py-32 px-2 md:px-5 lg:px-10  flex flex-col min-h-screen'>
            <h2 className='mx-auto font-3xl lg:text-4xl font-bold text-gray-600'>Your Added Items</h2>
            <div className='grid grid-cols-1 gap-4 lg:mx-15 md:mx-5 sm:mx-2 p-1 lg:p-5'>
            {
                items.map(item => <Item
                    key={item.name}
                    item={item}
                
                ></Item>)
            }
            </div>
            
        </div>
    );
};

export default MyItem;