import ScoreCard from "./ScoreCard";
import IssuesList from "./IssuesList";
import EarningsChart from "./EarningsChart";
import RatingsChart from "./RatingsChart";

export default function Dashboard({ analysis, onBack }) {
  const { fairnessScore, issues = [], rawData = {} } = analysis || {};
  const earnings = rawData.earnings || [];
  const ratings = rawData.ratings || [];

  return (
    <div style={{ padding: 20 }}>
      <button onClick={onBack} style={{ marginBottom: 12 }}>← Back</button>

      <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 20 }}>
        <ScoreCard score={fairnessScore ?? 100} />
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: 0 }}>Overview</h3>
          <p style={{ marginTop: 6, color: "#555" }}>
            Fairness score and flagged issues based on uploaded data.
          </p>
        </div>
      </div>

      <div style={{ display: "flex", gap: 20, marginBottom: 20, flexWrap: "wrap" }}>
        <div><EarningsChart data={earnings} /></div>
        <div><RatingsChart data={ratings} /></div>
      </div>

      <IssuesList issues={issues} />
    </div>
  );
}
