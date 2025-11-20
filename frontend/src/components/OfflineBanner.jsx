import React from 'react';
import useOffline from '../hooks/useOffline.js';

export default function OfflineBanner() {
  const { online } = useOffline();
  if (online) return null;
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-400 text-yellow-900 text-center text-base py-2 shadow-lg animate-slide-in">
      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
      Offline: Some features limited. Stored advice shown.
    </div>
  );
}
