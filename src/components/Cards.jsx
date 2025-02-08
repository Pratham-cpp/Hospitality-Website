import React, { useState, useRef } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { motion } from "framer-motion";
import data from "./data";

const Cards = () => {
  const [current, setCurrent] = useState(0);
  const totalCards = data.length;
  const touchStartX = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % totalCards);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;

    if (deltaX > 50) {
      prevSlide();
    } else if (deltaX < -50) {
      nextSlide();
    }
    touchStartX.current = null;
  };

  return (
    <div 
      className="relative w-[90%] md:w-[90%] lg:w-[70%] flex items-center justify-center p-6 md:p-12 my-8 mx-2 overflow-x-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        className="absolute scale-0 xl:scale-100 left-2 md:left-8 text-2xl md:text-3xl bg-gray-200 p-2 md:p-3 rounded-full hover:bg-gray-300 transition"
        onClick={prevSlide}
      >
        <GrFormPrevious />
      </button>

      <div className="relative flex w-[90%] md:w-[70%] h-80 justify-center items-center">
        {data.map((item, index) => {
          const isActive = index === current;
          const isPrev = index === (current - 1 + totalCards) % totalCards;
          const isNext = index === (current + 1) % totalCards;

          return (
            <motion.div
              key={item.id}
              className="absolute w-48 h-60 md:w-80 md:h-80 flex flex-col items-center justify-center text-black text-lg md:text-xl bg-green-500 p-6 md:py-6 md:px-2 rounded-lg shadow-lg transition-all duration-500"
              initial={{ opacity: 0.5, scale: 0.8, x: 0 }}
              animate={{
                scale: isActive ? 1.2 : 0.9,
                opacity: isActive ? 1 : 0.5,
                // shadow: isActive ? 1 : 0,
                boxShadow: isActive ? "0 0px 15px -3px rgba(0, 0, 0, 0.5), 0 0px 6px -2px rgba(0, 0, 0, 0.5)" : "0 0 0 rgba(0, 0, 0, 0)",
                color: isActive ? "white" : "rgb(34,197,94,255)",
                x: isPrev ? -200 : isNext ? 200 : 0,
                zIndex: isActive ? 10 : isPrev || isNext ? 5 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="font-semibold text-center text-2xl p-4">{item.title}</div>
              <p className="text-center text-xs md:text-base">
                {item.description.length > 200
                  ? item.description.substring(0, 200) + "..."
                  : item.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <button
        className="absolute right-2 scale-0 xl:scale-100 md:right-8 text-2xl md:text-3xl bg-gray-200 p-2 md:p-3 rounded-full hover:bg-gray-300 transition"
        onClick={nextSlide}
      >
        <GrFormNext />
      </button>
    </div>
  );
};

export default Cards;







// import React, { useState } from "react";
// import { GrFormNext, GrFormPrevious } from "react-icons/gr";
// import { motion } from "framer-motion";
// import data from "./data";

// const Cards = () => {
//   const [current, setCurrent] = useState(0);
//   const totalCards = data.length;

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % totalCards);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev - 1 + totalCards) % totalCards);
//   };

//   return (
//     <div className="relative w-full flex items-center justify-center p-4 md:p-8 overflow-hidden">
//       <button
//         className="absolute left-2 md:left-8 text-2xl md:text-3xl bg-gray-200 p-2 md:p-3 rounded-full hover:bg-gray-300 transition"
//         onClick={prevSlide}
//       >
//         <GrFormPrevious />
//       </button>

//       <div className="relative flex w-[80%] md:w-[60%] h-60 justify-center items-center">
//         {data.map((item, index) => {
//           const isActive = index === current;
//           const isPrev = index === (current - 1 + totalCards) % totalCards;
//           const isNext = index === (current + 1) % totalCards;

//           return (
//             <motion.div
//               key={item.id}
//               className="absolute w-32 h-48 md:w-40 md:h-56 flex flex-col items-center justify-center text-lg md:text-xl bg-purple-100 p-3 md:p-4 rounded-lg shadow-lg transition-all duration-500"
//               initial={{ opacity: 0.5, scale: 0.8, x: 0 }}
//               animate={{
//                 scale: isActive ? 1.2 : 0.9,
//                 opacity: isActive ? 1 : 0.5,
//                 x: isPrev ? -150 : isNext ? 150 : 0,
//                 zIndex: isActive ? 10 : isPrev || isNext ? 5 : 0,
//               }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="font-semibold text-center text-sm md:text-base">{item.title}</div>
//               <p className="text-center text-xs md:text-sm">
//                 {item.description.length > 100
//                   ? item.description.substring(0, 100) + "..."
//                   : item.description}
//               </p>
//             </motion.div>
//           );
//         })}
//       </div>

//       <button
//         className="absolute right-2 md:right-8 text-2xl md:text-3xl bg-gray-200 p-2 md:p-3 rounded-full hover:bg-gray-300 transition"
//         onClick={nextSlide}
//       >
//         <GrFormNext />
//       </button>
//     </div>
//   );
// };

// export default Cards;
