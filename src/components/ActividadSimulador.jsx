import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ActividadSimulador() {
  const [respuesta, setRespuesta] = useState(null);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-6">
      <h3 className="text-lg font-bold text-slate-800 mb-2">Simulador de Caso: ¿Qué harías?</h3>
      <p className="text-sm text-slate-600 mb-4">
        Recibes un enlace por mensaje directo de un perfil desconocido que dice: <em>"¡Ganaste un teléfono gratis, ingresa aquí!"</em>. ¿Qué acción tomas?
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button 
          onClick={() => setRespuesta('incorrecto')}
          className="bg-red-50 text-red-700 border border-red-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition"
        >
          Hacer clic para ver si es real
        </button>
        <button 
          onClick={() => setRespuesta('correcto')}
          className="bg-green-50 text-green-700 border border-green-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-100 transition"
        >
          Ignorar, reportar y bloquear el perfil
        </button>
      </div>

      {respuesta && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 p-3 rounded-lg text-sm ${respuesta === 'correcto' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
        >
          {respuesta === 'correcto' 
            ? '¡Excelente decisión! Protegiste tu huella digital de posibles estafas y robo de datos.' 
            : '¡Cuidado! Esa es una técnica común de Phishing para robar tu información personal.'}
        </motion.div>
      )}
    </div>
  );
}