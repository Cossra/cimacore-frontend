import { useEffect, useState } from "react";
import { getWeather } from "../lib/apiClient";

export default function Home() {
  const [weather, setWeather] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getWeather();
      if (data) setWeather(data);
    })();
  }, []);

  return (
    <main className="container mx-auto px-4 py-20 text-center">
      <h2 className="text-4xl font-bold mb-4 text-blue-600">Welcome to CimaCore</h2>
      <p className="text-gray-600 mb-8">Live .NET API data:</p>
      <div className="space-y-2">
        {weather.length > 0 ? (
          weather.map((w, i) => (
            <div key={i} className="bg-white shadow rounded p-4 max-w-md mx-auto">
              <p>{w.date}</p>
              <p>{w.temperatureC}° C — {w.summary}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Fetching weather data...</p>
        )}
      </div>
    </main>
  );
}
