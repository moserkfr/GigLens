// src/api/appealAPI.js
const BASE = "http://localhost:5000/appeal";

export async function createAppeal(payload) {
  const res = await fetch(BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function listAppeals() {
  const res = await fetch(BASE);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function updateAppeal(id, updates) {
  const res = await fetch(`${BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function submitAppeal(payload) {
  return createAppeal(payload);
}

