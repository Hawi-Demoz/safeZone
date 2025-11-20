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
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold">Danger Level: <span className="font-bold">{level}</span></h2>
      <div className="flex space-x-1" aria-label="Danger meter">
        {levels.map(l => (
          <div key={l} className={`h-4 flex-1 rounded ${l===level?COLOR_MAP[l]:'bg-gray-200'}`} />
        ))}
      </div>
      <p className="text-sm text-gray-600">Score: {score}</p>
    </div>
  );
}
