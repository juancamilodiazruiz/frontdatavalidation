// src/components/LoadingModal.js
import React from "react";

const LoadingModal = ({ show }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-semibold mb-4">Procesando solicitud...</h2>
        {/* Barra de carga animada */}
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div className="h-full bg-blue-500 animate-pulse" style={{ width: "100%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;
