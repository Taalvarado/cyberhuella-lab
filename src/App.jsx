import React from 'react';
import HeaderClase from './components/HeaderClase';
import ObjetivoCard from './components/ObjetivoCard';
import ActividadSimulador from './components/ActividadSimulador';
import EvaluacionForm from './components/EvaluacionForm';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <HeaderClase 
          titulo="CyberHuella Lab" 
          grado="Ciclo Básico (12 a 16 años)" 
        />

        <main className="space-y-6">
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Objetivos de Aprendizaje</h2>
            <ObjetivoCard 
              numero="01" 
              titulo="Comprender la Huella Digital" 
              descripcion="Analiza cómo cada interacción en internet deja un rastro permanente similar a pisadas en la arena."
            />
            <ObjetivoCard 
              numero="02" 
              titulo="Prácticas de Ciberseguridad" 
              descripcion="Aprende a identificar riesgos, enlaces maliciosos y la importancia de proteger tus credenciales."
            />
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Actividad Práctica</h2>
            <ActividadSimulador />
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Evaluación Interactiva</h2>
            <EvaluacionForm />
          </section>
        </main>
      </div>
    </div>
  );
}