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
        return "accion-create";
      case "UPDATE":
        return "accion-update";
      case "DELETE":
        return "accion-delete";
      default:
        return "accion-login";
    }
  };

  // Función para evitar que los enlaces de paginación recarguen la página
  const handlePageClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bitacora-container">
      <div className="bitacora-card">
        {/* Encabezado */}
        <div className="bitacora-header">
          <h2>Bitácora</h2>
          {/*<button
            className="btn-detalles"
            style={{
              backgroundColor: "#4f46e5",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
            }}
          >
            Descargar Reporte
          </button>*/}
        </div>

        {/* CONTENEDOR GRID (Reemplaza a la tabla HTML) */}
        <div className="grid-table">
          {/* Cabecera del Grid */}
          <div className="grid-header">
            <div>ID</div>
            <div>Usuario</div>
            <div>Acción</div>
            <div>Módulo Afectado</div>
            <div>Descripción de la Actividad</div>
            <div>Origen / Dispositivo</div>
            <div>Fecha y Hora</div>
          </div>

          {/* Filas del Grid */}
          {registros.map((registro) => (
            <div className="grid-row" key={registro.id}>
              <div
                style={{
                  fontWeight: "600",
                  color: "#6b7280",
                  fontSize: "0.875rem",
                }}
              >
                {registro.id}
              </div>

              <div style={{ fontWeight: "600", color: "#111827" }}>
                {registro.usuario}
              </div>

              <div>
                <span
                  className={`badge-accion ${getColorAccion(registro.accion)}`}
                >
                  {registro.accion}
                </span>
              </div>

              <div>
                <span className="badge-tabla">{registro.modulo_afectado}</span>
              </div>

              <div style={{ color: "#374151", paddingRight: "1rem" }}>
                {registro.descripcion}
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "monospace",
                    color: "#4f46e5",
                    fontWeight: "500",
                  }}
                >
                  {registro.direccion_ip}
                </div>
                <div className="text-xs-muted">{registro.dispositivo}</div>
              </div>

              <div>
                <div style={{ fontWeight: "500", color: "#111827" }}>
                  {new Date(registro.creado_en).toLocaleDateString()}
                </div>
                <div className="text-xs-muted">
                  {new Date(registro.creado_en).toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINACIÓN INTEGRADA */}
        <div className="pagination-container">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
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
