import React from "react";
import ColumnL from "./ColumnL";
import ColumnC from "./ColumnC";
import ColumnR from "./ColumnR";
import { IoOpenOutline } from "react-icons/io5";
const Projects = () => {
  return (
    <section id="projects" className="grid lg:grid-cols-3 lg:grid-rows-1 relative">
      <div className="flex flex-col">
        <div className="border border-gray-300 rounded-lg lg:mt-2 mt-10 mr-1 ml-2">
          <div className="h-[215px] m-1 rounded-lg bg-neutral-800 flex justify-center items-center overflow-hidden">
            <div className="container">
              <div className="box cursor-pointer">
                <img src="https://rauno.me/_next/image?url=%2Fstatic%2Fphotos%2F62.jpg&w=640&q=75" />
              </div>
              <div className="box cursor-pointer">
                <img src="https://i.imgur.com/MQMNHCD.jpg" />
              </div>
              <div className="box cursor-pointer">
                <img src="https://i.imgur.com/MQMNHCD.jpg" />
              </div>
              <div className="box cursor-pointer">
                <img src="https://i.imgur.com/MQMNHCD.jpg" />
              </div>
              <div className="box cursor-pointer">
                <img src="https://rauno.me/_next/image?url=%2Fstatic%2Fphotos%2F62.jpg&w=640&q=75" />
              </div>
            </div>
          </div>
          <a href="/gallery">
            <div className="bg-gray-100 m-1 h-[40px] rounded-lg flex justify-center items-center text-yellow-600 gap-2">
              Read Gallery
              <IoOpenOutline />
            </div>
          </a>
        </div>
        <ColumnL />
      </div>
      <div className="flex w-auto">
        <ColumnC />
      </div>
      <div className="flex w-auto">
        <ColumnR />
      </div>
    </section>
  );
};

export default Projects;
