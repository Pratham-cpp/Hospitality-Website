// import { useState } from "react";
// import { LuSquarePlus } from "react-icons/lu";
// import { LuSquareMinus } from "react-icons/lu";

// const faqData = [
//   { question: "Neque Porro Quisquam Est Qui Dolorem ?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
//   { question: "Vivamus Elementum Semper Nisi ?", answer: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s..." },
//   { question: "Lobortis Sit Magna Ornare Magna Egestas ?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
//   { question: "Interdum Lobortis Pretium Ornare ?", answer: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s..." },
// ];

// export default function Faq() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-6 lg:p-12">
//       <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">
//         Frequently Asked Questions
//       </h2>
//       <div className="p-4 rounded-lg">
//         {faqData.map((item, index) => (
//           <div key={index} className="border border-gray-300 bg-gray-100 my-4 w-full lg:w-3/4 mx-auto">
//             <button
//               className={`w-full text-left p-4 font-semibold text-base md:text-lg flex justify-between shadow-md items-center transition-all duration-300 ${
//                 activeIndex === index ? "bg-teal-500 text-white" : "bg-transparent text-gray-800"
//               }`}
//               onClick={() => toggleFAQ(index)}
//             >
//               {item.question}
//               <span className="text-2xl text-black">
//                 {activeIndex === index ? <LuSquareMinus className="text-white"/> : <LuSquarePlus />}
//               </span>
//             </button>
//             <div
//               className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
//                 activeIndex === index ? "max-h-40 p-4" : "max-h-0"
//               }`}
//             >
//               <p className="text-gray-700">{item.answer}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiPlus, FiMinus } from "react-icons/fi";

// const faqData = [
//   { 
//     question: "What programs do you offer in hospitality management?",
//     answer: "We offer comprehensive programs including Bachelor's in Hotel Management, Culinary Arts diplomas, and specialized courses in Tourism & Event Management. All courses combine theoretical knowledge with practical training."
//   },
//   {
//     question: "Are there internship opportunities during the program?",
//     answer: "Yes, we partner with leading hotel chains and tourism organizations to provide 6-month mandatory internships. Our placement cell assists students in securing positions at 5-star properties and renowned hospitality brands."
//   },
//   {
//     question: "What are the admission requirements?",
//     answer: "Admissions require completion of 10+2 education. Selection is based on entrance exam scores followed by personal interview. International students must provide equivalent qualifications and English proficiency certificates."
//   },
//   {
//     question: "Do you offer accommodation facilities?",
//     answer: "Our campus features separate hostels with modern amenities, including meal plans, recreational areas, and 24/7 security. Optional off-campus housing assistance is also available."
//   },
// ];

// export default function Faq() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12 lg:py-20">
//       <motion.h2 
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-4xl font-playfair text-center text-amber-800 mb-12"
//       >
//         Frequently Asked Questions
//       </motion.h2>

//       <div className="space-y-6 max-w-3xl mx-auto">
//         {faqData.map((item, index) => (
//           <motion.div 
//             key={index}
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             className="border-l-4 border-amber-700 bg-white shadow-sm hover:shadow-md transition-shadow"
//           >
//             <button
//               onClick={() => toggleFAQ(index)}
//               className="w-full flex justify-between items-center p-6 space-x-4 focus:outline-none"
//             >
//               <h3 className="text-lg font-semibold text-gray-800 text-left">
//                 {item.question}
//               </h3>
//               <span className="text-amber-700 text-2xl">
//                 {activeIndex === index ? <FiMinus /> : <FiPlus />}
//               </span>
//             </button>

//             <AnimatePresence>
//               {activeIndex === index && (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="overflow-hidden"
//                 >
//                   <div className="px-6 pb-6 pt-2 border-t border-amber-50">
//                     <p className="text-gray-600 leading-relaxed">
//                       {item.answer}
//                     </p>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         ))}
//       </div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         className="text-center mt-12"
//       >
//         <p className="text-gray-600 italic">
//           Still have questions? Contact us at{" "}
//           <a href="mailto:admissions@hospitalityinstitute.in" className="text-amber-700 underline">
//             admissions@hospitalityinstitute.in
//           </a>
//         </p>
//       </motion.div>
//     </div>
//   );
// }


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqData = [
    { 
      question: "What programs do you offer in hospitality management?",
      answer: "We offer comprehensive programs including Bachelor's in Hotel Management, Culinary Arts diplomas, and specialized courses in Tourism & Event Management. All courses combine theoretical knowledge with practical training."
    },
    {
      question: "Are there internship opportunities during the program?",
      answer: "Yes, we partner with leading hotel chains and tourism organizations to provide 6-month mandatory internships. Our placement cell assists students in securing positions at 5-star properties and renowned hospitality brands."
    },
    {
      question: "What are the admission requirements?",
      answer: "Admissions require completion of 10+2 education. Selection is based on entrance exam scores followed by personal interview. International students must provide equivalent qualifications and English proficiency certificates."
    },
    {
      question: "Do you offer accommodation facilities?",
      answer: "Our campus features separate hostels with modern amenities, including meal plans, recreational areas, and 24/7 security. Optional off-campus housing assistance is also available."
    },
  ];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 lg:py-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-playfair text-center text-amber-800 mb-12"
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="space-y-6 max-w-3xl mx-auto">
        {faqData.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="border-l-4 border-amber-700 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-6 space-x-4 focus:outline-none"
            >
              <h3 className="text-lg font-semibold text-gray-800 text-left">
                {item.question}
              </h3>
              <motion.span
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-amber-700 text-2xl"
              >
                {activeIndex === index ? <FiMinus /> : <FiPlus />}
              </motion.span>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 border-t border-amber-50">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mt-12"
      >
        <p className="text-gray-600 italic">
          Still have questions? Contact us at{" "}
          <a href="mailto:admissions@hospitalityinstitute.in" className="text-amber-700 underline">
            admissions@hospitalityinstitute.in
          </a>
        </p>
      </motion.div>
    </div>
  );
}