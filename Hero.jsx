import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="text-center lg:pt-32 md:pt-14 sm:pt-32 text-white bg-black uppercase">
      {/* <h1 className="mb-8 text-8xl max-w-7xl m-auto font-bold">
        Dominate the industry with Rapcult
      </h1> */}

      <h1 className="mb-8 p-sm:p-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-7xl m-auto font-bold">
        Dominate the industry with Rapcult
      </h1>

      <p className="mb-8 max-w-xs m-auto font-light text-gray-300">
        Join us, garner recognition, <span>and stream your way to success</span>
      </p>
      <button className=" mt-5 mb-40 md:mt-0 mr-5 px-5 py-3 bg-red-600 uppercase shadow-red-button">
        <span className="flex items-center">
          Join rapcult <FaArrowRight className="ml-2" />
        </span>
      </button>
    </div>
  );
};

export default Hero;
