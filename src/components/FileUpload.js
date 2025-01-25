// src/components/FileUpload.js
import React, { useState } from "react";

const FileUpload = ({ onFilesSelected }) => {
  const [files, setFiles] = useState(Array(6).fill(null));

  const handleFileChange = (index, event) => {
    const newFiles = [...files];
    newFiles[index] = event.target.files[0];
    setFiles(newFiles);
    onFilesSelected(newFiles);
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {files.map((file, index) => (
        <div key={index} className="border-2 border-gray-300 p-4 rounded-lg text-center">
          <input type="file" onChange={(e) => handleFileChange(index, e)} />
          <p className="text-sm mt-2">{file ? file.name : "Seleccione un archivo"}</p>
        </div>
      ))}
    </div>
  );
};

export default FileUpload;
