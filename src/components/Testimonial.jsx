import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
const testimonials = [
  {
      title: "Accelerated Skill Development",
      text: "Master essential hospitality skills within a fast-tracked one-year program, designed for maximum efficiency and career readiness."
  },
  {
      title: "Comprehensive Two-Phase Training",
      text: "Gain a strong foundation with six months of intensive theoretical study, followed by six months of hands-on practical experience in real-world hospitality environments."
  },
  {
      title: "Affordable Excellence",
      text: "Receive high-quality hospitality education at a cost-effective price, ensuring premium industry training without financial burden."
  }
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (i) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  function buttonHandler(){
    navigate('/course')
  }


  return (
    <div className="flex flex-col items-center justify-center mt-16 w-full p-[10rem] text-center bg-gray-100 mx-auto">
      <h2 className="text-5xl font-bold text-teal-500 mt-2 uppercase">Why choose this course</h2>
      <div className="relative h-32 mt-4 overflow-hidden w-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            initial={{ x: direction * 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -direction * 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col justify-center"
          >
            <p className="text-gray-600 italic text-xl">"{testimonials[index].text}"</p>
            <p className="mt-2 font-bold text-gray-800">{testimonials[index].author}
               {/* - <span className="text-teal-500">{testimonials[index].role}</span> */}
               </p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex space-x-2 mt-4">
        {testimonials.map((_, i) => (
          <button
          key={i}
          onClick={() => handleDotClick(i)}
          className={`w-2 h-2 rounded-full ${i === index ? "bg-orange-500" : "bg-gray-300"}`}
          ></button>
        ))}
      </div>
      {/* <button className="bg-orange-200 text-orange-600 px-8 m-4 py-4 text-4xl rounded-full">Explore Now</button> */}
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "#ff7043" }}
        onClick={buttonHandler}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-6 py-2 bg-orange-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
      >
        Explore More
      </motion.button>
    </div>
  );
}
