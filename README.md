# SafeZone

An MVP gender-violence early-warning and action assistant.

## Stack
- Frontend: React (Vite) + TailwindCSS + PWA
- Backend: Flask (Python)
- Data: JSON over HTTP

## Quick Start

Backend (Flask):
```powershell
cd backend
python -m venv .venv; .\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python app.py
```
Runs at `http://localhost:5000`.

Frontend (Vite):
```powershell
cd frontend
npm install
$env:VITE_API_BASE="http://localhost:5000"; npm run dev
```
Opens at `http://localhost:5173`.

## Folders
- `frontend/` React app source in `src/` (components, pages, hooks, services)
- `backend/` Flask app with `classifier/` and `resources/`
- `docs/` Pitch, architecture, and demo instructions

## PWA / Offline
- Manifest: `frontend/public/manifest.webmanifest`
- Service worker: `frontend/public/sw.js` (cache-first for static, network-first for `/analyze`)

## Privacy
- Backend is stateless: text is processed in-memory only.
- Panic button clears local analysis and navigates away.
