// import React from "react";
// import Building from '../assets/Building.png'
// import Student from '../assets/Student.png'
// import chef from '../assets/chef.png'
// import HeadingImg from '../assets/About_us_Intro.png'

// const About = () => {
//   return (
//     <div className="w-full flex flex-col items-center">
//       <h1 className="text-2xl font-bold">About Us</h1>
//       <div className="main-img w-full flex justify-center"><img className="w-[80%]" src={HeadingImg} alt="" /></div>
//       <div className="w-full flex flex-col items-center p-6">
//         <h2>Our Story</h2>
//         <div className="w-full flex flex-col items-center">
//           <div className="flex md:w-[70%] bg-gray-100 justify-between items-center">
//             <p className="p-4">
//               Our Managing Director Dr. Ashok Singhal and his wife after
//               traveling around the world decided to set up a beautiful resort in
//               India to provide international hospitality facilities and feel to
//               Indians. There should be an environment where people get a chance
//               to see the forest, wildlife, water and air in their natural form.
//               People can relax there for a few days and get the most memorable
//               experience of their life. They can celebrate the small and big
//               joys of life in a fun-filled environment with nature under the
//               open sky.
//             </p>
//             <img className="p-6" src={Building} alt="" />
//           </div>
//           <div className="flex md:w-[70%] justify-between items-center p-6">
//             <img src={Student} alt="" />
//             <p className="p-4">
//               He eventually built the "Corbett Nishk Resort" near Ramnagar,
//               Nainital, Uttarakhand, after giving all of this some thought.
//               Because of this resort, many locals have also found employment.
//               Better facilities are being offered to guests at the resort in
//               every way possible. He has now come to the conclusion that in
//               order to improve the resort's amenities, the staff must receive
//               better education and training, as well as instruction on
//               international services in order for employees to feel competent in
//               every manner.
//             </p>
//           </div>
//           <div className="flex md:w-[70%] bg-gray-100 justify-between items-center p-6">
//             <p className="p-4">
//               In this direction, an institute called the "Nischey Institute of
//               Hospitality Management" has been built, where all staff members
//               and the younger generation will receive education and training on
//               hospitality skills to help them have bright futures. Every student
//               will receive appropriate training for learning hospitality skills.
//               They will gain skills during this program that will enable them to
//               find employment both domestically and overseas with ease. If they
//               so choose, they can also start their own business to become
//               entrepreneur.
//             </p>
//             <img src={chef} alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;




// import { FaShippingFast, FaHeadset, FaMoneyCheckAlt } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import Building from '../assets/Building.png'

// export default function AboutUs() {
//   return (
//     <div className="bg-gray-100">
//       {/* Header Section */}
//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
//         className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${Building})` }}>
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <h1 className="text-4xl text-white font-bold">About Us</h1>
//         </div>
//       </motion.div>

//       {/* Content Section */}
//       <div className="max-w-6xl mx-auto py-12 px-6">
//         <motion.h2 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}
//           className="text-2xl font-bold text-center mb-6">
//           We Are A Food Agency Focused On Delivering Content And Utility User-Experiences.
//         </motion.h2>
//         <p className="text-gray-700 text-center mb-8">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
//         </p>

//         {/* Features Section */}
//         <div className="grid md:grid-cols-3 gap-8 text-center">
//           <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg p-6 rounded-lg">
//             <FaShippingFast className="text-green-500 text-4xl mx-auto mb-4" />
//             <h3 className="text-lg font-semibold">Fast Free Delivery</h3>
//             <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </motion.div>
//           <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg p-6 rounded-lg">
//             <FaMoneyCheckAlt className="text-green-500 text-4xl mx-auto mb-4" />
//             <h3 className="text-lg font-semibold">100% Money Back Guarantee</h3>
//             <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </motion.div>
//           <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg p-6 rounded-lg">
//             <FaHeadset className="text-green-500 text-4xl mx-auto mb-4" />
//             <h3 className="text-lg font-semibold">Online Support 24/7</h3>
//             <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </motion.div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-green-700 text-white text-center py-6 mt-12">
//         <p>© 2025 Your Company. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }




