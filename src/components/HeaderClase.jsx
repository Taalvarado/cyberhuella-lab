import React from 'react';
import { motion } from 'framer-motion';

export default function HeaderClase({ titulo, grado }) {
  return (
    <header className="bg-slate-900 text-white p-6 shadow-md flex flex-col md:flex-row justify-between items-center rounded-2xl mb-6">
      <motion.div 
        initial={{ opacity: 0, x: -20 }} 
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-cyan-400">{titulo}</h1>
        <p className="text-sm text-slate-400">Guía Interactiva de Aprendizaje — {grado}</p>
      </motion.div>
      <div className="mt-4 md:mt-0 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700 text-xs text-cyan-300">
        Universidad Rafael Landívar • TIC
      </div>
    </header>
  );
}