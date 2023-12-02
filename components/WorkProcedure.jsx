import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const WorkProcedure = () => {
  return (
    <div>
      <div className="relative bg-black pt-20 pb-1">
        <h3 className="text-center uppercase text-4xl mb-28 md:mb-24 text-white ">
          How it works
        </h3>

        {/* <div className="absolute h-full w-1 bg-red-600 hidden md:flex top-20"></div> */}
        <div className="absolute h-full w-1 bg-red-600 hidden md:flex md:left-1/2 top-36"></div>
        <div className="relative">
          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-xl absolute num-1">
            1
          </div>
        </div>

        <div className="flex flex-col md:items-center md:flex-row lg:p-10">
          <div className="md:w-1/2 p-4">
            <Image
              className="h-auto rounded-md border-picture lg:ml-32 md:ml-14 opacity-60"
              src="/project.avif"
              alt="Description of the image"
              width={200}
              height={200}
            />
          </div>

          <div className="md:w-1/2 max-w-md md:ml-44 p-4">
            <h3 className="text-xl font-bold mb-2 text-white uppercase">
              Join the Cult
            </h3>
            <p className="text-gray-600">
              Sign up with Rapcult and be part of an independent record label
              that understands your ambition and supports your dreams.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="w-12 h-12 mt-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xl absolute num-2">
            2
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:p-10 mt-24">
          <div className="md:w-1/2 xl:max-w-lg md:max-w-xs md:ml-1 p-4 md:text-right">
            <h3 className="text-xl font-bold w-40 md:float-right mb-2 text-white uppercase">
              Grant Your Song Rights
            </h3>
            <p className="text-gray-600 md:float-right">
              Give us the privilege to distribute your work to connect with your
              followers and the rap enthusiasts around the globe.
            </p>
          </div>

          <div className="md:w-1/2 max-w-md p-4">
            <Image
              className="h-auto rounded-md border-picture xl:ml-1/2 lg:ml-96 md:ml-40 opacity-60"
              src="/project.avif"
              alt="Description of the image"
              width={200}
              height={200}
            />
          </div>
        </div>

        <div className="relative">
          <div className="w-12 h-12 mt-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xl absolute num-3">
            3
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:p-10 mt-24">
          <div className="md:w-1/2 p-4">
            <Image
              className="rounded-md border-picture lg:ml-32 md:ml-14 opacity-60"
              src="/project.avif"
              alt="Description of the image"
              width={200}
              height={200}
            />
          </div>

          <div className="md:w-1/2 max-w-md md:ml-44 p-4">
            <h3 className="text-xl font-bold mb-2 text-white uppercase">
              Garner Recognition & Success
            </h3>
            <p className="text-gray-600">
              We help you gain hundreds of thousands of streams across platforms
              like Spotify and more, bringing your music to the recognition it
              deserves
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black pb-36">
        <div className="relative  md:pt-20 ml-4 md:ml-0">
          <button className="absolute button-position md:mt-0 mr-5 px-5 py-3 bg-red-600 uppercase shadow-red-button">
            <span className="flex items-center text-white">
              Join rapcult <FaArrowRight className="ml-2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkProcedure;
