import WeatherCard from '../components/weather/WeatherCard'
import { useWeather } from '../lib/useWeather'

export default function Home() {
  const { data, loading, error } = useWeather()

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-2 text-center">Welcome to CimaCore</h1>
      <p className="text-gray-600 mb-6 text-center">Live .NET API data (mocked fallback)</p>

      {loading && <p className="text-gray-500 text-center">Fetching weather data...</p>}
      {error && <p className="text-yellow-600 text-center">{error}</p>}

      {!loading && data && data.length > 0 && (
        <div className="space-y-4 max-w-2xl mx-auto">
          {data.map((item, i) => (
            <WeatherCard key={i} item={item} />
          ))}
        </div>
      )}
    </main>
  )
}
