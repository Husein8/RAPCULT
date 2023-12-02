"use client";
import "./navbar.css";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Packages = () => {
  return (
    <div className="bg-black relative pb-0 xl:pb-0">
      <div className="logo-background bottom-border  pb-20 xl:pb-32">
        <div className=" text-center pb-6 xl:pb-72 2xl:pb-20">
          <h3 className="text-5xl lg:text-6xl xl:text-7xl text-white pt-10 uppercase">
            JOIN RAPCULT
          </h3>
          <p className="max-w-md text-center m-auto text-white text-sm xl:text-xl uppercase mt-6">
            all artists are welcome to get in touch, rapcult is welcoming and
            supportive community
          </p>
          <p className="text-white text-xs mt-8">
            Paste your Spotify link to get the right package.
          </p>
          <input
            className="border border-white bg-black text-white mt-2 mb-10 p-2"
            type="search"
            placeholder="hello"
            name=""
            id=""
          />
          {/* <FaArrowRight /> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 logo-background mx-4 mt-4 2xl:relative 2xl:top-0 2xl:-right-0 xl:absolute xl:top-80 xl:-right-36">
          <div className="bg-black p-6 rounded-lg shadow-m border-picture">
            <h2 className="text-sm text-center text-white uppercase font-semibold mb-4">
              Package #1
            </h2>
            <p className="text-red-700 text-center uppercase text-4xl mb-5">
              bronze
            </p>
            <div className="h-0.5 w-auto mb-3 text-white bg-white"></div>
            <ul className="text-white">
              <li className="flex text-center items-center ">
                <FaCheck className="mr-3 text-red-600" />
                lorem ipsum
              </li>
              <li className="flex text-center items-center ">
                <FaCheck className="mr-3 text-red-600" />
                lorem ipsum
              </li>
              <li className="flex text-center items-center ">
                <FaCheck className="mr-3 text-red-600" />
                lorem ipsum
              </li>
              <li className="flex text-center items-center ">
                <FaCheck className="mr-3 text-red-600" />
                lorem ipsum
              </li>
              <li className="flex text-center items-center mb-7">
                <FaCheck className="mr-3 text-red-600" />
                lorem ipsum
              </li>
            </ul>
          </div>

          <div className="bg-black p-6 rounded-lg shadow-m border-picture">
            <h2 className="text-sm text-center text-white uppercase font-semibold mb-4">
              Package #2
            </h2>
            <p className="text-red-700 text-center uppercase text-4xl mb-5">
              Silver
            </p>
            <div className="h-0.5 w-auto mb-3 text-white bg-white"></div>
            <p className="text-white">Everything in Bronze, plus:</p>
            <ul className="text-white">
              <li className="flex text-center items-center ">
                <FaCheck className="mr-3 text-red-600" />
                lorem ipsum
              </li>
              <li className="flex text-center items-center ">
                <FaCheck className="mr-3 text-red-600" />
                lorem ipsum
              </li>
              <li className="flex text-center items-center ">
                <FaCheck className="mr-3 text-red-600" />
                lorem ipsum
              </li>
              <li className="flex text-center items-center ">
                <FaCheck className="mr-3 text-red-600" />
                lorem ipsum
              </li>
              <li className="flex text-center items-center mb-7">
                <FaCheck className="mr-3 text-red-600" />
                lorem ipsum
              </li>
            </ul>
          </div>

          <div className="bg-black p-6 rounded-lg shadow-m border-picture">
            <h2 className="text-sm text-center text-white uppercase font-semibold mb-4">
              Package #3
            </h2>
            <p className="text-red-700 text-center uppercase text-4xl mb-5">
              Gold
            </p>
            <div className="h-0.5 w-auto mb-3 text-white bg-white"></div>
            <p className="text-white">Everything in Bronze, plus:</p>

            <ul className="text-white">
              <li className="flex text-center items-center ">
                <FaCheck className="mr-3 text-red-600" />
                lorem ipsum
              </li>
              <li className="flex text-center items-center ">
                <FaCheck className="mr-3 text-red-600" />
                lorem ipsum
              </li>
              <li className="flex text-center items-center ">
                <FaCheck className="mr-3 text-red-600" />
                lorem ipsum
              </li>
              <li className="flex text-center items-center ">
                <FaCheck className="mr-3 text-red-600" />
                lorem ipsum
              </li>
              <li className="flex text-center items-center mb-7">
                <FaCheck className="mr-3 text-red-600" />
                lorem ipsum
              </li>
            </ul>
          </div>

          <div className="bg-black p-6 rounded-lg shadow-m border-picture">
            <h2 className="text-sm text-center text-white uppercase font-semibold mb-4">
              Package #4
            </h2>
            <p className="text-red-700 text-center uppercase text-4xl mb-5">
              Platinum
            </p>
            <div className="h-0.5 w-auto mb-3 text-white bg-white"></div>
            <p className="text-white">Everything in Bronze, plus:</p>

            <ul className="text-white">
              <li className="flex text-center items-center ">
                <FaCheck clSassName="mr-3 text-red-600" />
                lorem ipsum
              </li>
              <li className="flex text-center items-center ">
                <FaCheck className="mr-3 text-red-600" />
                lorem ipsum
              </li>
              <li className="flex text-center items-center ">
                <FaCheck className="mr-3 text-red-600" />
                lorem ipsum
              </li>
              <li className="flex text-center items-center ">
                <FaCheck className="mr-3 text-red-600" />
                lorem ipsum
              </li>
              <li className="flex text-center items-center mb-7">
                <FaCheck className="mr-3 text-red-600" />
                lorem ipsum
              </li>
            </ul>
          </div>

          <div className="bg-black p-6 rounded-lg shadow-m border-picture">
            <h2 className="text-sm text-center text-white uppercase font-semibold mb-4">
              Package #5
            </h2>
            <p className="text-red-700 text-center uppercase text-4xl mb-5">
              diamond
            </p>
            <div className="h-0.5 w-auto mb-3 text-white bg-white"></div>
            <p className="text-white">Everything in Bronze, plus:</p>

            <ul className="text-white">
              <li className="flex text-center items-center ">
                <FaCheck className="mr-3 text-red-600" />
                lorem ipsum
              </li>
              <li className="flex text-center items-center ">
                <FaCheck className="mr-3 text-red-600" />
                lorem ipsum
              </li>
              <li className="flex text-center items-center ">
                <FaCheck className="mr-3 text-red-600" />
                lorem ipsum
              </li>
              <li className="flex text-center items-center ">
                <FaCheck className="mr-3 text-red-600" />
                lorem ipsum
              </li>
              <li className="flex text-center items-center mb-7">
                <FaCheck className="mr-3 text-red-600" />
                lorem ipsum
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
