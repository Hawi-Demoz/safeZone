# SafeZone – Demo Instructions

## Before the demo
1. Start backend:
```powershell
cd backend
python -m venv .venv; .\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python app.py
```
2. Start frontend:
```powershell
cd frontend
npm install
$env:VITE_API_BASE="http://localhost:5000"; npm run dev
```

## Demo flow (5-7 minutes)
1. Show Home page and explain privacy + panic button.
2. Enter a text: "He keeps checking my phone and follows me after work."
3. Submit → Result shows MEDIUM/HIGH with advice and actions.
4. Open Resources page; show cached local resources.
5. Toggle network offline (DevTools) and reload:
   - Show OfflineBanner and Resources still available.
   - Analyze returns offline message and prior result accessible via LocalStorage.
6. Show Emergency Help page with quick contact info.

## Talking points
- Rule-based, transparent scoring—no black box.
- No paid APIs; runs locally and works offline for essentials.
- Clear UX: DangerMeter colors and concise advice.
- One-tap EXIT to obscure activity quickly.

## Cleanup after demo
- Close tabs; clear local storage if needed.
