import React, { useEffect, useState } from 'react';
import PanicButton from '../components/PanicButton.jsx';
import OfflineBanner from '../components/OfflineBanner.jsx';

export default function EmergencyHelp() {
  const [resources, setResources] = useState([]);
  useEffect(() => {
    import('../data/support_resources.json').then(m => setResources(m.default));
  }, []);

  return (
    <div className="max-w-xl mx-auto p-4 space-y-5">
      <OfflineBanner />
      <h1 className="text-xl font-bold text-red-600">Emergency Help</h1>
      <p className="text-sm text-gray-700">If you are in immediate danger, call local emergency services (e.g. 911 in the US).</p>
      <div className="space-y-3">
        {resources.map((r,i)=>(
          <div key={i} className="border rounded p-3 bg-white">
            <div className="font-medium">{r.name}</div>
            {r.phone && <div className="text-sm">Phone: <span className="font-mono">{r.phone}</span></div>}
            {r.url && <div className="text-sm"><a href={r.url} className="text-blue-600 underline" target="_blank" rel="noreferrer">Visit Site</a></div>}
          </div>
        ))}
      </div>
      <div className="text-sm space-x-4">
        <a className="text-blue-600 underline" href="/">Home</a>
        <a className="text-blue-600 underline" href="/resources">Resources</a>
      </div>
      <PanicButton />
    </div>
  );
}
