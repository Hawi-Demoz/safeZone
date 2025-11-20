import React, { useEffect, useState } from 'react';
import PanicButton from '../components/PanicButton.jsx';
import OfflineBanner from '../components/OfflineBanner.jsx';

export default function EmergencyHelp() {
  const [resources, setResources] = useState([]);
  useEffect(() => {
    import('../data/support_resources.json').then(m => setResources(m.default));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 pb-24">
      <OfflineBanner />
      <div className="w-full max-w-xl mx-auto p-4">
        <div className="backdrop-blur-lg bg-white/80 rounded-2xl shadow-xl p-6 mb-6 animate-fade-in">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Emergency Help</h1>
          <p className="text-base text-gray-600 mb-4">If you are in immediate danger, call local emergency services (e.g. 911 in the US).</p>
          <div className="space-y-4">
            {resources.map((r,i)=>(
              <div key={i} className="rounded-xl shadow border border-gray-200 bg-white/90 p-4">
                <div className="font-semibold text-gray-700 text-lg mb-1">{r.name}</div>
                {r.phone && <div className="text-sm text-gray-600">Phone: <span className="font-mono">{r.phone}</span></div>}
                {r.url && <div className="text-sm mt-1"><a href={r.url} className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-full shadow transition text-xs font-semibold" target="_blank" rel="noreferrer">Visit Site</a></div>}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-6">
            <a className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-full shadow transition text-base font-semibold" href="/">Home</a>
            <a className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-full shadow transition text-base font-semibold" href="/resources">Resources</a>
          </div>
        </div>
        <PanicButton />
      </div>
    </div>
  );
}
