import React, { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";
import { GiPhotoCamera } from "react-icons/gi";

const Sidenav = () => {
  
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }; 

  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link); 
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.clientHeight;
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveLink(section.id);
        }
      });
    };
  
    const totalHeight = document.body.scrollHeight;
    const scrollOffset = totalHeight * 0.001;
    window.scrollTo(0, scrollOffset);
  
    window.addEventListener("scroll", handleScroll);

    window.addEventListener("load", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, []);

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen top-0 bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            href="/#/home"
            onClick={() => setNav(!nav)}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            href="/#/projects"
            onClick={() => setNav(!nav)}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            href="/#/gallery"
            onClick={() => setNav(!nav)}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GiPhotoCamera size={20} />
            <span className="pl-4">Gallery</span>
          </a>
          <a
            href="/#/person"
            onClick={() => setNav(!nav)}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">About</span>
          </a>
        </div>
      ) : (
        ""
      )}

        <div className="md:block hidden fixed top-[86%] z-10 left-[35%]">
        <footer className="footer-content border bg-neutral-800/90 scale-75 rounded-full transform transition-transform duration-300 ease-in">
          <div className="flex flex-row">
            <a
              href="/#/home"
              onClick={() => handleLinkClick("home")}
              className={`${
                activeLink === "home"
                  ? "border-2 border-yellow-500 text-yellow-500 bg-white shadow-lg shadow-gray-400"
                  : "border-2 bg-white text-neutral-800/90"
              } rounded-full  m-3 p-3 cursor-pointer hover:scale-125 hover:-translate-y-4 transition hover:text-yellow-500 ease-in duration-300`}
              
            >
              <AiOutlineHome size={25}/>
            </a>
            <a
              href="/#/projects"
              onClick={() => handleLinkClick("projects")}
              className={`${
                activeLink === "projects"
                  ? "border-2 border-yellow-500 text-yellow-500 bg-white shadow-lg shadow-gray-400"
                  : "border-2 bg-white text-neutral-800/90"
              } rounded-full  m-3 p-3 cursor-pointer hover:scale-125 hover:-translate-y-4 hover:text-yellow-500 transition ease-in duration-300`}
              
            >
              <AiOutlineProject size={25}/>
            </a>
            <a
              href="/#/gallery"
              onClick={() => handleLinkClick("gallery")}
              className={`${
                activeLink === "gallery"
                  ? "border-2 border-yellow-500 text-yellow-500 bg-white shadow-lg shadow-gray-400"
                  : "border-2 bg-white text-neutral-800/90"
              } rounded-full  m-3 p-3 cursor-pointer hover:scale-125 hover:-translate-y-4 hover:text-yellow-500 transition ease-in duration-300`}
              
            >
              <GiPhotoCamera size={25}/>
            </a>
            <a
              href="/#/person"
              onClick={() => handleLinkClick("person")}
              className={`${
                activeLink === "person"
                  ? "border-2 border-yellow-500 text-yellow-500 bg-white shadow-lg shadow-gray-400"
                  : "border-2 bg-white text-neutral-800/90"
              } rounded-full  m-3 p-3 cursor-pointer hover:scale-125 hover:-translate-y-4 hover:text-yellow-500 transition ease-in duration-300`}
              
            >
              <BsPerson size={25}/>
            </a>
            <a
              href="/#/contact"
              onClick={() => handleLinkClick("contact")}
              className={`${
                activeLink === "contact"
                  ? "border-2 border-yellow-500 text-yellow-500 bg-white shadow-lg shadow-gray-400"
                  : "border-2 bg-white text-neutral-800/90"
              } rounded-full  m-3 p-3 cursor-pointer hover:scale-125 hover:-translate-y-4 hover:text-yellow-500 transition ease-in duration-300`}
              
            >
              <AiOutlineMail size={25}/>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Sidenav;
