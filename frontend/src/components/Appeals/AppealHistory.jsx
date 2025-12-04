// src/components/appeals/AppealHistory.jsx
import React, { useEffect, useState } from "react";
import { listAppeals, updateAppeal } from "../../api/appealAPI";

export default function AppealHistory() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  async function load() {
    setLoading(true);
    try {
      const res = await listAppeals();
      setItems(res.appeals || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  async function markResolved(id) {
    try {
      await updateAppeal(id, { status: "resolved", admin_notes: "Reviewed and resolved" });
      load();
    } catch (err) {
      alert("Update failed: " + (err.message || err));
    }
  }

  if (loading) return <div>Loading appeals…</div>;
  if (!items.length) return <div>No appeals yet.</div>;

  return (
    <div style={{ display: "grid", gap: 8 }}>
      {items.map(a => (
        <div key={a.id} style={{ border: "1px solid #ddd", padding: 8, borderRadius: 6 }}>
          <div style={{ fontSize: 13, color: "#333" }}>{new Date(a.submitted_at).toLocaleString()}</div>
          <div style={{ marginTop: 6 }}>{a.message.slice(0, 200)}</div>
          <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
            <div style={{ fontSize: 12, color: "#666" }}>Status: {a.status}</div>
            <button onClick={()=>markResolved(a.id)} style={{ marginLeft: "auto" }}>Mark resolved</button>
          </div>
        </div>
      ))}
    </div>
  );
}
