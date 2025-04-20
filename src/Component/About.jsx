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
import bootstrap from '../assets/bootstrap.png';
import php from '../assets/php.png';
import'./css/Hero.css';
function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="about" className=" py-20 px-5 overflow-hidden">
  <h2 data-aos="fade-up" data-aos-duration="1000" className="text-5xl md:text-6xl font-semibold text-center ">
    About Me
  </h2>

  <div className="flex flex-col-reverse md:flex-row items-center gap-10 max-w-6xl mx-auto">
    {/* Text Section */}
    <div className="w-full md:w-1/2">
      <p className="text-lg leading-relaxed">
        Hello there! I'm <span className="font-semibold">Kundan Bora</span>, a passionate Web Developer  ans Designer dedicated to crafting beautiful and functional digital experiences. My fascination with the intersection of design and technology fuels my journey in web development. I specialize in building responsive, user-friendly websites that merge aesthetics with performance.
      </p>

      <div>
        <h3 className="text-2xl font-semibold mb-3">Tech Stack</h3>
        <div className="flex flex-wrap gap-4">
          {[html, css, js, bootstrap, tailwind, react, php].map((tech, index) => (
            <img
              key={index}
              src={tech}
              alt={`tech-${index}`}
              className="w-14 h-14 md:w-16 md:h-16 hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          ))}
        </div>
      </div>
    </div>

    {/* Image Section */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src={about_img}
        alt="About"
        className="w-4/5 md:w-10/12 lg:w-11/12 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
      />
    </div>
  </div>
</div>

  );
}
export default About;
