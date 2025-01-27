import React, { useState } from "react";
import "./MobileUsageDetection.css"; // Import custom CSS file

export default function MobileUsageDetection() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [results, setResults] = useState([
    { id: 1, name: "Violation01", time: "00:01:36" },
    { id: 2, name: "Violation02", time: "00:02:16" },
    { id: 3, name: "Violation03", time: "00:02:44" },
  ]);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const handleProcess = () => {
    console.log("Processing files:", uploadedFiles);
  };

  const handleCancel = () => {
    setUploadedFiles([]);
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Mobile Phone Usage Detection</h1>

        <div className="upload-area">
          <div className="icon">📤</div>
          <p className="text">Upload file or drop here</p>
          <input
            type="file"
            multiple
            className="file-input"
            id="file-upload"
            onChange={handleFileUpload}
          />
          <label htmlFor="file-upload" className="upload-button">
            Choose Files
          </label>
        </div>

        <div className="button-group">
          <button className="process-button" onClick={handleProcess}>
            Process
          </button>
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>

      <div className="card results">
        <h2 className="subtitle">Results</h2>
        <div className="results-grid">
          {results.map((result) => (
            <div key={result.id} className="result-card">
              <div className="result-icon">📄</div>
              <p className="result-name">{result.name}</p>
              <p className="result-time">{result.time}</p>
              <button className="download-button">Download</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
