import React from "react";
import Filters from "./components/Filters";
import Rentals from "./components/Rentals";

const Home = () => {
  return (
    <div className="sm:mx-6 md:mx-10 lg:mx-12 px-3">
      <Filters />
      <Rentals />
    </div>
  );
};

export default Home;
