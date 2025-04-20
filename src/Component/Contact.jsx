"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FloatingLabel } from "flowbite-react";


function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const formData = new FormData(event.target);

    formData.append("access_key", "b4b4a765-5689-47dc-8442-abf33c08237e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      event.target.reset();
    }
  };
  return (
    <div id="Contact" className=" py-20 m-5">
      <h1 data-aos="fade-up" className="text-center text-4xl md:text-6xl lg:text-7xl   mb-12">
        Get in touch
      </h1>
      
      <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col md:flex-row mx-auto max-w-7xl px-4 md:px-10 lg:px-20">
        
        {/* Left Column */}
        <div className="md:w-1/2 lg:w-1/2 w-full mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            Let's talk
          </h2>
          <p className="text-lg md:text-xl  mb-6">
            I'm currently available to take on new projects. Feel free to send me a message about anything you'd like me to work on. You can contact me anytime.
          </p>
          
          <div className="space-y-4">
            <p className="flex items-center text-lg">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 " />
              <a href="mailto:kb926464@gmail.com" className="">kb926464@gmail.com</a>
            </p>
            <p className="flex items-center text-lg">
              <FontAwesomeIcon icon={faPhone} className="mr-2 " />
              <a href="tel:+919760402549" className="">+91 9760402549</a>
            </p>
            <p className="flex items-center text-lg">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2 " />
              <span className="t">Delhi, India</span>
            </p>
          </div>
        </div>
        
        {/* Right Column - Form */}
        <div className="md:w-1/2 lg:w-1/2 flex flex-col space-y-6">
          <form onSubmit={onSubmit} className="space-y-6">
            
            {/* Name Field */}
            <FloatingLabel variant="standard" label="Enter Your Name" type="text" name="name" className="" required />
            
            {/* Email Field */}
            <FloatingLabel variant="standard" label="Enter Your Email" type="email" name="email" className="" required />
            
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="text-lg">Write your message here</label>
              <textarea
                name="message"
                rows="6"
                placeholder="Enter your message"
                className="w-full  rounded-md px-4 py-3 mt-2  "
                required
              ></textarea>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-all "
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
