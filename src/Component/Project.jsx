import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Project_1 from "../assets/Project_1.png";
import project_2 from "../assets/project_2.png";
import project_3 from "../assets/project_3.png";
import project_4 from "../assets/project_4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/Hero.css";

function Project() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="Project" className="py-16 px-4 md:px-10 lg:px-20 bg-white">
    <div className="text-center mb-16">
      <h2 data-aos="fade-up" data-aos-duration="2000" className="text-4xl md:text-5xl font-bold">
        Projects
      </h2>
      <p data-aos="fade-up" data-aos-duration="2000" className="mt-4 text-base md:text-lg text-gray-600">
        Each project is a unique piece of development
      </p>
    </div>
  
    {/* Project Card */}
    {[
      {
        image: Project_1,
        desc: "This website helps you with the planning, creation, and execution of concepts for your physical brand showroom...",
        tech: ["HTML", "CSS", "JavaScript"],
        code: "https://github.com/kundanBora9/sundown",
        demo: "https://sundown-git-main-kundanbora9s-projects.vercel.app/",
      },
      {
        image: project_4,
        desc: "Welcome to our e-commerce website, your go-to destination for premium quality foods...",
        tech: ["Bootstrap"],
        code: "https://github.com/kundanBora9/e-commerce",
        demo: "https://kundanbora9.github.io/e-commerce/",
      },
      {
        image: project_2,
        desc: "This website contributes to the growth of your business. We handle all infrastructure needs for smooth expansion...",
        tech: ["HTML", "CSS", "JavaScript"],
        code: "https://github.com/kundanBora9/webona",
        demo: "https://kundanbora9.github.io/webona/",
      },
      {
        image: project_3,
        desc: "This website helps you create a presentation to show to your client. Use simple tools and templates...",
        tech: ["React", "Tailwind CSS"],
        code: "https://github.com/kundanBora9/ochi",
        demo: "https://kundanbora9.github.io/ochi/",
      },
    ].map((project, index) => (
      <div
        key={index}
        className={`flex flex-col-reverse lg:flex-row ${
          index % 2 !== 0 ? "lg:flex-row-reverse" : ""
        } items-center gap-10 my-16`}
      >
        <div
          data-aos="zoom-in-left"
          className="lg:w-1/2 w-full text-gray-700 text-justify"
        >
          <p className="mb-4 px-4 md:px-0">{project.desc}</p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-3">
            {project.tech.map((t, i) => (
              <span key={i} className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-4 mt-5 justify-center lg:justify-start">
            <a
              href={project.code}
              target="_blank"
              className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition"
            >
              Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div data-aos="zoom-in-right" className="lg:w-1/2 w-full">
          <img
            src={project.image}
            alt={`Project ${index + 1}`}
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>
      </div>
    ))}
  </div>
  
  );
}

export default Project;
