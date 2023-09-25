import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
      className=" flex flex-col px-4 lg:flex-row lg:gap-[220px] lg:items-center justify-center gap-4  my-10 lg:ml-[8vw] mb-16 lg:mr-[103px] lg:mt-24 border-t-2 border-b-2 "
    >
      <div className="flex flex-col tracking-wide gap-2 relative">
        
        <h2 className="text-7xl font-bold text-neutral-700 mt-6 lg:-mt-6">Contact.</h2>
        <h3 className="text-xl dev-gray">
          Get in touch with me via social media or email.
        </h3>
        <div className="flex flex-col gap-6 mt-6 items-start">
          <div className="flex gap-4 justify-center items-center">
          <a
            href=""
            className="px-2 py-2 bg-gray-900 text-white rounded-full transition-all duration-300 hover:opacity-80"
          >
            <FiGithub size={30} />
          </a>
          <span className="text-gray-900 font-semibold">GitHub</span>
          <a
            href=""
            className="px-2 py-2 bg-blue-die-link text-white rounded-full transition-all duration-300 ml-8 hover:opacity-80"
          >
            <FaLinkedinIn size={30} />
          </a>
          <span className="text-blue-die-link font-semibold">LinkedIn</span>
          </div>

          <div className="flex gap-4 justify-items-center items-center">
          <a
            href=""
            className="px-2 py-2 bg-blue-die-fb text-white rounded-full transition-all duration-300 hover:opacity-80"
          >
            <FaFacebookF size={30} />
          </a>
          <span className="text-blue-die-fb font-semibold">Facebook</span>
          <a
            href=""
            className="px-2 py-2 bg-pink-die-ig text-white rounded-full transition-all duration-300 ml-3 hover:opacity-80"
          >
            <FaInstagram size={30} />
          </a>
          <span className="text-pink-die-ig font-semibold">Instagram</span>
          
          </div>
        </div>
      </div>
      <div className="min-w-full lg:min-w-[500px]">
        
        <form
          className="flex flex-col ap-2"
          autoComplete="off"
          action="https://formsubmit.co/tecdellp@gmail.com"
          method="POST"
        >
          
          <div className="w-full mt-10">
            
            <label className="dev-gray text-sm mb-1">Name</label>
            <input
              id="c_name"
              placeholder="Write your name"
              name="c_name"
              className="hover:translate-x-1 mt-2 px-4 py-2 input w-full appearance-none border rounded-xl border-opacity-50 active:bg-gray-50 outline-none border-dev-gray-300 focus:shadow-md focus:dev-primary caret-dev-gray-900 transition-all duration-300"
            ></input>
            <label className="dev-gray text-sm mb-1">Email</label>
            <input
              id="c_name"
              placeholder="Write your email"
              name="c_name"
              className="hover:translate-x-1 mt-2 px-4 py-2 input w-full appearance-none border rounded-xl border-opacity-50 active:bg-gray-50 outline-none border-dev-gray-300 focus:shadow-md focus:dev-primary caret-dev-gray-900 transition-all duration-300"
            ></input>
            <label className="dev-gray text-sm mb-1">Message</label>
            <textarea
              id="c_name"
              placeholder="Write your message..."
              name="c_name"
              className="hover:translate-x-1 mt-2 px-4 py-2 input w-full appearance-none border rounded-xl border-opacity-30 active:bg-gray-50 outline-none border-dev-gray-300 focus:shadow-md focus:dev-primary caret-dev-gray-900 max-h-[200px] h-[150px] transition-all duration-300"
            ></textarea>
          </div>
          <div className="flex justify-end mt-4 mb-4">
            <button
              className="px-6 py-3 rounded-full bg-neutral-800 -translate-y-1 text-white transition-all duration-500 ease-out hover:translate-y-2 active:translate-y-1 text-lg uppercase flex flex-row gap-2 items-center mb-2 mt-2"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;