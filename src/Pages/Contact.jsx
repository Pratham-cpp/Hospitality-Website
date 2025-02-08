import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 120 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Animated Hero Section */}
      <motion.div 
        className="relative py-24 bg-gradient-to-r from-blue-600 to-purple-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl font-bold text-white mb-6"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            Let's Connect
          </motion.h1>
          <motion.div
            className="w-20 h-1 bg-white mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </motion.div>

      {/* Floating Contact Cards */}
      <motion.div 
        className="container mx-auto px-6 py-16 -mt-16 -translate-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {/* Email Card */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <div className="bg-blue-50 w-fit p-4 rounded-full mx-auto">
              <FaEnvelope className="text-blue-600 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mt-6 mb-4">Email Us</h3>
            <p className="text-gray-600 hover:text-blue-600 transition-colors">
              <a href="mailto:support@cloud.com">support@cloud.com</a>
            </p>
            <p className="text-gray-600 hover:text-blue-600 transition-colors">
              <a href="mailto:info@domain.com">info@domain.com</a>
            </p>
          </motion.div>

          {/* Location Card */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <div className="bg-green-100 w-fit p-4 rounded-full mx-auto">
              <FaMapMarkerAlt className="text-green-600 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mt-6 mb-4">Our Office</h3>
            <p className="text-gray-600">Corbett Nishk Resort and Spa,</p>
            <p className="text-gray-600">Hanuman Dham Road, Corbett,Chhoi</p>
            <p className="text-gray-600">Ramnagar Uttrakhand-244715</p>
          </motion.div>

          {/* Phone Card */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <div className="bg-purple-100 w-fit p-4 rounded-full mx-auto">
              <FaPhone className="text-purple-600 text-3xl -scale-x-100" />
            </div>
            <h3 className="text-xl font-semibold mt-6 mb-4">Call Us</h3>
            <p className="text-gray-600 hover:text-purple-600 transition-colors">
              <a href="tel:+442056581823">+91 7982038715</a>
            </p>
            <p className="text-gray-600 hover:text-purple-600 transition-colors">
              <a href="tel:+44123456789">+91 9873996945</a>
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Interactive Map Section */}
      <motion.div 
        className="w-full h-96 bg-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="relative text-right w-full h-96">
      <div className="overflow-hidden bg-none w-full h-full">
        <iframe
          className="w-full h-full"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=corbett%20nishk&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          allowFullScreen
        ></iframe>
      </div>
    </div>
        
      </motion.div>
    </div>
  );
};

export default Contact;