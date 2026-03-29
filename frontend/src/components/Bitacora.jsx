import React, { useState } from "react";

const Bitacora = () => {
  // Datos simulados
  const [registros] = useState([
    {
      id: 1,
      accion: "Inicio de turno",
      tabla: "sesiones",
      ip: "192.168.1.10",
      fecha: "2026-03-29T08:00:00",
    },
    {
      id: 2,
      accion: "Venta de gasolina especial",
      tabla: "ventas",
      ip: "192.168.1.12",
      fecha: "2026-03-29T08:15:30",
    },
    {
      id: 3,
      accion: "Sincronización de precios ANH",
      tabla: "combustibles",
      ip: "192.168.1.5",
      fecha: "2026-03-29T09:30:00",
    },
  ]);

  return (
    <div className="bitacora-container">
      <div className="bitacora-card">
        {/* Encabezado */}
        <div className="bitacora-header">
          <h2>Registro de Bitácora</h2>
        </div>

        {/* Tabla */}
        <table className="bitacora-table">
          <thead>
            <tr>
              <th>Acción Realizada</th>
              <th>Módulo / Tabla</th>
              <th>Dirección IP</th>
              <th>Fecha y Hora</th>
            </tr>
          </thead>
          <tbody>
            {registros.map((registro) => (
              <tr key={registro.id}>
                {/* Texto más oscuro para destacar la acción principal */}
                <td style={{ fontWeight: "500", color: "#111827" }}>
                  {registro.accion}
                </td>
                {/* Usamos el estilo badge para la tabla afectada */}
                <td>
                  <span className="badge-tabla">{registro.tabla}</span>
                </td>
                <td>{registro.ip}</td>
                <td>{new Date(registro.fecha).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bitacora;
