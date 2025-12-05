import { useState } from "react";
import { submitAppeal } from "../api/appealAPI";

export default function AppealModal({ issue, onClose }) {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit() {
    setStatus("sending");
    try {
      const payload = { issue, message: text };
      const res = await submitAppeal(payload);
      if (res?.success) {
        setStatus("sent");
        setTimeout(onClose, 900); // auto-close after a moment
      } else {
        setStatus("error");
      }
    } catch (e) {
      setStatus("error");
    }
  }

  return (
    <div style={{
      position: "fixed", left: 0, right: 0, top: 0, bottom: 0,
      background: "rgba(0, 0, 0, 0.4)", display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <div style={{ width: 520, background: "#fff", padding: 18, borderRadius: 8 }}>
        <h4 style={{ marginTop: 0 }}>Appeal — {issue.type}</h4>
        <p style={{ color: "#444" }}>{issue.message}</p>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Explain briefly why this is incorrect..."
          style={{ width: "100%", height: 100, marginBottom: 10, background: "#9dbdb8" }}
        />
        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
          <button className="cancelapp" onClick={onClose}>Cancel</button>
          <button className="submitapp" onClick={handleSubmit} disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Submit Appeal"}
          </button>
        </div>
        {status === "sent" && <div style={{ color: "green", marginTop: 8 }}>Appeal submitted.</div>}
        {status === "error" && <div style={{ color: "red", marginTop: 8 }}>Unable to submit. Try again.</div>}
      </div>
    </div>
  );
}
