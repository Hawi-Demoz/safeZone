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
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block text-lg font-semibold text-gray-700 mb-1">Describe the situation</label>
      <textarea
        className="w-full rounded-2xl border-none shadow-lg p-4 h-40 resize-none focus:outline-none focus:ring-4 focus:ring-pink-400 bg-gradient-to-br from-white via-red-50 to-pink-100 text-lg transition-all duration-200"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Example: He keeps checking my phone and shows up where I am unexpectedly..."
      />
      <div className="flex justify-between text-sm text-gray-400">
        <span>{text.length} chars</span>
        <span>{text.trim().split(/\s+/).filter(Boolean).length} words</span>
      </div>
      <button
        type="submit"
        disabled={!text.trim() || submitting}
        className="w-full bg-gradient-to-r from-red-500 to-pink-500 disabled:from-red-300 disabled:to-pink-200 text-white text-lg font-bold px-6 py-3 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all duration-150"
      >{submitting ? 'Analyzing...' : 'Analyze'}</button>
    </form>
  );
}
