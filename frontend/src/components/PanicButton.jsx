import React from 'react';

export default function PanicButton() {
  function handleClick() {
    try { localStorage.removeItem('lastAnalysis'); } catch {}
    window.location.href = 'https://www.google.com';
  }
  return (
    <button onClick={handleClick} className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-full shadow-lg text-sm hover:bg-gray-800" aria-label="Quick exit SafeZone">
      EXIT
    </button>
  );
}
