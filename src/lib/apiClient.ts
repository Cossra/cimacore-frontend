// Base API URL uses environment variable if set, otherwise falls back to production API
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://climacoreapi.azurewebsites.net";

export async function getWeather() {
  try {
    const res = await fetch(`${BASE_URL}/weatherforecast`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("API fetch failed:", err);
    return null;
  }
}