import React from 'react';
import { motion } from 'framer-motion';

export default function ObjetivoCard({ numero, titulo, descripcion }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start gap-4 mb-4"
    >
      <span className="bg-cyan-100 text-cyan-800 font-bold px-3 py-1 rounded-lg text-sm">
        {numero}
      </span>
      <div>
        <h3 className="font-semibold text-slate-800 text-lg">{titulo}</h3>
        <p className="text-slate-600 text-sm mt-1">{descripcion}</p>
      </div>
    </motion.div>
  );
}