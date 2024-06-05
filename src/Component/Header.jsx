
import { Navbar } from "flowbite-react";
"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div>
      <Navbar fluid rounded className="bg-black mx-20">
      <Navbar.Brand  href="#home" >
        <img src={logo} alt="Kundan.dev" className="size-9/12 md:size-7/12 lg:size-8/12" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="mt-3">
      <AnchorLink className='anchor-link' href="#home" ><Navbar.Link className="text-white text-lg font-semibold">
          Home
        </Navbar.Link></AnchorLink> 
        <AnchorLink className='anchor-link' href="#about"  > <Navbar.Link  className="text-white text-lg font-semibold">
          About
        </Navbar.Link></AnchorLink> 
        <AnchorLink className='anchor-link' href="#Project" ><Navbar.Link className="text-white text-lg font-semibold">Project</Navbar.Link></AnchorLink>
        <AnchorLink className='anchor-link' href="#Contact"> <Navbar.Link className="text-white text-lg font-semibold">Contact</Navbar.Link></AnchorLink> 
        <Navbar.Link href="https://github.com/kundanBora9" target="_blank" className="text-white"><FontAwesomeIcon icon={faSquareGithub} size="2x" /></Navbar.Link>
        <Navbar.Link href="https://www.linkedin.com/in/kundan-bora-2a482a24a/" target="_blank" className="text-white"><FontAwesomeIcon icon={faLinkedin}size="2x" /></Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default Header