import { FaShippingFast, FaHeadset, FaMoneyCheckAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Building from '../assets/Building.png'
import Student from '../assets/Student.png'
import chef from '../assets/chef.png'
import HeadingImg from '../assets/About_us_Intro.png'

export default function AboutUs() {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
        className="relative w-full h-64 bg-cover bg-center"style={{ backgroundImage: `url(${HeadingImg})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl text-white font-bold">About Us</h1>
        </div>
      </motion.div>

      {/* About Sections */}
      <div className="max-w-6xl mx-auto py-12 px-6 space-y-12">
        {/* Section 1 */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className="grid md:grid-cols-2 gap-8 items-center">
          <img src={Student} alt="Institute" className="rounded-lg shadow-lg" />
          <div>
            <h2 className="text-2xl font-bold mb-4">A Legacy of Excellence</h2>
            <p className="text-gray-700 mb-4">The NIHM is established under aegis of "Navdisha Foundation" in 2025. Offering top-notch education to the region's aspirants and career-focused pupils is the society's goal.The institute focuses on giving student’s quality education and training in the field of Hospitality so they don't have to travel far for their studies.</p>
            {/* <p className="text-gray-700">We offer a conducive environment for learning, fostering academic and extracurricular growth.</p> */}
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className="md:grid md:grid-cols-2 gap-8 items-center flex flex-col-reverse">
          <div>
            <h2 className="text-2xl font-bold mb-4">Best Faculty</h2>
            <p className="text-gray-700 mb-4">Top faculty is deputed by NIHM as this institute is dedicated to providing quality education and training in hospitality to its students. Students who are educated and trained here will become skilled professionals who can get good employment in both industry and society.According to statistics, the Garhwal region is home to some of India's best chefs who work at the most prestigious hotels in the world.  At first, the institute concentrated on the hospitality sector. That’s why the society focused on hospitality education to keep the practice going on. </p>
            {/* <p className="text-gray-700">With a focus on research and practical learning, we empower students to become future leaders.</p> */}
          </div>
          <img src={chef} alt="Education" className="rounded-lg shadow-lg" />
        </motion.div>

        {/* Section 3 */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className="grid md:grid-cols-2 gap-8 items-center">
          <img src={Building} alt="Innovation" className="rounded-lg shadow-lg" />
          <div>
            <h2 className="text-2xl font-bold mb-4">Infrastructure</h2>
            <p className="text-gray-700 mb-4">Since NIHM is situated in a resort's campus and is connected to it, it is the greatest location for hospitality education and training. Students will get real-world experience here, which will help them deal with any circumstance in the future. Here, students will be given the opportunity to take up part-time jobs (under the Work-While-Learn scheme) apart from their studies, so that they will not be seen as newcomers after completing their education and training and will also get an opportunity to get a good salary package when they enter the workforce. </p>
            {/* <p className="text-gray-700">With a strong emphasis on holistic learning, we shape students into well-rounded individuals ready for the global stage.</p> */}
          </div>
        </motion.div>
      </div>

          {/* Content Section */}
      <div className="max-w-6xl mx-auto py-12 px-6">
         <motion.h2 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}
          className="text-2xl font-bold text-center mb-6">
          We Are A Food Agency Focused On Delivering Content And Utility User-Experiences.
        </motion.h2>
        <p className="text-gray-700 text-center mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </p>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg p-6 rounded-lg">
            <FaShippingFast className="text-green-500 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Fast Free Delivery</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg p-6 rounded-lg">
            <FaMoneyCheckAlt className="text-green-500 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold">100% Money Back Guarantee</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg p-6 rounded-lg">
            <FaHeadset className="text-green-500 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Online Support 24/7</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center py-6 mt-12">
        <p>© 2025 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
