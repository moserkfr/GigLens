import React, { useState } from "react";
import UploadPage from "./components/UploadPage";
import Dashboard from "./components/Dashboard";
import "./index.css";

export default function App(){
  const [analysis, setAnalysis] = useState(null);

  return (
    <div>
      {!analysis ? (
        <UploadPage onAnalyze={(a)=>setAnalysis(a)} />
      ) : (
        <Dashboard analysis={analysis} onBack={()=>setAnalysis(null)} />
      )}
    </div>
  );
}
