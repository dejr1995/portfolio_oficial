import React, { useEffect, useState } from "react";
import ColumnL from "./ColumnL";
import ColumnC from "./ColumnC";
import ColumnR from "./ColumnR";
import { IoOpenOutline } from "react-icons/io5";
import cajamarca from "../assets/images/cajamarca.jpg";
import huaraz from "../assets/images/huaraz.jpg";
import trujillo from "../assets/images/trujillo.jpg";
import ica from "../assets/images/ica.jpg";
import iquitos from "../assets/images/iquitos.jpg";
const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showComponent = () => {
      setIsVisible(true);
    };

    showComponent(); 

    return () => {
      setIsVisible(false); 
    };
  }, []);

  return (
    <section
      id="projects"
      className="grid lg:grid-cols-3 lg:grid-rows-1 relative overflow-hidden"
    >
      <div className="flex flex-col">
        <div className="border border-gray-300 rounded-lg lg:mt-2 mt-10 mr-1 ml-2">
          <div className="h-[215px] m-1 rounded-lg bg-neutral-800 flex justify-center items-center overflow-hidden">
            <div className="container">
              {isVisible && (
                <div className="box cursor-pointer animated-slide-in-right1">
                  <img src={cajamarca} />
                </div>
              )}
              {isVisible && (
                <div className="box cursor-pointer animated-slide-in-right2">
                  <img src={huaraz} />
                </div>
              )}
              {isVisible && (
                <div className="box cursor-pointer animated-slide-in-right3">
                  <img src={trujillo} />
                </div>
              )}
              {isVisible && (
                <div className="box cursor-pointer animated-slide-in-right4">
                  <img src={ica} />
                </div>
              )}
              {isVisible && (
                <div className="box cursor-pointer animated-slide-in-right5">
                  <img src={iquitos} />
                </div>
              )}
            </div>
          </div>
          <a href="/#/gallery">
            <div className="bg-gray-100 m-1 h-[40px] rounded-lg flex justify-center items-center text-yellow-600 gap-2">
              View Gallery
              <IoOpenOutline />
            </div>
          </a>
        </div>
        
        <div className="flex w-auto">
          <ColumnL />
        </div>
        
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
