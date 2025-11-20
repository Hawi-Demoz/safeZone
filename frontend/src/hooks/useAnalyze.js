import { useState } from 'react';
import { analyzeText } from '../services/api';

export default function useAnalyze() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function run(text) {
    setLoading(true); setError(null);
    try {
      const data = await analyzeText(text);
      localStorage.setItem('lastAnalysis', JSON.stringify(data));
      return data;
    } catch (e) {
      setError(e.message || 'Error');
      return null;
    } finally {
      setLoading(false);
    }
  }

  function getLast() {
    try { return JSON.parse(localStorage.getItem('lastAnalysis')); } catch { return null; }
  }

  return { run, loading, error, getLast };
}
