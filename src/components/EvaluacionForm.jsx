import React, { useState } from 'react';

export default function EvaluacionForm() {
  const [nombre, setNombre] = useState('');
  const [compromiso, setCompromiso] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setMensaje('');

    try {
      const response = await fetch("https://app.nocodb.com/api/v3/data/pruqrxfv87uaqxn/m2wq09igdbe725y/records", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "xc-token": "nc_pat_pDAgH2uVFbEcNABHCSsgjq1pjnpv3lFJxH1SVtWc"
        },
        body: JSON.stringify({
          fields: {
            nombre: nombre,
            compromiso: compromiso
          }
        })
      });

      if (response.ok) {
        setMensaje("¡Compromiso guardado con éxito en NocoDB!");
        setNombre('');
        setCompromiso('');
      } else {
        const errorData = await response.json();
        console.error("Detalle del error:", errorData);
        setMensaje("Hubo un error al guardar el registro.");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      setMensaje("Error de conexión con el servidor.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="space-y-6 text-slate-100">
      {/* Encabezado de la Sección */}
      <div className="flex items-start gap-3 border-b border-slate-800 pb-4">
        <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 text-lg shrink-0">
          📝
        </div>
        <div>
          <h3 className="text-xl font-bold text-white tracking-wide">
            Evaluación y Registro de Actividad (NocoDB)
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Responde a la pregunta final del módulo y envía tu resultado a la base de datos central en la nube.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Nombre del Estudiante:
          </label>
          <input 
            type="text" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            required
            placeholder="Ej. Juan Pérez"
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Tu Compromiso de Ciberseguridad / Reflexión:
          </label>
          <textarea 
            value={compromiso} 
            onChange={(e) => setCompromiso(e.target.value)} 
            required
            rows={4}
            placeholder="Escribe tu reflexión aquí..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition resize-none"
          />
        </div>

        {/* Botón Brillante con Resplandor Cian */}
        <button 
          type="submit" 
          disabled={enviando}
          className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold py-3.5 px-6 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          <span>📤</span> {enviando ? "Guardando en NocoDB..." : "Enviar Compromiso"}
        </button>
      </form>

      {mensaje && (
        <div className={`p-4 rounded-xl text-center text-sm font-semibold ${
          mensaje.includes("éxito") 
            ? "bg-emerald-950/80 border border-emerald-800 text-emerald-400" 
            : "bg-rose-950/80 border border-rose-800 text-rose-400"
        }`}>
          {mensaje}
        </div>
      )}
    </div>
  );
}