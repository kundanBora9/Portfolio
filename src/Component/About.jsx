import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import about_img from "../assets/about_img.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import bootstrap from '../assets/bootstrap.png'
import php from '../assets/php.png'
function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="about" className="text-white mt-20 overflow-hidden">
      <h1 data-aos="fade-up"
    data-aos-duration="1000"className="text-6xl text-center">About me</h1>
      <div className="">
        <div className="flex flex-col md:flex-row items-center">
          <div  className="w-full">
            <img src={about_img} alt="" className="size-4/5  md:size-10/12   lg:size-11/12" />
          </div>
          <div   className="text-white">
            <p className=" text-lg mx-auto w-9/12 md:w-7/12  lg:w-11/12">
              Hello there! I'm Kundan Bora, a driven front-end developer hoping
              to establish a name for myself online. I've always been fascinated
              by the nexus of technology and design, and this curiosity has
              guided me toward frontend development.
            </p>
            <h3 className="mt-5 text-center text-3xl lg:text-left md:text-left ">Teach Stack</h3>
            <div className="flex flex-wrap gap-2 mt-2  mx-5">
  <img src={html} alt="" className="w-16 h-16 mr-2 mb-2 hover:scale-110 transition duration-300 ease-in-out" />
  <img src={css} alt="" className="w-16 h-16 mr-2 mb-2 hover:scale-110 transition duration-300 ease-in-out" />
  <img src={js} alt="" className="w-16 h-16 mr-2 mb-2 hover:scale-110 transition duration-300 ease-in-out" />
  <img src={bootstrap} alt="" className="w-16 h-16 mr-2 mb-2 hover:scale-110 transition duration-300 ease-in-out" />
  <img src={tailwind} alt="" className="w-16 h-16 mr-2 mb-2 hover:scale-110 transition duration-300 ease-in-out" />
  <img src={react} alt="" className="w-16 h-16 mr-2 mb-2 hover:scale-110 transition duration-300 ease-in-out" />
  <img src={php} alt="" className="w-16 h-16 mr-2 mb-2 hover:scale-110 transition duration-300 ease-in-out" />
</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
