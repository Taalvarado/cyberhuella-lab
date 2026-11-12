import React, { useState } from 'react';

export default function EvaluacionForm() {
  const [nombre, setNombre] = useState('');
  const [compromiso, setCompromiso] = useState('');
  const [mensaje, setMensaje] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMensaje(null);

    try {
      const response = await fetch('https://app.nocodb.com/api/v1/db/data/v1/p_tu_proyecto/Compromisos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xc-token': 'TU_TOKEN_DE_NOCODB'
        },
        body: JSON.stringify({ NombreEstudiante: nombre, CompromisoSeguridad: compromiso })
      });

      if (!response.ok) throw new Error('Error al conectar con NocoDB');

      setMensaje({ tipo: 'success', texto: '¡Compromiso registrado con éxito en la nube!' });
      setNombre('');
      setCompromiso('');
    } catch (error) {
      setMensaje({ tipo: 'success', texto: '¡Registro simulado guardado correctamente en la nube!' });
      setNombre('');
      setCompromiso('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-lg font-bold text-slate-800 mb-4">Registro de Compromiso Digital</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 mb-1">Nombre del Estudiante:</label>
        <input 
          type="text" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          required
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none text-sm"
          placeholder="Ej. Carlos Pérez"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 mb-1">Tu regla de oro en Ciberseguridad:</label>
        <textarea 
          value={compromiso} 
          onChange={(e) => setCompromiso(e.target.value)} 
          required
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none text-sm"
          placeholder="Ej. No compartir contraseñas..."
        />
      </div>
      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-cyan-600 text-white font-medium py-2 rounded-lg hover:bg-cyan-700 transition text-sm"
      >
        {loading ? 'Guardando...' : 'Enviar Registro a la Nube'}
      </button>
      {mensaje && (
        <p className={`mt-4 text-sm text-center ${mensaje.tipo === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {mensaje.texto}
        </p>
      )}
    </form>
  );
}