import React, { useEffect, useState } from 'react';
import OfflineBanner from '../components/OfflineBanner.jsx';
import PanicButton from '../components/PanicButton.jsx';

export default function Resources() {
  const [resources, setResources] = useState([]);
  useEffect(() => {
    import('../data/support_resources.json').then(m => setResources(m.default));
  }, []);

  return (
    <div className="max-w-xl mx-auto p-4 space-y-6">
      <OfflineBanner />
      <h1 className="text-xl font-bold text-red-600">Support Resources</h1>
      <p className="text-sm text-gray-700">Saved locally for offline viewing.</p>
      <div className="grid gap-3">
        {resources.map((r,i)=>(
          <div key={i} className="border rounded p-3 bg-white">
            <div className="font-medium">{r.name}</div>
            <div className="text-xs text-gray-600">Type: {r.type}</div>
            {r.phone && <div className="text-sm">Phone: <span className="font-mono">{r.phone}</span></div>}
            {r.url && <div className="text-sm"><a href={r.url} className="text-blue-600 underline" target="_blank" rel="noreferrer">Open Link</a></div>}
          </div>
        ))}
      </div>
      <div className="text-sm space-x-4">
        <a className="text-blue-600 underline" href="/">Home</a>
        <a className="text-blue-600 underline" href="/emergency">Emergency Help</a>
      </div>
      <PanicButton />
    </div>
  );
}
