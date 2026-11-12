import React, { useState } from 'react';

export default function ActividadSimulador() {
  const [password, setPassword] = useState('');
  const [respuestaPhishing, setRespuestaPhishing] = useState(null);

  // Evaluar fortaleza de la contraseña
  const evaluarFortaleza = (pass) => {
    if (!pass) return { texto: '', color: 'w-0', alerta: '' };
    if (pass.length < 6) return { texto: 'Débil (Muy corta)', color: 'w-1/3 bg-rose-500', alerta: 'text-rose-400' };
    if (pass.length < 10 || !/[A-Z]/.test(pass) || !/[0-9]/.test(pass)) {
      return { texto: 'Media (Aceptable, pero puede mejorar)', color: 'w-2/3 bg-amber-500', alerta: 'text-amber-400' };
    }
    return { texto: 'Fuerte (Excelente combinación)', color: 'w-full bg-emerald-500', alerta: 'text-emerald-400' };
  };

  const estadoPass = evaluarFortaleza(password);

  return (
    <div className="space-y-8 text-slate-100">
      
      {/* Encabezado del Módulo Práctico */}
      <div className="flex items-start gap-3 border-b border-slate-800 pb-4">
        <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 text-lg shrink-0">
          💻
        </div>
        <div>
          <h3 className="text-xl font-bold text-white tracking-wide">
            Simulador Interactivo: Prácticas de Ciberseguridad
          </h3>
          <p className="text-sm text-slate-300 mt-1">
            Pon a prueba tu criterio ante simuladores reales de contraseñas seguras y detección de amenazas.
          </p>
        </div>
      </div>

      {/* Analogía Didáctica (Transposición) */}
      <div className="bg-slate-950/80 border border-cyan-500/30 rounded-2xl p-5 space-y-2">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
          <span>💡</span>
          <span>Analogía Didáctica (Transposición):</span>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Tu contraseña en internet es como la llave de la puerta principal de tu casa. Si usas una llave de juguete (como <code className="text-cyan-300">"123456"</code> o <code className="text-cyan-300">"contraseña"</code>), cualquiera puede entrar fácilmente. Una contraseña robusta es como una combinación blindada que protege tus espacios privados.
        </p>
      </div>

      {/* Ejercicio 1: Fortaleza de Contraseñas */}
      <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-6 space-y-4">
        <h4 className="text-sm font-bold text-white tracking-wide uppercase text-cyan-400">
          Prueba 1: Fortaleza de Contraseñas
        </h4>
        <p className="text-sm text-slate-300 leading-relaxed">
          Escribe una contraseña de prueba y observa el análisis de seguridad en tiempo real:
        </p>

        <div className="space-y-3">
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Escribe una contraseña..."
            className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3.5 text-base text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
          />

          {/* Barra de progreso */}
          <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
            <div className={`h-full transition-all duration-300 ${estadoPass.color}`}></div>
          </div>

          {password && (
            <p className={`text-xs font-semibold mt-1 flex items-center gap-1.5 ${estadoPass.alerta}`}>
              <span>⚠️</span> Estado: {estadoPass.texto}
            </p>
          )}
        </div>
      </div>

      {/* Ejercicio 2: Simulador de Caso (Phishing) */}
      <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-6 space-y-4">
        <h4 className="text-sm font-bold text-white tracking-wide uppercase text-cyan-400">
          Prueba 2: Simulador de Caso — ¿Qué harías?
        </h4>
        <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/80 p-4 rounded-xl border border-slate-800 font-mono">
          💬 Recibes un enlace por mensaje directo de un perfil desconocido que dice: <span className="text-cyan-300">"¡Ganaste un teléfono gratis, ingresa aquí!"</span>. ¿Qué acción tomas?
        </p>

        <div className="grid sm:grid-cols-2 gap-4 pt-2">
          {/* Opción 1: Sin pistas de color previo e iconos neutrales */}
          <button 
            onClick={() => setRespuestaPhishing(false)}
            className="bg-slate-900 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-400/60 text-slate-300 text-sm p-4 rounded-xl transition text-left cursor-pointer flex items-center gap-3 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
            <span className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 text-xs shrink-0 font-mono">
              🔍
            </span>
            <span>Hacer clic para ver si es real</span>
          </button>

          {/* Opción 2: Sin pistas de color previo e iconos neutrales */}
          <button 
            onClick={() => setRespuestaPhishing(true)}
            className="bg-slate-900 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-400/60 text-slate-300 text-sm p-4 rounded-xl transition text-left cursor-pointer flex items-center gap-3 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
            <span className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 text-xs shrink-0 font-mono">
              🛡️
            </span>
            <span>Ignorar, reportar y bloquear el perfil</span>
          </button>
        </div>

        {respuestaPhishing !== null && (
          <div className={`p-4 rounded-xl text-xs font-semibold ${
            respuestaPhishing 
              ? "bg-emerald-950/80 border border-emerald-800 text-emerald-400" 
              : "bg-rose-950/80 border border-rose-800 text-rose-400"
          }`}>
            {respuestaPhishing 
              ? "🎉 ¡Correcto! Has evitado un intento de Phishing y protegido tu identidad digital." 
              : "⚠️ ¡Peligro! Hacer clic en enlaces desconocidos expone tus credenciales a atacantes."}
          </div>
        )}
      </div>

    </div>
  );
}