import { useState } from "react";
import { uploadFile } from "../api/uploadAPI";
import { runAudit } from "../api/auditAPI";

export default function UploadPage({ onAnalyze }) {
  const [earningsFile, setEarningsFile] = useState(null);
  const [ratingsFile, setRatingsFile] = useState(null);
  const [penaltiesFile, setPenaltiesFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  async function parseUpload(file) {
    const res = await uploadFile(file);
    return res.data || [];
  }

  async function handleAnalyze() {
    setLoading(true);
    setMsg("");

    try {
      const earnings = earningsFile ? await parseUpload(earningsFile) : [];
      const ratings = ratingsFile ? await parseUpload(ratingsFile) : [];
      const penalties = penaltiesFile ? await parseUpload(penaltiesFile) : [];

      const payload = { earnings, ratings, penalties };
      const result = await runAudit(payload);

      if (result.success) {
        onAnalyze({
          fairnessScore: result.fairnessScore,
          issues: result.issues,
          rawData: payload,
        });
      } else {
        setMsg("Audit failed. Check backend.");
      }
    } catch (err) {
      setMsg("Error: " + err.message);
    }

    setLoading(false);
  }

  return (
    <div className="upload-container">
      <h1>GigLens — Upload Your Data</h1>

      <label>Earnings CSV</label>
      <input type="file" accept=".csv" onChange={(e) => setEarningsFile(e.target.files[0])} />

      <label>Ratings CSV</label>
      <input type="file" accept=".csv" onChange={(e) => setRatingsFile(e.target.files[0])} />

      <label>Penalties CSV</label>
      <input type="file" accept=".csv" onChange={(e) => setPenaltiesFile(e.target.files[0])} />

      <button disabled={loading} onClick={handleAnalyze}>
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {msg && <p style={{ color: "red" }}>{msg}</p>}
    </div>
  );
}
