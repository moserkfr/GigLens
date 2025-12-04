// src/pages/AppealSystem.jsx
import React from "react";
import AppealForm from "../components/appeals/AppealForm";
import AppealHistory from "../components/appeals/AppealHistory";

export default function AppealSystem() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 20 }}>
      <div>
        <h2>Appeal System</h2>
        <p>Submit an appeal or view history of appeals.</p>
        <AppealForm />
      </div>

      <div>
        <h3>Appeal History</h3>
        <AppealHistory />
      </div>
    </div>
  );
}
