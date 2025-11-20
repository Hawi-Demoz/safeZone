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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-100 via-white to-red-300 pb-24">
      <OfflineBanner />
      <div className="w-full max-w-xl mx-auto p-4">
        <div className="backdrop-blur-lg bg-white/70 rounded-2xl shadow-2xl p-6 mb-6 animate-fade-in">
          <h1 className="text-4xl font-extrabold text-red-600 mb-2 tracking-tight drop-shadow-lg flex items-center gap-2">
            <span className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-xl shadow">SafeZone</span>
            <span className="text-base font-normal text-gray-400 ml-2">MVP</span>
          </h1>
          <p className="text-lg text-gray-700 mb-4">Describe your situation for instant safety advice.</p>
          <InputBox onAnalyze={onAnalyze} />
          {loading && <p className="text-base text-pink-500 mt-2 animate-pulse">Analyzing...</p>}
          {error && <p className="text-base text-red-600 mt-2">{error}</p>}
          <div className="flex justify-center gap-6 mt-6">
            <a className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow transition text-base font-semibold" href="/resources">Resources</a>
            <a className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-full shadow transition text-base font-semibold" href="/emergency">Emergency Help</a>
          </div>
        </div>
        <PanicButton />
      </div>
    </div>
  );
}
