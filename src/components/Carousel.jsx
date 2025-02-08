// import React, { useEffect, useState } from "react";
// import Staff from "../assets/Staff.jpg";
// import Waiter from "../assets/Waiter.jpg";
// import Resort from "../assets/Resort.jpg";
// import Restaurant from "../assets/Restaurant.jpg";


// const Carousel = () => {
//   const Images = [Staff,Waiter,Resort,Restaurant]
  
//   const [currentIndex,setCurrentIndex] = useState(0)
//   const [bgImage,setBgImage] = useState(Images[currentIndex])
  
//   function forwardHandler() {
//     const newIndex = (currentIndex + 1) % Images.length;
//     setCurrentIndex(newIndex);
//     setBgImage(Images[newIndex]);
//   }

//   useEffect(()=>{
//     setTimeout(forwardHandler,4000)
//   })

//   return (
//     <div className="flex justify-center items-center w-[1900px] h-[900px] overflow-hidden" >
//       <img className="w-full h-full object-cover transition-all -z-10 right-0" src={bgImage} alt="" />
//     </div>
//   )
// }

// export default Carousel




// import React, { useEffect, useState } from "react";
// import Staff from "../assets/Staff.jpg";
// import Waiter from "../assets/Waiter.jpg";
// import Resort from "../assets/Resort.jpg";
// import Restaurant from "../assets/Restaurant.jpg";

// const Carousel = () => {
//   const Images = [Staff, Waiter, Resort, Restaurant];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   function forwardHandler() {
//     const newIndex = (currentIndex + 1) % Images.length;
//     setCurrentIndex(newIndex);
//   }

//   useEffect(() => {
//     const interval = setInterval(forwardHandler, 4000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <div className="relative w-full h-[900px] flex justify-center items-center overflow-hidden">
//       {Images.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           alt="Carousel Slide"
//           className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out z-[-20] ${
//             index === currentIndex ? "opacity-60" : "opacity-0"
//           }`}
//         />
//       ))}
//     </div>

//   );
// };

// export default Carousel;






// import React, { useEffect, useState } from "react";
// import Staff from "../assets/Staff.jpg";
// import Waiter from "../assets/Waiter.jpg";
// import Resort from "../assets/Resort.jpg";
// import Restaurant from "../assets/Restaurant.jpg";

// const Carousel = () => {
//   const Images = [Staff, Waiter, Resort, Restaurant];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   function forwardHandler() {
//     const newIndex = (currentIndex + 1) % Images.length;
//     setCurrentIndex(newIndex);
//   }

//   useEffect(() => {
//     const interval = setInterval(forwardHandler, 4000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <div className="relative w-full h-[300px] sm:h-[500px] md:h-[700px] lg:h-[900px] flex justify-center items-center overflow-hidden">
//       <div className="w-full px-[5rem]">
//         <h1 className="text-8xl font-bold z-[-20] text-beige-800 stroke-1 w-full -translate-y-16 stroke-black main-heading" >Best Hospitality Management <br /> Institute in Uttarakhand</h1>
//       </div>
//       {Images.map((image, index) => (
//         <img
//         key={index}
//         src={image}
//         alt="Carousel Slide"
//         className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out z-[-20] ${
//           index === currentIndex ? "opacity-60" : "opacity-0"
//         }`}
//         />
//       ))}
//     </div>
//   );
// };

// export default Carousel;



// import React, { useEffect, useState } from "react";
// import Staff from "../assets/Staff.jpg";
// import Waiter from "../assets/Waiter.jpg";
// import Resort from "../assets/Resort.jpg";
// import Restaurant from "../assets/Restaurant.jpg";
// import { motion } from 'framer-motion';

// const Carousel = () => {
//   const Images = [Staff, Waiter, Resort, Restaurant];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   function forwardHandler() {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);
//   }

//   useEffect(() => {
//     const interval = setInterval(forwardHandler, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-[300px] sm:h-[500px] md:h-[700px] lg:h-[900px] flex justify-center items-center overflow-hidden z-[-10]">
//       <div className="absolute w-full px-8 sm:px-16 md:px-24 z-10 bg-opacity-50">
//         <motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{duration:1}} >
//         <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-md">
//           BEST INSTITUTE FOR <br /> <span className='text-amber-700'>NEW HOSPITALITY ASPIRANTS</span>
//         </h1>
//         </motion.div>
//       </div>
//       {Images.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           alt="Carousel Slide"
//           className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
//             index === currentIndex ? "opacity-100 z-0" : "opacity-0"
//           }`}
//         />
//       ))}
//     </div>
//   );
// };

// export default Carousel;





import React, { useEffect, useState } from "react";
import Staff from "../assets/Staff.jpg";
import Waiter from "../assets/Waiter.jpg";
import Resort from "../assets/Resort.jpg";
import Restaurant from "../assets/Restaurant.jpg";
import { motion } from "framer-motion";

const slides = [
  { image: Staff, text: "BEST INSTITUTE FOR NEW HOSPITALITY ASPIRANTS" },
  { image: Waiter, text: "EXPERT TRAINING FOR YOUR FUTURE CAREER" },
  { image: Resort, text: "LEARN FROM THE BEST INDUSTRY PROFESSIONALS" },
  { image: Restaurant, text: "BUILD A SUCCESSFUL CAREER IN HOSPITALITY" }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function forwardHandler() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }

  useEffect(() => {
    const interval = setInterval(forwardHandler, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] sm:h-[500px] md:h-[700px] lg:h-[900px] -z-50 flex justify-center items-center overflow-hidden">
      
      {/* Image Slideshow with Overlay */}
      {slides.map((slide, index) => (
        <div key={index} className={`absolute w-full h-full transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}>
          <div className="relative w-full h-full">
            <motion.img
              src={slide.image}
              alt="Carousel Slide"
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
              transition={{ duration: 1 }}
            />
            {/* Overlay applied only to the image */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        </div>
      ))}

      {/* Text Container */}
      <div className="absolute w-full px-8 sm:px-16 md:px-24 text-center z-20">
        <motion.h1
          key={currentIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl -z-50 font-bold text-white drop-shadow-lg"
        >
          {slides[currentIndex].text}
        </motion.h1>
      </div>
    </div>
  );
};

export default Carousel;

