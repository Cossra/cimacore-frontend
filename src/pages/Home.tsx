import { useEffect, useState } from "react";
import { getWeather } from "../lib/apiClient";

type Weather = {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
};

export default function Home() {
  const [weather, setWeather] = useState<Weather[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getWeather()
      .then((data) => {
        if (data) setWeather(data);
        else setError("Failed to load data from API");
      })
      .catch(() => setError("An error occurred while fetching data"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-2">Welcome to CimaCore</h1>
      <p className="text-gray-600 mb-6">Live .NET API data:</p>

      {loading && <p className="text-gray-500">Fetching weather data...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && weather.length > 0 && (
        <ul className="space-y-2">
          {weather.map((item, index) => (
            <li
              key={index}
              className="border border-gray-200 rounded-md p-3 shadow-sm bg-white"
            >
              <p className="font-semibold">
                {new Date(item.date).toLocaleDateString()}
              </p>
              <p>
                {item.summary} — {item.temperatureC}°C / {item.temperatureF}°F
              </p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
