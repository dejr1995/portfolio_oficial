import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { IoOpenOutline } from "react-icons/io5";

const ProjectItem3 = ({ img, title }) => {
  return (
    <div className="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-2xl col-span-3 lg:col-span-2 h-[10rem] lg:h-[20rem]">
      <img
        src={img}
        alt="/"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-xl"
      />
      <div className="absolute group-hover:block inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[62%] flex-col items-center justify-center transition-all duration-500 group-hover:translate-y-0">
        <div className="mt-auto m-4 flex flex-col items-start justify-center self-start">
          <h3 className="text-xl font-bold text-white tracking-wider text-center pb-2">
            {title}
          </h3>
          <div className="flex flex-col gap-2">
            <div className="border-2 border-white rounded-full text-white text-sm capitalize px-4 h-5 flex items-center">
              Next.js
            </div>
            <div className="border-2 border-white rounded-full text-white text-sm capitalize px-4 h-5 flex items-center">
              Unite 3D
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex translate-x-[62%] flex-col items-center justify-center transition-all duration-500 group-hover:translate-x-0">
        <div className="self-end flex flex-col h-full items-center justify-between p-6">
          <div className=" text-white flex items-center cursor-pointer">
            <IoOpenOutline size={25} />
          </div>
          <div className=" text-white flex items-center cursor-pointer">
            <AiOutlineGithub size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem3;
