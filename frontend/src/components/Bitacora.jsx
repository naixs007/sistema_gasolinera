import React, { useState } from "react";

const Bitacora = () => {
  const [registros] = useState([
    {
      id: "1001",
      usuario: "Wigmar B. (Admin)",
      accion: "UPDATE",
      modulo_afectado: "Config. de Precios",
      descripcion: "Actualizó el precio base del Diésel a 3.74 Bs.",
      direccion_ip: "192.168.1.15",
      dispositivo: "Panel Web",
      creado_en: "2026-03-29T14:30:00",
    },
    {
      id: "1002",
      usuario: "Melissa S. (Secretaria)",
      accion: "CREATE",
      modulo_afectado: "Gestión Personal",
      descripcion: "Registró en el sistema al nuevo guardia.",
      direccion_ip: "192.168.1.20",
      dispositivo: "Panel Web",
      creado_en: "2026-03-29T14:45:00",
    },
    {
      id: "1003",
      usuario: "Oscar C. (Operador)",
      accion: "LOGIN",
      modulo_afectado: "Autenticación",
      descripcion: "Inició sesión para apertura de turno.",
      direccion_ip: "192.168.1.12",
      dispositivo: "App Móvil",
      creado_en: "2026-03-29T15:00:00",
    },
    {
      id: "1004",
      usuario: "Bryan A. (Gerente)",
      accion: "UPDATE",
      modulo_afectado: "Límites Consumo",
      descripcion: "Aumentó límite mensual corporativo (CI: 456789).",
      direccion_ip: "192.168.1.10",
      dispositivo: "App Móvil",
      creado_en: "2026-03-29T15:12:30",
    },
  ]);

  const handlePageClick = (e) => {
    e.preventDefault();
  };

  const getDeviceType = (dispositivo) => {
    if (dispositivo.includes("Móvil")) return "📱 Móvil";
    if (dispositivo.includes("Web") || dispositivo.includes("Windows"))
      return "🌐 Web";
    return dispositivo.split(" ")[0];
  };

  return (
    <div className="bitacora-container">
      <div className="bitacora-card">
        {/* Encabezado */}
        <div className="bitacora-header">
          <h2>Bitácora</h2>

          {/* Botón de PDF oculto/comentado a petición */}
          {/* <button className="btn-detalles" style={{ backgroundColor: '#4f46e5', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.375rem', cursor: 'pointer' }}>
            Descargar PDF
          </button> 
          */}
        </div>

        {/* CONTENEDOR GRID */}
        <div className="grid-table">
          {/* Cabecera calcada de la imagen */}
          <div className="grid-header">
            <div>ID</div>
            <div>Usuario</div>
            <div>Acción</div>
            <div>Módulo</div>
            <div>Descripción</div>
            <div>Fecha</div>
            <div>Dispositivo</div>
          </div>

          {/* Filas */}
          {registros.map((registro) => (
            <div className="grid-row" key={registro.id}>
              <div>{registro.id}</div>

              {/* Texto principal oscuro y negrita (como el producto en la imagen) */}
              <div className="text-main">{registro.usuario}</div>

              <div>{registro.accion}</div>

              <div>{registro.modulo_afectado}</div>

              <div style={{ paddingRight: "1rem" }}>{registro.descripcion}</div>

              <div>
                <div>{new Date(registro.creado_en).toLocaleDateString()}</div>
                <div style={{ fontSize: "0.75rem" }}>
                  {new Date(registro.creado_en).toLocaleTimeString()}
                </div>
              </div>

              {/* Dispositivo e IP */}
              <div>
                <div style={{ fontWeight: "600" }}>
                  {getDeviceType(registro.dispositivo)}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#4f46e5",
                    fontFamily: "monospace",
                  }}
                >
                  {registro.direccion_ip}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINACIÓN */}
        <div className="pagination-container">
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <a className="page-link" href="#!" onClick={handlePageClick}>
                  Anterior
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#!" onClick={handlePageClick}>
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!" onClick={handlePageClick}>
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!" onClick={handlePageClick}>
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!" onClick={handlePageClick}>
                  Siguiente
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Bitacora;
