import React from "react";
import Image from "next/image";

const WorkProcedure = () => {
  return (
    <div className="bg-black pt-32 pb-32">
      <h3 className="text-center uppercase text-4xl text-white">
        How it works
      </h3>

      <div className="flex flex-col md:flex-row items-center lg:p-10">
        <div className="md:w-1/2 p-4">
          <Image
            className="h-auto rounded-md border-picture md:ml-52"
            src="/project.avif"
            alt="Description of the image"
            width={200}
            height={200}
          />

          {/* <img
          className="w-full h-auto rounded-md"
          src="/project.avif"
          alt="Your Image"
        /> */}
        </div>

        <div className="md:w-1/2 max-w-md md:ml-52 p-4">
          <h3 className="text-xl font-bold mb-2 text-white">Your Heading</h3>
          <p className="text-gray-600">
            Your paragraph text goes here. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkProcedure;
