export default function ScoreCard({ score = 100 }) {
  const numeric = Number(score);
  const color = numeric >= 75 ? "#16a34a" : numeric >= 40 ? "#f59e0b" : "#ef4444";

  return (
    <div style={{
      border: `2px solid ${color}`,
      padding: 16,
      borderRadius: 8,
      minWidth: 160,
      textAlign: "center",
      boxShadow: "0 6px 18px rgba(0,0,0,0.06)"
    }}>
      <div style={{ fontSize: 14, color: "#444" }}>Fairness Score</div>
      <div style={{ marginTop: 8, fontSize: 36, fontWeight: 700, color }}>{numeric}/100</div>
    </div>
  );
}
