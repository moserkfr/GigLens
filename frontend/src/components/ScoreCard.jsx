// src/components/ScoreCard.jsx
import React from "react";

/**
 * Props:
 *  - score: number (0-100)
 */
export default function ScoreCard({ score = 100 }) {
  const numeric = Number(score ?? 0);
  const color =
    numeric >= 75 ? "var(--success)" :
    numeric >= 40 ? "var(--warning)" :
    "var(--danger)";

  return (
    <div className="card score" style={{ textAlign: "center" }}>
      <div className="small" style={{fontSize:35}}>Fairness Score</div>

      <div
        className="value"
        style={{
          color,
          fontVariantNumeric: "tabular-nums",
          marginTop: 8,
          fontSize: 90,
          fontStyle: "bold",
        }}
      > 
        {numeric}/100
      </div>

      <div className="space-top small">Higher is better</div>
    </div>
  );
}
