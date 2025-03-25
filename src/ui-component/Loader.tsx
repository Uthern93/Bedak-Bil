import React from "react";

const Loader: React.FC = () => {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        fontSize: "20px"
      }}>
        <div className="spinner"></div>
        <p>Loading...</p>
        <style>
          {`
            .spinner {
              width: 40px;
              height: 40px;
              border: 5px solid rgba(0, 0, 0, 0.3);
              border-top-color: #3498db;
              border-radius: 50%;
              animation: spin 1s linear infinite;
            }
            
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  };
  

export default Loader;
