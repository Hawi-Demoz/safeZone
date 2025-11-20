import React from 'react';
import useOffline from '../hooks/useOffline';

export default function OfflineBanner() {
  const { online } = useOffline();
  if (online) return null;
  return (
    <div className="bg-yellow-200 text-yellow-900 text-center text-sm py-2">
      Offline: Some features limited. Stored advice shown.
    </div>
  );
}
