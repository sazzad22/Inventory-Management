import React from 'react';
import Banner from '../Banner/Banner';
import FreeTrial from '../FreeTrial/FreeTrial';
import Transactions from '../Transactions/Transactions';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Banner></Banner>
            <Transactions></Transactions>
            <FreeTrial></FreeTrial>
        </div>
    );
};

export default Home;