import "./navbar.css";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-5 md:p-10 bg-black text-white uppercase">
      <div>
        <a className="text-3xl font-bold md:text-3xl ml-5">RAPCULT</a>
      </div>
      <ul className="flex flex-col md:flex-row md:space-x-20">
        <li className="mb-2 md:mb-0">
          <a>How it works</a>
        </li>
        <li className="mb-2 md:mb-0">
          <a>Packages</a>
        </li>
        <li className="mb-2 md:mb-0">
          <a>Success stories</a>
        </li>
        <li className="mb-2 md:mb-0">
          <a>About rapcult</a>
        </li>
        <li className="mb-2 md:mb-0">
          <a>About rapcult</a>
        </li>
      </ul>
      <button className="flex items-center mt-5 md:mt-0 mr-5 p-5 bg-red-600 uppercase shadow-red-button">
        Join rapcult <FaArrowRight className="ml-2" />
      </button>
    </nav>
  );
};

// import { useState } from 'react';
// import { FaBars, FaArrowRight } from 'react-icons/fa';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="flex flex-col md:flex-row justify-between items-center p-5 md:p-10 bg-black text-white uppercase">
//       <div>
//         <a className="text-3xl font-bold md:text-3xl ml-5">RAPCULT</a>
//       </div>
//       <div className="md:hidden">
//         <button onClick={toggleMenu} className="text-white focus:outline-none">
//           <FaBars className="text-2xl" />
//         </button>
//       </div>
//       <ul className={`flex flex-col md:flex-row md:space-x-20 ${isOpen ? 'block' : 'hidden'} md:flex`}>
//         <li className="mb-2 md:mb-0">
//           <a>How it works</a>
//         </li>
//         <li className="mb-2 md:mb-0">
//           <a>Packages</a>
//         </li>
//         <li className="mb-2 md:mb-0">
//           <a>Success stories</a>
//         </li>
//         <li className="mb-2 md:mb-0">
//           <a>About rapcult</a>
//         </li>
//         <li className="mb-2 md:mb-0">
//           <a>Contact us</a>
//         </li>
//       </ul>
//       <button className="hidden md:flex items-center mt-5 md:mt-0 mr-5 p-5 bg-red-600 uppercase shadow-red-button">
//         Join rapcult <FaArrowRight className="ml-2" />
//       </button>
//     </nav>
//   );
// };

// export default Navbar;

// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center p-10 bg-black text-white">
//       <div>
//         <a className="text-2xl font-bold ml-5 ">RAPCULT</a>
//       </div>
//       <ul className="flex space-x-28">
//         <li className="">
//           <a>How it works</a>
//         </li>
//         <li>
//           <a>Success stories</a>
//         </li>
//         <li>
//           <a>About rapcult</a>
//         </li>
//         <li>
//           <a>About rapcult</a>
//         </li>
//       </ul>
//       <button className="mr-5 p-5 bg-red-600">Join rapcult</button>
//     </nav>
//   );
// };

export default Navbar;
