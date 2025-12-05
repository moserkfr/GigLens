// src/pages/AppealSystem.jsx
import React from "react";
import AppealForm from "../components/appeals/AppealForm";
import AppealHistory from "../components/appeals/AppealHistory";

export default function AppealSystem() {
  return (
    <div className="Background" style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 20 }}>
    <div className="appSquare">
    <div className="appealformheader">
        <h2>Appeal System</h2>
        <p>Submit an appeal or view history of appeals.</p>
        <AppealForm />
      </div>

      <div className="appealhistoryheader">
        <h3>Appeal History</h3>
        <AppealHistory />
      </div>
    </div>
    </div>
  );
}
