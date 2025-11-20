# SafeZone Frontend

React + Vite + TailwindCSS MVP.

## Setup
```powershell
cd frontend
npm install
npm run dev
```
App runs (by default) at `http://localhost:5173`.

## Environment
- Set `VITE_API_BASE` if backend not on default `http://localhost:5000`.

## Service Worker
`src/sw.js` currently a placeholder; will be enhanced for offline caching later.

## Components
- `InputBox` text input + submit
- `DangerMeter` visual level indicator
- `AdviceCard` lists advice and actions
- `PanicButton` quick exit (clears local analysis)
- `OfflineBanner` shows offline status

## Pages
- Home: input + navigation
- Result: analysis output
- EmergencyHelp: critical contact info
- Resources: static resource list

## Local Storage
Last analysis stored under key `lastAnalysis` for offline revisit.
