"use client";
import "./navbar.css";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center pt-5 md:pl-1 pb-5 md:pb-0 bg-black text-white uppercase">
      <div className="flex items-center">
        <a className="text-3xl font-bold md:text-2xl mr-32 md:mr-8 lg:mr-0">
          RAPCULT
        </a>
        <button
          onClick={toggleMenu}
          className="md:hidden ml-auto text-white focus:outline-none"
        >
          <FaBars className="text-2xl" />
        </button>
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row md:items-center md:space-x-5 mt-5 md:mt-0 lg:mr-5`}
      >
        <ul className="md:flex md:items-center md:text-sm lg:text-sm xl:text-xl">
          <li className="mb-2 md:mb-0 lg:mr-4 xl:mr-6">
            <a>How it works</a>
          </li>
          <li className="mb-2 md:mb-0 lg:mr-4 xl:mr-8">
            <a>Packages</a>
          </li>
          <li className="mb-2 md:mb-0 lg:mr-4 xl:mr-8">
            <a>Success stories</a>
          </li>
          <li className="mb-2 md:mb-0 lg:mr-4 xl:mr-8">
            <a>About rapcult</a>
          </li>
          <li className="mb-2 md:mb-0 lg:mr-4 xl:mr-16">
            <a>Contact us</a>
          </li>
        </ul>

        <button className="md:flex md:items-center px-2 py-2  bg-red-600 uppercase shadow-red-button">
          <span className="flex items-center">
            Join rapcult <FaArrowRight className="ml-2" />
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
