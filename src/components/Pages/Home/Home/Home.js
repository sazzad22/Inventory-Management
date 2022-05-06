import React from "react";
import Banner from "../Banner/Banner";
import FreeTrial from "../FreeTrial/FreeTrial";
import Inventories from "../Inventories/Inventories";
import Transactions from "../Transactions/Transactions";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventories></Inventories>
      <Transactions></Transactions>
      <FreeTrial></FreeTrial>
    </div>
  );
};

export default Home;
