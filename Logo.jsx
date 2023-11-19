import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { SlArrowDown } from "react-icons/sl";

const Logo = () => {
  return (
    <div className="logo">
      <div className="pb-14 text-center logo-background">
        <div className="max-w-5xl m-auto">
          <h3 className="pt-16 pb-6 uppercase text-white">
            technology trusted by
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-4">
            <div className="bg-gray-200 p-4 text-center border border-white button">
              <p className="text-white mt-1">Logo </p>
            </div>

            <div className="bg-gray-200 p-4 text-center border border-white-500 button">
              <p className="text-white mt-1">Logo </p>
            </div>

            <div className="bg-gray-200 p-4 text-center border border-white button">
              <p className="text-white mt-1">Logo </p>
            </div>

            <div className="bg-gray-200 p-4 text-center border border-white button">
              <p className="text-white mt-1">Logo </p>
            </div>
          </div>
        </div>
        <div className="mt-44 mb-24">
          <h3 className="max-w-xs mb-10 lx-ml-48 md:ml-20 sm:ml-12 text-4xl text-left text-white uppercase">
            join creative community
          </h3>

          <div className="grid grid-cols-5 gap-4 overflow-hidden -rotate-6 w-110">
            <div className="relative">
              <Image
                className="border-picture"
                src="/project.avif" // Replace with the actual path to your image
                alt="Description of the image"
                width={700} // Set the desired width
                height={300} // Set the desired height
              />
            </div>

            <div className="relative ">
              <Image
                className="border-picture"
                src="/project.avif" // Replace with the actual path to your image
                alt="Description of the image"
                width={700} // Set the desired width
                height={300} // Set the desired height
              />
            </div>

            <div className="relative ">
              <Image
                className="border-picture"
                src="/project.avif" // Replace with the actual path to your image
                alt="Description of the image"
                width={700} // Set the desired width
                height={300} // Set the desired height
              />
            </div>

            <div className="relative">
              <Image
                className="border-picture"
                src="/project.avif" // Replace with the actual path to your image
                alt="Description of the image"
                width={700} // Set the desired width
                height={300} // Set the desired height
              />
            </div>

            <div className="relative ">
              <Image
                className="border-picture"
                src="/project.avif" // Replace with the actual path to your image
                alt="Description of the image"
                width={700} // Set the desired width
                height={300} // Set the desired height
              />
            </div>
          </div>
          <h3 className="max-w-xs mt-10 text-4xl md:mr-20 sm:mr-12 text-right float-right text-white uppercase">
            of creators like you
          </h3>
        </div>
        <Benefits />
      </div>
    </div>
  );
};

const Benefits = () => {
  return (
    // <div className="pt-24">
    <div className="pt-32 ">
      <h3 className="uppercase text-4xl font-bold text-white mb-12">
        Amazing benefits
      </h3>

      <div className="flex flex-wrap justify-center text-left ml-4 lg:ml-20 lg:mr-20">
        <div className="w-full sm:w-2/3 lg:w-1/3 p-4">
          <div className=" h-24 w-24 bg-gray-300"></div>
          <h3 className="text-xl font-bold text-red-500 uppercase mb-2 mt-8">
            spotify streams
          </h3>
          <p className="text-gray-600  md:block">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <div className="mt-4">
            <a
              href="#"
              className="flex items-center gap-4 text-xs uppercase text-red-500"
            >
              Show more <SlArrowDown />
            </a>
          </div>
        </div>

        <div className="w-full sm:w-2/3 lg:w-1/3 p-4">
          <div className=" h-24 w-24 bg-gray-300"></div>
          <h3 className="text-xl font-bold text-red-500 uppercase mb-2 mt-8">
            PR media
          </h3>
          <p className="text-gray-600  md:block">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <div className="mt-4">
            <a
              href="#"
              className="flex items-center gap-4 text-xs uppercase text-red-500"
            >
              Show more <SlArrowDown />
            </a>
          </div>
        </div>

        <div className="w-full sm:w-2/3 lg:w-1/3 p-4">
          <div className=" h-24 w-24 bg-gray-300"></div>
          <h3 className="text-xl font-bold text-red-500 uppercase mb-2 mt-8">
            social media growth
          </h3>
          <p className="text-gray-600  md:block">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <div className="mt-4">
            <a
              href="#"
              className="flex items-center gap-4 text-xs uppercase text-red-500"
            >
              Show more <SlArrowDown />
            </a>
          </div>
        </div>

        <div className="w-full sm:w-2/3 lg:w-1/3 p-4">
          <div className=" h-24 w-24 bg-gray-300"></div>
          <h3 className="text-xl font-bold text-red-500 uppercase mb-2 mt-8">
            community
          </h3>
          <p className="text-gray-600  md:block">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <div className="mt-4">
            <a
              href="#"
              className="flex items-center gap-4 text-xs uppercase text-red-500"
            >
              Show more <SlArrowDown />
            </a>
          </div>
        </div>

        <div className="w-full sm:w-2/3 lg:w-1/3 p-4">
          <div className=" h-24 w-24 bg-gray-300"></div>
          <h3 className="text-xl font-bold text-red-500 uppercase mb-2 mt-8">
            mentorships
          </h3>
          <p className="text-gray-600  md:block">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <div className="mt-4">
            <a
              href="#"
              className="flex items-center gap-4 text-xs uppercase text-red-500"
            >
              Show more <SlArrowDown />
            </a>
          </div>
        </div>

        <div className="w-full sm:w-2/3 lg:w-1/3 p-4">
          <div className="h-24 w-24 bg-gray-300"></div>
          <h3 className="text-xl font-bold text-red-500 uppercase mb-2 mt-8">
            Lorem ipsum
          </h3>
          <p className="text-gray-600  md:block">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>

          <div className="mt-4">
            <a
              href="#"
              className="flex items-center gap-4 text-xs uppercase text-red-500"
            >
              Show more <SlArrowDown />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
