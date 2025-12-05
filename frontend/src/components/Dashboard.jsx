import { Link } from "react-router-dom";
import ScoreCard from "./ScoreCard";
import IssuesList from "./IssuesList";  

export default function Dashboard({ analysis, onBack }) {
  const { fairnessScore, issues = [], rawData = {} } = analysis || {};

  return (
    <div className="dashboard" style={{ padding: 20 }}>
      <div className="navbar1">
        <button className="navbar1button" onClick={onBack} style={{ marginBottom: 12 }}>← Back</button>
      </div>

      <div className="navbar2">
        <div style={{ marginBottom: 20 }}>
          <Link className="navbar2button"
            to="/appeals"
            style={{
              padding: "12px 12px",
              borderRadius: "6px",
              backgroundColor: "#f0e7d6",
              cursor: "pointer",
              color: "black",
              fontSize: "14px",
            }}
          >
            Go to Appeals →
          </Link>

        </div>
      </div>
      

      <div className="Brief" style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 20 }}>
        <ScoreCard className="score" score={fairnessScore ?? 100} />
        <div className="overview" style={{ flex: 1 }}>
          <h3 style={{ margin: 0 }}>Overview:</h3>
        </div>
      </div>

      <IssuesList issues={issues} />
    </div>
  );
}
