import React from "react";
import { FaDocker, FaNodeJs } from "react-icons/fa";
import { DiHtml5, DiCss3 } from "react-icons/di";
import { BsBootstrapFill, BsGithub } from "react-icons/bs";
import { SiJavascript, SiReact, SiTailwindcss } from "react-icons/si";
import { BiLogoMongodb, BiLogoRedux } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import yo from "../assets/images/yo.jpg";
import Contact from "./Contact";

const Iam = () => {
  return (
    <section
      id="person"
      className="lg:py-16 px-4 lg:px-0 flex flex-col lg:items-center py-10 lg:ml-[8vw] lg:mr-[103px] overflow-hidden"
    >
      <span className="border w-full -mt-8"></span>
      <div className="flex flex-col lg:flex-row lg:justify-center w-full gap-10 lg:gap-[150px] lg:mt-10 lg:mb-2 lg:ml-4">
        <div className="relative">
          
          <h2 className="text-7xl font-bold text-neutral-700 lg:-ml-4">About.</h2>

          <div className="flex flex-row gap-2 mt-8 text-sm lg:text-md lg:ml-4">
            <span className="border border-gray-700 dev-gray px-4 py-1 rounded-full">
              Front-End Developer
            </span>
            <span className="border border-gray-700 dev-gray px-4 py-1 rounded-full">
              Back-End Developer
            </span>
          </div>
          {/*<div className="flex flex-row items-center gap-4 mt-8">
           <a
                href=""
                className="w-fit relative bg-neutral-600 bg-opacity-20 px-4 rounded-full transition-all duration-300 text-xs py-2 flex flex-row gap-2 mt-2 before:w-0 before:transition-all before:duration-300 before:left-0 overflow-hidden hover: before:top-0 hover:before:w-full before:absolute before:bg-neutral-800 before:z-[-1] before:h-full z-[1] hover:text-white"
              >
                "Download Resume "
                <AiOutlineDownload size={15} />
          </a> 
          </div>*/}
          <p className="dev-gray my-8 block md:hidden tracking-wide text-md">
            "Systems engineering and computer science graduate with development
            capacity in web and mobile applications, making use of different
            programming languages ​​and with knowledge in handling different
            frameworks, fond of learning about the use of new technologies such
            as machine learning seeking to improve each project."
          </p>
          <div className="mx-auto lg:ml-14 rounded-2xl relative overflow-hidden -z-20 w-fit mt-8">
            <img
              alt="Diego Jara"
              sizes="(max-width: 768px) 60vw, (max-width: 1200px) 50vw, 33vw"
              srcSet={yo}
              width="833"
              height="1116"
              decoding="async"
              data-nimg="1"
              className="w-[20rem] lg:w-[15rem] h-[18rem] lg:h-[15rem] object-left-top object-cover rounded-2xl block z-20"
            />
          </div>
        </div>
        <div className="lg:w-[38%] flex-col justify-center gap-6 lg:mt-4 lg:mr-16">
          <p className="dev-gray hidden lg:block tracking-wide text-md mt-4">
            Hey there! 👋 My name is Dewitt Chavez, and I'm a Front-End
            Developer with 3 years of experience under my belt. But that's not
            all – I'm also fueled by my passion for User Interface Design. My
            mission is to craft visually captivating websites and applications
            that empower businesses and individuals to reach new heights.
          </p>
          <h3 className="text-2xl lg:text-lg text-center lg:text-left text-yellow-600 font-semibold mt-4">
            My Skills
          </h3>
          <div className="div-skills w-full h-full mt-4">
            <div className="lg:ml-6 grid lg:grid-cols-6 lg:grid-rows-1 grid-cols-3 grid-rows-2 gap-6">
              <div className="element1 flex flex-col justify-center items-center bg-gray-50 rounded-md py-2 px-4 gap-2">
                <DiHtml5
                  size={30}
                  className=" text-dev-gray-900 hover:scale-110 hover:text-orange-600"
                />
                <span className="text-dev-gray-100">HTML</span>
              </div>
              <div className="element2 flex flex-col justify-center items-center bg-gray-50 rounded-md py-2 px-4 gap-2">
                <BsBootstrapFill
                  size={30}
                  className=" text-dev-gray-900 hover:scale-110 hover:text-violet-700"
                />
                <span className="text-dev-gray-100">Bootstrap</span>
              </div>
              <div className="element3 flex flex-col justify-center items-center bg-gray-50 rounded-md py-2 px-4 gap-2">
                <DiCss3
                  size={30}
                  className=" text-dev-gray-900 hover:scale-110 hover:text-sky-600"
                />
                <span className="text-dev-gray-100">CSS</span>
              </div>
              <div className="element4 flex flex-col justify-center items-center bg-gray-50 rounded-md py-2 px-4 gap-2">
                <SiTailwindcss
                  size={30}
                  className=" text-dev-gray-900 hover:scale-110 hover:text-sky-800"
                />
                <span className="text-dev-gray-100">Tailwindcss</span>
              </div>

              <div className="element5 flex flex-col justify-center items-center bg-gray-50 rounded-md py-2 px-4 gap-2">
                <SiReact
                  size={30}
                  className=" text-dev-gray-900 hover:scale-110 hover:text-sky-500"
                />
                <span className="text-dev-gray-100">React</span>
              </div>
              <div className="element6 flex flex-col justify-center items-center bg-gray-50 rounded-md py-2 px-4 gap-2">
                <BiLogoRedux
                  size={30}
                  className=" text-dev-gray-900 hover:scale-110 hover:text-purple-600"
                />
                <span className="text-dev-gray-100">Redux</span>
              </div>
              <div className="element7 flex flex-col justify-center items-center bg-gray-50 rounded-md py-2 px-4 gap-2">
                <SiJavascript
                  size={30}
                  className=" text-dev-gray-900 hover:scale-110 hover:text-yellow-500"
                />
                <span className="text-dev-gray-100">JavaScript</span>
              </div>
              <div className="element8 flex flex-col justify-center items-center bg-gray-50 rounded-md py-2 px-4 gap-2">
                <GrMysql
                  size={30}
                  className=" text-dev-gray-900 hover:scale-110 hover:text-blue-400"
                />
                <span className="text-dev-gray-100">MySql</span>
              </div>
              <div className="element9 flex flex-col justify-center items-center bg-gray-50 rounded-md py-2 px-4 gap-2">
                <FaNodeJs
                  size={30}
                  className=" text-dev-gray-900 hover:scale-110 hover:text-green-700"
                />
                <span className="text-dev-gray-100">NodeJs</span>
              </div>
              <div className="element10 flex flex-col justify-center items-center bg-gray-50 rounded-md py-2 px-4 gap-2">
                <BiLogoMongodb
                  size={30}
                  className=" text-dev-gray-900 hover:scale-110 hover:text-green-900"
                />
                <span className="text-dev-gray-100">MongoDb</span>
              </div>
              <div className="element11 flex flex-col justify-center items-center bg-gray-50 rounded-md py-2 px-4 gap-2">
                <BsGithub
                  size={30}
                  className=" text-dev-gray-900 hover:scale-110 hover:text-gray-900"
                />
                <span className="text-dev-gray-100">GitHub</span>
              </div>
              <div className="element12 flex flex-col justify-center items-center bg-gray-50 rounded-md py-2 px-4 gap-2">
                <FaDocker
                  size={30}
                  className=" text-dev-gray-900 hover:scale-110 hover:text-sky-600"
                />
                <span className="text-dev-gray-100">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </section>
  );
};

export default Iam;
