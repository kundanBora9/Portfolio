import React from "react";
import logo from '../assets/logo.png'

function Footer() {
  return (
    <div className="text-white">
      <div className="flex flex-col justify-evenly md:flex-row items-center text-black mt-10 mb-2 ">
        <div data-aos="fade-up"
     data-aos-duration="1000">
        <img src={logo} alt="Kundan.dev" className="size-4/12 md:size-5/12 lg:size-4/12" />
          <p className="md:w-1/2 lg:w-1/2 ">
            Passionate front-end developer with a creative flair and a drive for
            continuous learning.
          </p>
        </div>
      </div>
      <hr></hr>
      <div class="lg:flex lg:justify-between lg:items-center flex-col lg:flex-row mx-10 m-5">
  <p>&copy;2024 Kundan Bora. All rights reserved</p>
  <div class="flex justify-center items-center lg:gap-2 gap-0 lg:mt-0 mt-5 lg:flex-row flex-col">
    <p class="lg:mr-5">Term of Services</p>
    <p class="lg:mr-5">Privacy Policy</p>
   <a href="#Contact"> <p>Connect with me</p></a>
  </div>
</div>
    </div>
  );
}

export default Footer;
