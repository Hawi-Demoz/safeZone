import React from 'react';

export default function PanicButton() {
  function handleClick() {
    try { localStorage.removeItem('lastAnalysis'); } catch {}
    window.location.href = 'https://www.google.com';
  }
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-black via-gray-800 to-red-700 text-white px-6 py-3 rounded-full shadow-2xl text-lg font-bold flex items-center gap-2 hover:scale-110 active:scale-95 transition-all duration-200 animate-bounce"
      aria-label="Quick exit SafeZone"
      style={{boxShadow: '0 8px 32px rgba(0,0,0,0.25)'}}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
      EXIT
    </button>
  );
}
