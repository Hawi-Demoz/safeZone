import React, { useState } from 'react';

export default function InputBox({ onAnalyze }) {
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    setSubmitting(true);
    await onAnalyze(text.trim());
    setSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <label className="block text-sm font-medium">Describe the situation</label>
      <textarea
        className="w-full border rounded p-3 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-red-400"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Example: He keeps checking my phone and shows up where I am unexpectedly..."
      />
      <div className="flex justify-between text-xs text-gray-500">
        <span>{text.length} chars</span>
        <span>{text.trim().split(/\s+/).filter(Boolean).length} words</span>
      </div>
      <button
        type="submit"
        disabled={!text.trim() || submitting}
        className="bg-red-500 disabled:bg-red-300 text-white px-4 py-2 rounded shadow hover:bg-red-600 transition"
      >{submitting ? 'Analyzing...' : 'Analyze'}</button>
    </form>
  );
}
