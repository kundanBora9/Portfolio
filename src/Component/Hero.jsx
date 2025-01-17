import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import profileimg from "../assets/profileimg.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import my_resume from "../assets/my_resume.pdf";
import "./css/Hero.css";
import GradientText from "./GradientText.jsx";
function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-bottom"
      data-aos-offset="300"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine"
      id="home"
      className="text-black m-10 gap-1 overflow-hidden"
    >
      <div className="mx-auto text-center">
        <img
          src={profileimg}
          alt=""
          className=" size-4/5 mx-auto md:size-3/12   lg:size-3/12 "
        />
        <GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class sm:text-3xl md:text-5xl lg:text-5xl"
>
I'm Kundan Bora,
</GradientText>
        <h1 className="text-3xl md:text-5xl lg:text-5xl  text-white">
          <span className="  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 md:break-after-column">
          
          </span>
         Front-End Developer
        </h1>
        <p
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="text-xl md:text-xl lg:text-xl"
        >
          Passionate front-end developer with a creative flair and a drive for
          continuous learning.
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="grid justify-center items-center gap-3 mt-2 md:flex md:justify-center md:gap-3 md:content-center md:mt-2  lg:flex lg:justify-center lg:gap-3 lg:content-center lg:mt-2"
      >
        <div className="px-1 py-1 connt-btn rounded-md text-white">
          <AnchorLink className="anchor-link" href="#Contact">
            Connect With Me{" "}
          </AnchorLink>
        </div>
        <div className=" p-1 connt-btn rounded-md  text-white">
          <a href={my_resume} target="_blank">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
}
export default Hero;
