import React from 'react';

export default function AdviceCard({ advice = [], suggested = [] }) {
  return (
    <div className="border rounded p-4 bg-white space-y-3">
      <h3 className="font-semibold text-red-600">Safety Advice</h3>
      <ul className="list-disc pl-5 space-y-1 text-sm">
        {advice.map((a,i)=><li key={i}>{a}</li>)}
      </ul>
      {suggested.length > 0 && (
        <div>
          <h4 className="font-medium mt-2">Suggested Actions</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {suggested.map((s,i)=><li key={i}>{s}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}
