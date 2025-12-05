// src/components/appeals/AppealForm.jsx
import React, { useState } from "react";
import { createAppeal } from "../../api/appealAPI";

export default function AppealForm({ prefillIssue }) {
  const [message, setMessage] = useState(prefillIssue ? `I disagree with: ${prefillIssue.type}` : "");
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(null);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    if (!message.trim()) return setError("Please explain briefly.");
    setLoading(true);
    try {
      const payload = {
        issue_id: prefillIssue?.id,
        issue: prefillIssue ?? null,
        user: { name: "Demo User" },
        message,
      };
      const res = await createAppeal(payload);
      setSaved(res.appeal);
      setMessage("");
    } catch (err) {
      setError(err.message || "Failed");
    } finally {
      setLoading(false);
    }
  }

  return (
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows={6} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {saved && <div style={{ color: "green" }}>Appeal submitted (id: {saved.id})</div>}
      <div>
        <button type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit Appeal"}</button>
      </div>
    </form>
  );
}
