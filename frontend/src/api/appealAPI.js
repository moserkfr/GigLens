export async function submitAppeal(appeal) {
  const res = await fetch("http://localhost:5000/appeal", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(appeal)
  });

  return res.json(); // { success }
}
