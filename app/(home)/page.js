"use client";
import { motion } from "framer-motion";
import { migrateProducts } from "@/actions/migrateProducts";

const HomePage = () => {
  migrateProducts()
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <motion.h1
        className="text-5xl font-extrabold text-blue-800 drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Bienvenidos a De todo un poco
      </motion.h1>

      <p className="mt-6 text-lg text-gray-700 max-w-md text-center">
        Un espacio donde encontrarás lo que necesitas, desde ideas hasta productos únicos. ¡Explora y disfruta!
      </p>

      <button
        className="mt-8 px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
        onClick={() => alert("¡Gracias por visitar!")}
      >
        Explorar más
      </button>
    </div>
  );
};

export default HomePage;

