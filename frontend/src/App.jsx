import React, { useState } from "react";
import UploadPage from "./components/UploadPage";
import Dashboard from "./components/Dashboard";
import AppealSystem from "./pages/AppealSystem";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [analysis, setAnalysis] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        {/* main app */}
        <Route
          path="/"
          element={
            !analysis ? (
              <UploadPage onAnalyze={(a) => setAnalysis(a)} />
            ) : (
              <Dashboard analysis={analysis} onBack={() => setAnalysis(null)} />
            )
          }
        />

        {/* appeals page */}
        <Route path="/appeals" element={<AppealSystem />} />
      </Routes>
    </BrowserRouter>
  );
}
