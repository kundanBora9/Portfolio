import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import profileimg from "../assets/profileimg.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import my_resume from "../assets/kundan_resume.pdf";
import "./css/Hero.css";
import GradientText from "./GradientText.jsx";
import { TypeAnimation } from 'react-type-animation';
function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-duration="1000"
    data-aos-easing="ease-in-sine"
    id="home"
    className="bg-white text-[#1f2937] px-6 md:px-16 lg:px-24 py-16 overflow-hidden"
  >
    <div className="mx-auto text-center max-w-4xl">
      <img
        src={profileimg}
        alt="Kundan Bora"
        className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto rounded-full object-cover shadow-lg"
      />
  
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight"
      >
        I'm Kundan Bora,
      </GradientText>
  
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-2">
      <TypeAnimation
    sequence={[
      'Web Developer', 2000,
      'UI/UX Designer', 2000,
      'Creative Thinker', 2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}

  />
      </h1>
  
      <p
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
      >
        Passionate web developer with a creative flair and a drive for continuous learning.
      </p>
    </div>
  
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4"
    >
      <div className="px-6 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-all">
        <AnchorLink className="text-lg font-medium" href="#Contact">
          Connect With Me
        </AnchorLink>
      </div>
      <div className="px-6 py-2 bg-gray-100 text-blue-600 border border-blue-600 rounded-full shadow-md hover:bg-blue-50 transition-all">
        <a href={my_resume} target="_blank" className="text-lg font-medium">
          My Resume
        </a>
      </div>
    </div>
  </div>
  
  );
}
export default Hero;
