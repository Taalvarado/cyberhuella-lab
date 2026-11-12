import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ActividadSimulador from './components/ActividadSimulador';
import EvaluacionForm from './components/EvaluacionForm';

export default function App() {
  const [moduloActivo, setModuloActivo] = useState(1);
  const [objetivoSeleccionado, setObjetivoSeleccionado] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 pb-24">
      
      {/* 1. ENCABEZADO INSTITUCIONAL Y TEMA DEL PROYECTO */}
      <header className="border-b border-slate-900 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-cyan-950 border border-cyan-800 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Universidad Rafael Landívar • TIC
              </span>
              <span className="text-slate-500 text-xs font-mono">• Lab 2026</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white">
              Plan de Clase Digital: <span className="text-cyan-400">Huella Digital & Ciberseguridad</span>
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Laboratorio interactivo de concienciación digital, privacidad y buenas prácticas de desarrollo seguro.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-xs font-mono text-cyan-300 shadow-inner self-start md:self-auto">
            React 18 + Vite | NocoDB Cloud
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        
        {/* 2. OBJETIVOS DE APRENDIZAJE (Con interactividad, luz y movimiento) */}
        <section className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Fundamentos Académicos</span>
            <h2 className="text-xl md:text-2xl font-black tracking-tight text-white mt-1">
              Objetivos de Aprendizaje
            </h2>
            <p className="text-sm text-slate-400">
              Haz clic en cada objetivo para seleccionarlo y destacar su importancia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Objetivo 1 */}
            <motion.div
              onClick={() => setObjetivoSeleccionado(1)}
              whileHover={{ y: -5, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={`rounded-2xl p-6 cursor-pointer transition-all duration-300 flex gap-4 items-start ${
                objetivoSeleccionado === 1
                  ? "bg-slate-900 border-2 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.25)]"
                  : "bg-slate-900/80 border border-slate-800 hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 font-bold shrink-0">
                01
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">Comprender la Huella Digital</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Analiza cómo cada interacción en internet deja un rastro permanente similar a pisadas en la arena.
                </p>
              </div>
            </motion.div>

            {/* Objetivo 2 */}
            <motion.div
              onClick={() => setObjetivoSeleccionado(2)}
              whileHover={{ y: -5, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={`rounded-2xl p-6 cursor-pointer transition-all duration-300 flex gap-4 items-start ${
                objetivoSeleccionado === 2
                  ? "bg-slate-900 border-2 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.25)]"
                  : "bg-slate-900/80 border border-slate-800 hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 font-bold shrink-0">
                02
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">Prácticas de Ciberseguridad</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Aprende a identificar riesgos, enlaces maliciosos y la importancia de proteger tus credenciales.
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 3. TRES CAJAS DE LA RUTA DE APRENDIZAJE */}
        <section className="space-y-4">
          <div className="border-b border-slate-800 pb-3">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Navegación Interactiva</span>
            <h2 className="text-xl md:text-2xl font-black tracking-tight text-white mt-1">
              Ruta de Aprendizaje (Ciclo Básico)
            </h2>
            <p className="text-sm text-slate-400">
              Selecciona una caja para desplegar la información y las actividades correspondientes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Caja 1 */}
            <motion.div
              onClick={() => setModuloActivo(1)}
              whileHover={{ y: -5, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={`rounded-2xl p-6 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                moduloActivo === 1
                  ? "bg-slate-900 border-2 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.25)]"
                  : "bg-slate-900/70 border border-slate-800 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]"
              }`}
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 text-xl mb-4">
                  📚
                </div>
                <h3 className="text-lg font-bold text-white mb-1">1. Módulo Teórico</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Fundamentos de huella digital, privacidad en internet y ciberseguridad activa.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-800 text-xs font-semibold">
                <span className={moduloActivo === 1 ? "text-cyan-400" : "text-slate-500"}>
                  {moduloActivo === 1 ? "▶ Módulo activo en pantalla" : "Haz clic para seleccionar →"}
                </span>
              </div>
            </motion.div>

            {/* Caja 2 */}
            <motion.div
              onClick={() => setModuloActivo(2)}
              whileHover={{ y: -5, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={`rounded-2xl p-6 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                moduloActivo === 2
                  ? "bg-slate-900 border-2 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.25)]"
                  : "bg-slate-900/70 border border-slate-800 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]"
              }`}
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 text-xl mb-4">
                  💻
                </div>
                <h3 className="text-lg font-bold text-white mb-1">2. Módulo Práctico</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Simulador interactivo de contraseñas seguras y análisis de casos de phishing.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-800 text-xs font-semibold">
                <span className={moduloActivo === 2 ? "text-cyan-400" : "text-slate-500"}>
                  {moduloActivo === 2 ? "▶ Módulo activo en pantalla" : "Haz clic para seleccionar →"}
                </span>
              </div>
            </motion.div>

            {/* Caja 3 */}
            <motion.div
              onClick={() => setModuloActivo(3)}
              whileHover={{ y: -5, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={`rounded-2xl p-6 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                moduloActivo === 3
                  ? "bg-slate-900 border-2 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.25)]"
                  : "bg-slate-900/70 border border-slate-800 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]"
              }`}
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 text-xl mb-4">
                  📝
                </div>
                <h3 className="text-lg font-bold text-white mb-1">3. Evaluación y Registro</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Envío de reflexiones y sincronización en tiempo real con la base de datos de NocoDB.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-800 text-xs font-semibold">
                <span className={moduloActivo === 3 ? "text-cyan-400" : "text-slate-500"}>
                  {moduloActivo === 3 ? "▶ Módulo activo en pantalla" : "Haz clic para seleccionar →"}
                </span>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 4. CONTENIDO DINÁMICO SEGÚN LA SELECCIÓN (Estrictamente adaptado a paleta oscura y cian) */}
        <AnimatePresence mode="wait">
          
          {/* MÓDULO 1: TEÓRICO ENRIQUECIDO */}
          {moduloActivo === 1 && (
            <motion.section
              key="mod-1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl space-y-8"
            >
              <div className="border-b border-slate-800 pb-4">
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Fase 1: Fundamentos teóricos</span>
                <h2 className="text-2xl font-extrabold text-white mt-1">Guía Didáctica: Huella Digital & Ciberseguridad</h2>
                <p className="text-sm text-slate-400 mt-1">Conceptos esenciales para comprender el impacto de nuestras acciones en entornos digitales.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 text-lg">
                    🔒
                  </div>
                  <h3 className="font-bold text-white text-base">¿Qué es la Huella Digital?</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Es el rastro de datos imborrable que generas al navegar: historiales de búsqueda, publicaciones en redes sociales, compras y metadatos de ubicación. ¡Nada desaparece por completo en la red!
                  </p>
                </div>

                <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 text-lg">
                    🌐
                  </div>
                  <h3 className="font-bold text-white text-base">Impacto en tu Privacidad</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Las empresas y atacantes analizan tu huella digital para crear perfiles de comportamiento detallados. Controlar la información que compartes es clave para evitar la usurpación de identidad.
                  </p>
                </div>

                <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 text-lg">
                    🛡️
                  </div>
                  <h3 className="font-bold text-white text-base">Ciberseguridad Activa</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Conjunto de prácticas preventivas (como contraseñas robustas y autenticación de dos pasos - 2FA) diseñadas para blindar tus dispositivos y cuentas frente a accesos maliciosos.
                  </p>
                </div>
              </div>
            </motion.section>
          )}

          {/* MÓDULO 2: PRÁCTICO (Fondo oscuro y bordes cian coordinados) */}
          {moduloActivo === 2 && (
            <motion.section
              key="mod-2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900 border border-cyan-500/50 rounded-2xl p-6 md:p-8 shadow-[0_0_35px_rgba(6,182,212,0.15)] space-y-6"
            >
              <ActividadSimulador />
            </motion.section>
          )}

          {/* MÓDULO 3: EVALUACIÓN Y REGISTRO (Con botón brillante cian y NocoDB) */}
          {moduloActivo === 3 && (
            <motion.section
              key="mod-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900 border border-cyan-500/50 rounded-2xl p-6 md:p-8 shadow-[0_0_35px_rgba(6,182,212,0.15)] space-y-6"
            >
              <EvaluacionForm />
            </motion.section>
          )}

        </AnimatePresence>

      </main>

      {/* Pie de página institucional */}
      <footer className="mt-24 border-t border-slate-900 pt-6 text-center text-xs text-slate-500">
        Universidad Rafael Landívar • Tonny Alvarado © 2026
      </footer>

    </div>
  );
}