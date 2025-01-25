// src/App.js
import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import DataTable from "./components/DataTable";
import ResponseSummary from "./components/ResponseSummary";
import LoadingModal from "./components/LoadingModal"; // Importar el modal

function App() {
  const [files, setFiles] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false); // Estado para controlar el modal

  const handleProcessData = async () => {

    if (files.length < 5) {
      alert("Por favor, suba los 5 archivos requeridos.");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => {
      if (file) formData.append("files", file);
    });

    console.log("⏳ Procesando solicitud..."); 
    setLoading(true); // Mostrar el modal de carga
    console.log("Estado de loading:", loading); // Verificar si cambia a true

    try {
      const response = await fetch("http://localhost:8000/api/procesar-documentos/", {  // Usa 'localhost' en lugar de '127.0.0.1'
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const result = await response.json();
      setTableData(result.data || []);
      setSummary(result);
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Error procesando los archivos. Ver consola.");
    } finally {
      setLoading(false); // Ocultar el modal cuando finalice la solicitud
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold text-center mb-4">Validación de Datos</h1>

      {/* Modal de carga */}
      <LoadingModal show={loading} />
      
      {/* Carga de archivos */}
      <FileUpload onFilesSelected={setFiles} />

      {/* Botón de procesamiento */}
      <div className="text-center mt-4">
        <button onClick={handleProcessData} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Procesar Datos
        </button>
      </div>

      {/* Tabla de datos */}
      <div className="mt-8">
        <DataTable data={tableData} />
      </div>

      {/* Resumen de resultados */}
      <div className="mt-4">
        <ResponseSummary summary={summary} />
      </div>
    </div>
  );
}

export default App;
