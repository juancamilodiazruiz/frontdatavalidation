// src/components/DataTable.js
import React from "react";

const DataTable = ({ data }) => {
  if (!data || data.length === 0) return <p className="text-center mt-4">No hay datos disponibles.</p>;

  return (
    <div className="overflow-auto max-h-[400px] border-2 border-gray-300 p-4 rounded-lg">
      <table className="min-w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            {Object.keys(data[0]).map((key) => (
              <th key={key} className="border p-2">{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            // Obtener valores booleanos de la fila
            const coincidenciaNombre = row["Coincidencia Nombre"];
            const coincidenciaCedula = row["Coincidencia Cédula"];
            const validezFecha = row["Validez de la Fecha"] ?? true; // Si no existe, asumimos que es true

            // Determinar color de la fila según las condiciones
            let rowColor = "bg-white"; // Por defecto, blanca
            if (!coincidenciaNombre && !coincidenciaCedula || !validezFecha) {
              rowColor = "bg-red-300"; // 🔴 Fila en rojo si ambas son falsas o la fecha es inválida
            } else if (!coincidenciaNombre || !coincidenciaCedula) {
              rowColor = "bg-yellow-300"; // 🟡 Fila en amarillo si solo una es falsa
            }

            return (
              <tr key={index} className={`border ${rowColor}`}>
                {Object.entries(row).map(([key, value], idx) => (
                  <td key={idx} className="border p-2">
                    {typeof value === "boolean" ? (value ? "Sí" : "No") : value}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
