"use client";
import { motion } from "framer-motion";
import { migrateProducts } from "@/actions/migrateProducts";

const HomePage = () => {
  migrateProducts()
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-black drop-shadow-[0_0_15px_rgba(0,0,0,1)]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ¡Bienvenidos a de todo un poco!
      </motion.h1>

      <motion.p
        className="mt-6 text-lg sm:text-xl md:text-2xl text-black max-w-lg text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        podras encontrar todo para tu hogar
      </motion.p>

      <motion.button
        className="mt-8 px-6 py-3 sm:px-8 sm:py-4 bg-yellow-500 text-black font-bold text-lg sm:text-xl rounded-full shadow-lg hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={() => alert("¡Gracias por visitar nuestra pizzería!")}
      >
        Ver productos
      </motion.button>
    </div>
  );
};

export default HomePage;

