import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DangerMeter from '../components/DangerMeter.jsx';
import AdviceCard from '../components/AdviceCard.jsx';
import OfflineBanner from '../components/OfflineBanner.jsx';
import PanicButton from '../components/PanicButton.jsx';
import useAnalyze from '../hooks/useAnalyze.js';

export default function Result() {
  const loc = useLocation();
  const navigate = useNavigate();
  const { getLast } = useAnalyze();
  const analysis = loc.state?.analysis || getLast();

  if (!analysis) {
    return (
      <div className="max-w-xl mx-auto p-4 space-y-4">
        <p className="text-sm">No analysis data. Please go back.</p>
        <button onClick={() => navigate('/')} className="text-blue-600 underline text-sm">Return Home</button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-4 space-y-6">
      <OfflineBanner />
      <h1 className="text-xl font-semibold text-red-600">Assessment Result</h1>
      <DangerMeter level={analysis.danger_level} score={analysis.score} />
      <AdviceCard advice={analysis.advice} suggested={analysis.suggested_actions} />
      <div className="text-xs text-gray-400">Raw text stored locally only.</div>
      <div className="flex space-x-4 text-sm">
        <button onClick={() => navigate('/')} className="underline text-blue-600">New Analysis</button>
        <a className="underline text-blue-600" href="/resources">Resources</a>
        <a className="underline text-blue-600" href="/emergency">Emergency Help</a>
      </div>
      <PanicButton />
    </div>
  );
}
