import React from "react";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";

const FAQ = () => {
  return (
    <div>
      <div className="bg-27272a p-10">
        <div className="md:flex md:items-center md:justify-between lg:justify-around  bg-red-600 p-10 success-container font-bold">
          <h3 className="max-w-lg uppercase lg:text-4xl md:text-2xl md:font-bold text-xl text-white md:mb-0 mb-5">
            get your success story <span className="">with rapcult</span>
          </h3>
          <button className="md:flex md:p-4 px-2 py-2 bg-white text-black uppercase">
            <span className="flex items-center md:text-sm">
              Join rapcult <FaArrowRight className="ml-2" />
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          <div>
            <h3 className="text-3xl text-center mt-10 md:mt-20 mb-10 text-white uppercase">
              Frequently asked questions
            </h3>
            <div className="success-container border border-white p-10 pb-0 text-white">
              <FAQList />
            </div>
          </div>

          <div>
            <h3 className="text-3xl text-center mt-10 md:mt-20 mb-10 text-white uppercase">
              Do you still have questions?
            </h3>

            <div className="success-container border border-gray-700 p-10 pb-0 text-white">
              <p className="text-center">
                Lorem ipsum dolor sit amet,
                <span className="text-gray-400 md:ml-1">
                  consectetur adipiscing elit. Sed id varius purus
                </span>
              </p>
              <form className="">
                <div className=" mb-6 text-white uppercase">
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold mt-4"
                  >
                    First and name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border border-white bg-27272a p-2 mt-2"
                    placeholder="John"
                  />
                </div>

                <div className="mb-6 text-white uppercase">
                  <label htmlFor="email" className="block text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border border-white bg-27272a p-2 mt-2"
                    placeholder="your.email.com"
                  />
                </div>

                <div className="mb-6 uppercase">
                  <label htmlFor="phone" className="block text-sm">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full border border-white bg-27272a p-2 mt-2"
                    placeholder="+421"
                  />
                </div>

                <div className="mb-4 uppercase">
                  <label htmlFor="message" className="block text-sm">
                    Message from you to rapcult
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    className="w-full border border-white bg-27272a  p-2 mt-1"
                    placeholder="Write here"
                  ></textarea>
                </div>

                <button className="md:flex md:items-center text-sm px-5 py-3 mb-8 bg-red-600 uppercase shadow-red-button">
                  <span className="flex items-center">
                    Send message <FaArrowRight className="ml-2" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-27272a">
        <footer className="bg-gray-800 text-white p-4 bottom-border">
          <div className="p-10">
            {/* Rapcult and Button */}
            <div className="flex justify-between items-center mb-4 md:mb-0">
              <p className="text-xl font-bold uppercase">Rapcult</p>
              <button className="ml-5 p-3 bg-red-600 uppercase shadow-red-button">
                <span className="flex items-center text-white">
                  Join rapcult <FaArrowRight className="ml-2" />
                </span>
              </button>
            </div>
            <div className="flex flex-col  md:flex-row md:items-start uppercase md:mt-6">
              <div className="flex flex-col pt-5 md:mr-20">
                <p className=" text-gray-400 mb-4">Navigate</p>
                <ul className="">
                  <li className="mb-2">How it works</li>
                  <li className="mb-2">Packages</li>
                  <li className="mb-2">Success stories</li>
                  <li className="mb-2">about rapcult</li>
                  <li className="mb-2">about rapcult</li>
                </ul>
              </div>

              <div className="flex flex-col pt-5 md:mr-20">
                <p className=" text-gray-400 mb-4">Legal</p>
                <ul className="">
                  <li className="mb-2">Terms of condition</li>
                  <li className="mb-2">gdpr</li>
                </ul>
              </div>

              <div className="flex flex-col pt-5 md:mr-20 ">
                <p className=" text-gray-400 mb-4">Social</p>
                <ul className="">
                  <li className="mb-2">instagram</li>
                  <li className="mb-2">facebook</li>
                  <li className="mb-2">youtube</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

const FAQList = () => {
  const items = Array.from({ length: 7 }, (_, index) => (
    <div key={index} className="mb-20">
      <div className="flex items-center justify-between mb-10">
        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur elit</p>
        <FaArrowDown className="text-red-600" />
      </div>
      {index < 6 && (
        <div className="h-0.5 w-auto mb-3 text-white bg-white"></div>
      )}
    </div>
  ));

  return <>{items}</>;
};

export default FAQ;
