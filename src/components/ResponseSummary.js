// src/components/ResponseSummary.js
import React from "react";

const ResponseSummary = ({ summary }) => {
  if (!summary) return null;

  return (
    <div className="border-2 border-gray-300 p-4 rounded-lg mt-4">
      <h2 className="text-lg font-bold">Resumen de Resultados</h2>
      <p><strong>Registros Procesados:</strong> {summary.registros_procesados}</p>
      <p><strong>Registros con Alteraciones:</strong> {summary.registros_con_alteraciones}</p>
      <p><strong>Inconsistencias en Nombre:</strong> {summary.registros_con_inconsistencias_nombre}</p>
      <p><strong>Inconsistencias en Cédula:</strong> {summary.registros_con_inconsistencias_cedula}</p>
      <p><strong>Páginas con Inconsistencias:</strong> {summary.paginas_con_inconsistencias.join(", ")}</p>
    </div>
  );
};

export default ResponseSummary;
