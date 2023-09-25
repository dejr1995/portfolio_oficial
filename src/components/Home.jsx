import React from "react";
import GridComponent from "./GridComponent";

const Home = () => {
  return (
    <section id="home" className="overflow-hidden h-screen">
      <div className="cursor-pointer relative top-0 left-0 w-[1311px] h-[649px]">
        <GridComponent />
      </div>
    </section>
  );
};

export default Home;
