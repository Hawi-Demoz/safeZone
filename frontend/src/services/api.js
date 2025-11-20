const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';

export async function analyzeText(text) {
  const res = await fetch(`${API_BASE}/analyze`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
}

export function getApiBase() { return API_BASE; }
