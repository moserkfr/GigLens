export async function runAudit(data) {
  const res = await fetch("http://localhost:5000/audit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  return res.json(); // { success, fairnessScore, issues }
}
