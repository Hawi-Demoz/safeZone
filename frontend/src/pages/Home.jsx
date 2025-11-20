import React from 'react';
import InputBox from '../components/InputBox.jsx';
import PanicButton from '../components/PanicButton.jsx';
import OfflineBanner from '../components/OfflineBanner.jsx';
import useAnalyze from '../hooks/useAnalyze.js';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const { run, loading, error } = useAnalyze();
  const navigate = useNavigate();

  async function onAnalyze(text) {
    const data = await run(text);
    if (data) navigate('/result', { state: { analysis: data } });
  }

  return (
    <div className="max-w-xl mx-auto p-4 space-y-6">
      <OfflineBanner />
      <h1 className="text-2xl font-bold flex items-center space-x-2">
        <span className="text-red-600">SafeZone</span>
        <span className="text-sm font-normal text-gray-500">MVP</span>
      </h1>
      <p className="text-sm text-gray-700">Enter a brief description of the situation for a quick safety assessment.</p>
      <InputBox onAnalyze={onAnalyze} />
      {loading && <p className="text-sm text-gray-500">Analyzing...</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div className="text-sm space-x-4">
        <a className="text-blue-600 underline" href="/resources">Resources</a>
        <a className="text-blue-600 underline" href="/emergency">Emergency Help</a>
      </div>
      <PanicButton />
    </div>
  );
}
