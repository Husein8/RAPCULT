// // components/Carousel.js
// "use client";
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";

// const Carousel = () => {
//   const settings = {
//     dots: true, // Disable default dots
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     customPaging: (i) => (
//       <div className="h-1 w-5 bg-gray-300 mx-2"></div> // Lines for non-active slides
//     ),
//     appendDots: (dots) => (
//       <div className="flex justify-center">
//         {dots.map((dot, index) => (
//           <div
//             key={index}
//             className={`h-1 w-${
//               index === dots.length - 1 ? "10" : "5"
//             } bg-gray-800 mx-2`}
//           ></div> // Wider line for the active slide
//         ))}
//       </div>
//     ),
//   };

//   return (
//     <Slider {...settings} className="bg-black">
//       <div className="pb-80 logo-background">
//         <Image
//           className="border-picture "
//           src="/project.avif" // Replace with the actual path to your image
//           alt="Description of the image"
//           width="400" // Set the desired width
//           height="800" // Set the desired height
//         />
//         <div className="text-amber-50">
//           <h3 className="uppercase text-2xl  text-red-600">LOVELY AMAZING!</h3>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Pellentesque nec nunc sit amet nibh vulputate hendrerit. Curabitur
//             placerat augue eu ligula volutpat, eu consectetur est sollicitudin.
//           </p>
//           {/* line */}
//           <div>
//             <p>+200,000 + icon</p>
//             <h4>Streams</h4>

//             <p>+$35,000 + icon</p>
//             <h4>revenue</h4>

//             <p>+150 + icon</p>
//             <h4>collabs</h4>
//           </div>
//         </div>
//       </div>
//       <div>
//         <Image
//           className="border-picture"
//           src="/project.avif" // Replace with the actual path to your image
//           alt="Description of the image"
//           width="400" // Set the desired width
//           height="400" // Set the desired height
//         />
//       </div>
//       <div>
//         <Image
//           className="border-picture"
//           src="/project.avif" // Replace with the actual path to your image
//           alt="Description of the image"
//           width="400" // Set the desired width
//           height="400" // Set the desired height
//         />{" "}
//       </div>
//       {/* Add more slides as needed */}
//     </Slider>
//   );
// };

// export default Carousel;
