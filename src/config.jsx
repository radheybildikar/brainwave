// Central place for the backend API URL.
// In dev, falls back to localhost:8000.
// In production, set VITE_API_URL in a .env file (e.g. VITE_API_URL=https://api.yourdomain.com)
export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
