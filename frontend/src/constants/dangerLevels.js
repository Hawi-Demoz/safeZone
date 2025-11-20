export const DANGER_LEVELS = ["LOW", "MEDIUM", "HIGH", "CRITICAL"];
export const THRESHOLDS = {
  LOW: 0,
  MEDIUM: 5,
  HIGH: 10,
  CRITICAL: 15
};

export function levelColor(level) {
  switch (level) {
    case 'LOW': return 'low';
    case 'MEDIUM': return 'medium';
    case 'HIGH': return 'high';
    case 'CRITICAL': return 'critical';
    default: return 'gray-400';
  }
}
