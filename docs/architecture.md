# SafeZone Architecture (MVP)

## Overview
SafeZone is a gender-violence early-warning and action assistant. Users input a situation description. The backend applies a simple rule-based classifier on weighted keyword categories to assign a danger level (LOW, MEDIUM, HIGH, CRITICAL) and returns structured advice and suggested actions.

## High-Level Components
- Frontend (React + Vite + TailwindCSS)
- Backend (Flask + rule-based classifier)
- Offline Support (Service Worker + Manifest + LocalStorage caching)

## Data Flow
1. User enters text in `Home` page.
2. Frontend sends POST `/analyze` with JSON `{ text }`.
3. Backend scores keywords, maps to danger level, prepares advice JSON.
4. Frontend navigates to `Result` page showing `DangerMeter`, `AdviceCard`.
5. Resources and emergency help pages load static JSON of support contacts (cached offline).

## Danger Level Logic (Planned)
Keyword categories with weights produce a score. Thresholds map score to levels:
- LOW: <5
- MEDIUM: 5-9
- HIGH: 10-14
- CRITICAL: 15+

## Offline Strategy
- Pre-cache app shell (HTML, JS, CSS, manifest).
- Cache `support_resources.json`.
- Network-first for `/analyze`, fallback message offline.
- LocalStorage keeps last successful analysis.

## Privacy
- No server-side storage of texts; analysis is stateless.
- Panic button clears local sensitive data and redirects.

## Future Enhancements
- Better keyword expansion
- Multi-language support
- Optional encrypted local history
