"use client";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        className="flex items-center justify-center space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-4 h-4 bg-blue-600 rounded-full animate-ping"></div>
        <div className="w-4 h-4 bg-blue-600 rounded-full animate-pulse"></div>
        <div className="w-4 h-4 bg-blue-600 rounded-full animate-ping"></div>
      </motion.div>
      <p className="mt-4 text-gray-500 font-medium text-lg">Cargando productos...</p>
    </div>
  );
};

export default Loading;