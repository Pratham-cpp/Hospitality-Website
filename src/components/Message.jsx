// import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
// import { useState } from 'react';
// const Message = () => {
//     const[messagefl,changeFl] = useState(true);
//     function changeMessFl(){
//         changeFl(!messagefl);
//     }
//   return (
//     <div className='relative' >
//         <div className={`absolute h-4 w-4  ${messagefl?"rotate-[-360deg]":"rotate-[360deg]"} `} onClick={changeMessFl} >
//             <MdOutlineMessage/>
//         </div>
//         <div className={`absolute h-4 w-4  transition-all ${messagefl?"translate-y-[2rem] opacity-100":"opacity-0"}`}>
//             <FaPhone/>
//         </div>
//         <div className={`absolute h-4 w-4  transition-all ${messagefl?"translate-y-[4rem]":"opacity-0"}`}>
//             <CiMail/>
//         </div>
//         <div className={`absolute h-4 w-4  transition-all ${messagefl?"translate-y-[6rem]":"opacity-0"}`}>
//             <FaWhatsapp/>
//         </div>


//     </div>
//   )
// }


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Message = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 left-4 flex flex-col items-center gap-2 z-20">
      <AnimatePresence>
        {isOpen && (
          <>
            {/* WhatsApp Button */}
            <motion.a
              href="https://api.whatsapp.com/send?phone=7982038715" // Replace with your WhatsApp link
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="p-2 bg-whatsappGreen-100 rounded-full shadow-lg text-white text-4xl"
            >
              <FaWhatsapp/>
            </motion.a>

            {/* Message Button */}
            <motion.a
              href="mailto:<jindalspratham.pj@gmail.com>" // Replace with your SMS link
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="p-2 bg-mailRed-100 rounded-full shadow-lg text-white text-4xl"
            >
              <CiMail/>
            </motion.a>

            {/* Call Button */}
            <motion.a
              href="tel:+91 7982038715" // Replace with your call link
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="p-3 bg-callGreen-100 rounded-full shadow-lg text-white text-3xl"
            >
              <FaPhone/>
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={toggleMenu}
        whileTap={{ rotate: 120 }}
        className="p-3 bg-purple-400 rounded-full shadow-lg text-white text-3xl z-[51] "
      >
        {isOpen ? <RxCross2/> : <MdOutlineMessage/>}
        
      </motion.button>
    </div>
  );
};

export default Message;
// export default FloatingMenu;


























// import React, { useState } from "react";
// import { motion } from "framer-motion";
// // import { Button } from "@/components/ui/button";
// import { MdOutlineMessage } from "react-icons/md";
// import { FaPhone } from "react-icons/fa6";
// import { FaWhatsapp } from "react-icons/fa";
// import { CiMail } from "react-icons/ci";

// const Message = () => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const icons = [
//     { id: 1, icon: <FaPhone />, label: "Phone" },
//     { id: 2, icon: <FaWhatsapp />, label: "WhatsApp" },
//     { id: 3, icon: <CiMail />, label: "Mail" },
//   ];

//   return (
//     <div className="relative flex items-center justify-center h-40">
//       {/* Main button */}
//       <motion.div
//         initial={{ rotate: 0 }}
//         animate={{ rotate: isExpanded ? 180 : 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <button onClick={toggleExpand} className="rounded-full p-4">
//           <MdOutlineMessage size={24} />
//         </button>
//       </motion.div>

//       {/* Emerging buttons */}
//       <div className="absolute flex flex-col items-center space-y-2">
//         {isExpanded && (
//           <>
//             {icons.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: -(index + 1) * 60 }}
//                 exit={{ opacity: 0, y: 10 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//               >
//                 <button className="rounded-full p-4 flex items-center justify-center" aria-label={item.label}>
//                   {item.icon}
//                 </button>
//               </motion.div>
//             ))}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

