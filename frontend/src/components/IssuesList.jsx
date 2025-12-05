import { useState } from "react";
import AppealModal from "./AppealModal";

export default function IssuesList({ issues = [] }) {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <h3>Flags ({issues.length})</h3>
      <div style={{ display: "grid", gap: 10 }}>
        {issues.length === 0 && <div style={{ color: "#666" }}>No issues detected.</div>}
        {issues.map((it, i) => (
          <div key={i} style={{
            borderLeft: `6px solid ${it.severity === "High" ? "#ef4444" : it.severity === "Medium" ? "#f59e0b" : "#10b981"}`,
            padding: 12,
            background: "#fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <div>
              <div style={{ fontWeight: 600 }}>{it.type || "Issue"}</div>
              <div style={{ color: "#444" }}>{it.message}</div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button className="raiseapp" onClick={() => setSelected(it)}>Raise Appeal</button>
            </div>
          </div>
        ))}
      </div>

      {selected && <AppealModal issue={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
