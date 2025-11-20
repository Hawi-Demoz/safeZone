import React from 'react';

const COLOR_MAP = {
  LOW: 'bg-low',
  MEDIUM: 'bg-medium',
  HIGH: 'bg-high',
  CRITICAL: 'bg-critical'
};

export default function DangerMeter({ level, score }) {
  if (!level) return null;
  const levels = ['LOW','MEDIUM','HIGH','CRITICAL'];
  const levelIndex = levels.indexOf(level);
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
        <span className={`inline-block px-3 py-1 rounded-xl shadow text-white ${COLOR_MAP[level]}`}>{level}</span>
        <span className="text-base text-gray-400">Danger Meter</span>
      </h2>
      <div className="flex space-x-2 items-end h-8" aria-label="Danger meter">
        {levels.map((l, i) => (
          <div
            key={l}
            className={`flex-1 rounded-xl transition-all duration-500 ${l===level?COLOR_MAP[l]:'bg-gray-200'} shadow-lg`}
            style={{ height: l===level ? '2rem' : '1rem', opacity: i<=levelIndex ? 1 : 0.5 }}
          />
        ))}
      </div>
      <p className="text-base text-gray-500 mt-2">Score: <span className="font-mono font-bold text-gray-700">{score}</span></p>
    </div>
  );
}
