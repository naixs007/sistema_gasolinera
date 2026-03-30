import React, { useState } from "react";

const Bitacora = () => {
  const [registros] = useState([
    {
      id: "1001",
      usuario: "Wigmar B. (Admin)",
      accion: "UPDATE",
      modulo_afectado: "Configuración de Precios",
      descripcion: "Actualizó el precio base del Diésel a 3.74 Bs.",
      direccion_ip: "192.168.1.15",
      dispositivo: "Panel Web (Windows)",
      creado_en: "2026-03-29T14:30:00",
    },
    {
      id: "1002",
      usuario: "Melissa S. (Secretaria)",
      accion: "CREATE",
      modulo_afectado: "Gestión de Personal",
      descripcion: "Registró en el sistema al nuevo guardia de seguridad.",
      direccion_ip: "192.168.1.20",
      dispositivo: "Panel Web (Windows)",
      creado_en: "2026-03-29T14:45:00",
    },
    {
      id: "1003",
      usuario: "Oscar C. (Operador)",
      accion: "LOGIN",
      modulo_afectado: "Autenticación",
      descripcion: "Inició sesión para apertura de turno.",
      direccion_ip: "192.168.1.12",
      dispositivo: "App Móvil (Android)",
      creado_en: "2026-03-29T15:00:00",
    },
    {
      id: "1004",
      usuario: "Bryan A. (Gerente)",
      accion: "UPDATE",
      modulo_afectado: "Límites de Consumo",
      descripcion:
        "Aumentó el límite mensual del cliente corporativo (CI: 456789).",
      direccion_ip: "192.168.1.10",
      dispositivo: "App Móvil (iOS)",
      creado_en: "2026-03-29T15:12:30",
    },
  ]);

  const getColorAccion = (accion) => {
    switch (accion) {
      case "CREATE":
        return "bg-green-100 text-green-800";
      case "UPDATE":
        return "bg-blue-100 text-blue-800";
      case "DELETE":
        return "bg-red-100 text-red-800";
      default:
        return "bg-purple-100 text-purple-800";
    }
  };

  const getAccionLabel = (accion) => {
    const labels = {
      CREATE: "Crear",
      UPDATE: "Actualizar",
      DELETE: "Eliminar",
      LOGIN: "Acceso",
    };
    return labels[accion] || accion;
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 text-white px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Auditoría de Movimientos del Sistema
          </h2>
        </div>

        {/* Table Container - Responsive with horizontal scroll on small screens */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            {/* Table Header */}
            <thead className="bg-slate-200 border-b border-slate-300">
              <tr>
                <th className="px-2 sm:px-4 py-3 text-left font-bold text-slate-900">
                  ID
                </th>
                <th className="px-2 sm:px-4 py-3 text-left font-bold text-slate-900">
                  Usuario
                </th>
                <th className="px-2 sm:px-4 py-3 text-left font-bold text-slate-900">
                  Acción
                </th>
                <th className="px-2 sm:px-4 py-3 text-left font-bold text-slate-900 hidden md:table-cell">
                  Módulo
                </th>
                <th className="px-2 sm:px-4 py-3 text-left font-bold text-slate-900 hidden lg:table-cell">
                  Descripción
                </th>
                <th className="px-2 sm:px-4 py-3 text-left font-bold text-slate-900 hidden sm:table-cell">
                  Origen
                </th>
                <th className="px-2 sm:px-4 py-3 text-left font-bold text-slate-900">
                  Fecha/Hora
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {registros.map((registro, idx) => (
                <tr
                  key={registro.id}
                  className={`border-b border-slate-200 hover:bg-slate-50 transition ${
                    idx % 2 === 0 ? "bg-white" : "bg-slate-50"
                  }`}
                >
                  {/* ID */}
                  <td className="px-2 sm:px-4 py-3 font-bold text-slate-700">
                    {registro.id}
                  </td>

                  {/* Usuario */}
                  <td className="px-2 sm:px-4 py-3 font-semibold text-slate-900 text-xs sm:text-sm">
                    {registro.usuario}
                  </td>

                  {/* Acción */}
                  <td className="px-2 sm:px-4 py-3">
                    <span
                      className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${getColorAccion(registro.accion)}`}
                    >
                      {getAccionLabel(registro.accion)}
                    </span>
                  </td>

                  {/* Módulo (Hidden on mobile) */}
                  <td className="px-2 sm:px-4 py-3 hidden md:table-cell text-slate-700 text-xs sm:text-sm">
                    <span className="inline-block bg-slate-100 px-2 sm:px-3 py-1 rounded text-xs">
                      {registro.modulo_afectado.substring(0, 15)}...
                    </span>
                  </td>

                  {/* Descripción (Hidden on desktop, shown via click) */}
                  <td className="px-2 sm:px-4 py-3 hidden lg:table-cell text-slate-700 text-xs sm:text-sm max-w-xs truncate">
                    {registro.descripcion}
                  </td>

                  {/* Origen (Hidden on mobile) */}
                  <td className="px-2 sm:px-4 py-3 hidden sm:table-cell text-xs sm:text-sm">
                    <div className="font-mono text-blue-600 text-xs">
                      {registro.direccion_ip.substring(0, 12)}...
                    </div>
                    <div className="text-slate-600 text-xs hidden md:block">
                      {registro.dispositivo.substring(0, 12)}...
                    </div>
                  </td>

                  {/* Fecha y Hora */}
                  <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm">
                    <div className="font-semibold text-slate-900">
                      {new Date(registro.creado_en).toLocaleDateString(
                        "es-BO",
                        {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        },
                      )}
                    </div>
                    <div className="text-slate-600 text-xs">
                      {new Date(registro.creado_en).toLocaleTimeString(
                        "es-BO",
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                        },
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-4 sm:px-6 lg:px-8 py-4 bg-slate-50 border-t border-slate-200">
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
            <button className="px-2 sm:px-3 py-1 sm:py-2 rounded border border-slate-300 text-slate-600 hover:bg-slate-100 disabled:opacity-50 text-xs sm:text-sm disabled:cursor-not-allowed">
              Anterior
            </button>
            <button className="px-2 sm:px-3 py-1 sm:py-2 rounded bg-slate-900 text-white text-xs sm:text-sm">
              1
            </button>
            <button className="px-2 sm:px-3 py-1 sm:py-2 rounded border border-slate-300 text-slate-600 hover:bg-slate-100 text-xs sm:text-sm">
              2
            </button>
            <button className="px-2 sm:px-3 py-1 sm:py-2 rounded border border-slate-300 text-slate-600 hover:bg-slate-100 text-xs sm:text-sm">
              3
            </button>
            <button className="px-2 sm:px-3 py-1 sm:py-2 rounded border border-slate-300 text-slate-600 hover:bg-slate-100 text-xs sm:text-sm">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bitacora;
