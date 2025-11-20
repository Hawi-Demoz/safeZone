import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/base.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// Service worker: enable only in production; clear in dev to avoid cache issues
if ('serviceWorker' in navigator) {
	if (import.meta.env.PROD) {
		window.addEventListener('load', () => {
			navigator.serviceWorker.register('/sw.js').catch(() => {});
		});
	} else {
		// In dev, proactively unregister any existing SWs for this origin
		window.addEventListener('load', () => {
			navigator.serviceWorker.getRegistrations().then((regs) => regs.forEach((r) => r.unregister()));
		});
	}
}
