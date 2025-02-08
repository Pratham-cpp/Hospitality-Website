import { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";

export default function Button(props) {
  const [hovered, setHovered] = useState(false);

  return (
    <button 
      className={`relative flex items-center px-6 py-3 text-white font-bold text-lg rounded-lg transition-all duration-300 shadow-lg overflow-hidden ${
        hovered ? "bg-orange-500" : "bg-teal-500"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={`flex items-center transition-all duration-300 ${
          hovered ? "pr-6" : "pl-6"
        }`}
      >
        <FaCirclePlus className={`text-xl absolute left-5 transition-all duration-500 mr-2 ${hovered?"opacity-0 scale-0 ":"opacity-100"}`} />
        Admission Enquiry
        <FaCirclePlus className={`text-xl transition-all absolute right-5 duration-300 ml-2 ${hovered?"opacity-100":"opacity-0 scale-0 "}`} />
      </span>
    </button>
  );
}


