import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import { motion, AnimatePresence } from "framer-motion"; // Smooth animation
import Logo from '../assets/Website Logo.png' // Replace with your logo path
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import Button from './Button';

const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen); ;

  return (
    <nav className={`fixed top-0 w-full transition-all duration-300 ${scroll ? "bg-white text-black shadow-md" : "bg-blackTrans-100 text-white"}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <NavLink to={'/'} className="flex items-center">
          <img src={Logo} alt="Logo" className="w-60" />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden xl:flex xl:items-center xl:text-xl space-x-8 font-medium">
          <li><NavLink to='/' className="hover:text-orange-600 cursor-pointer">Home</NavLink></li>
          <li ><NavLink to='/course' className="hover:text-orange-600 cursor-pointer">Course</NavLink></li>
          <li ><NavLink to='/gallery' className="hover:text-orange-600 cursor-pointer">Gallery</NavLink></li>
          <li><NavLink to='/about' className="hover:text-orange-600 cursor-pointer">About Us</NavLink></li>
          <li ><NavLink to='/contact' className="hover:text-orange-600 cursor-pointer">Contact Us</NavLink></li>
          <li onClick={props.formHandler}><Button /></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="xl:hidden flex items-center">
          <button onClick={toggleMenu} className={`${scroll ? "text-gray-800":"text-gray-100"} text-2xl focus:outline-none`}>
            {menuOpen ? <RxCross2 /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Animate on Open */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-3/4 h-screen bg-white shadow-lg p-6 xl:hidden"
          >
              <RxCross2 onClick={toggleMenu} className="absolute right-8 text-gray-800 text-2xl focus:outline-none" />
            <ul className="flex flex-col space-y-6 text-gray-700 text-lg font-medium w-[10rem]">
              <li onClick={toggleMenu}><NavLink to='/' className="hover:text-orange-600 cursor-pointer">Home</NavLink></li>
              <li onClick={toggleMenu}><NavLink to='/course' className="hover:text-orange-600 cursor-pointer">Course</NavLink></li>
              <li onClick={toggleMenu}><NavLink to='/gallery' className="hover:text-orange-600 cursor-pointer">Gallery</NavLink></li>
              <li onClick={toggleMenu}><NavLink to='/about' className="hover:text-orange-600 cursor-pointer">About us</NavLink></li>
              <li onClick={toggleMenu}><NavLink to='/contact' className="hover:text-orange-600 cursor-pointer">Contact Us</NavLink></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;

