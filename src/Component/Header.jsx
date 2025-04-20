import { Navbar } from "flowbite-react";
("use client");
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <Navbar  rounded className="mx-4 md:mx-8 lg:mx-20">
        <Navbar.Brand href="#home">
          <img src={logo} alt="Kundan.dev" className="w-28 md:w-36 lg:w-40" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="mt-3 md:mt-0">
          <AnchorLink className="anchor-link" href="#about">
            <Navbar.Link className="text-base md:text-lg font-medium md:font-semibold text-gray-700 hover:text-blue-600 transition">
              About
            </Navbar.Link>
          </AnchorLink>

          <AnchorLink className="anchor-link" href="#Project">
            <Navbar.Link className="text-base md:text-lg font-medium md:font-semibold text-gray-700 hover:text-blue-600 transition">
              Project
            </Navbar.Link>
          </AnchorLink>

          <AnchorLink className="anchor-link" href="#Contact">
            <Navbar.Link className="text-base md:text-lg font-medium md:font-semibold text-gray-700 hover:text-blue-600 transition">
              Contact
            </Navbar.Link>
          </AnchorLink>

          <Navbar.Link
            href="https://github.com/kundanBora9"
            target="_blank"
            className="text-gray-700 hover:text-black transition"
          >
            <FontAwesomeIcon icon={faSquareGithub} size="2x" />
          </Navbar.Link>

          <Navbar.Link
            href="https://www.linkedin.com/in/kundan-bora-2a482a24a/"
            target="_blank"
            className="text-blue-700 hover:text-blue-900 transition"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
