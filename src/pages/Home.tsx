import WeatherCard from '../components/weather/WeatherCard'
import Hero from '../components/Hero'
import { useWeather } from '../lib/useWeather'

export default function Home() {
  const { data, loading, error } = useWeather()

  const navItems = ['Home', 'Today', 'Hourly', '10 Day', 'Monthly', 'Radar', 'Video']

  return (
    <main className="w-full px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <Hero />
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Welcome to CimaCore</h1>
        <p className="text-gray-600 mb-6 text-center">Live .NET API data (mocked fallback)</p>

        {loading && <p className="text-gray-500 text-center">Fetching weather data...</p>}
        {error && <p className="text-yellow-600 text-center">{error}</p>}

        {/* Mobile: horizontal nav */}
        <div className="block sm:hidden mb-6">
          <div className="flex space-x-3 overflow-x-auto px-1">
            {navItems.map((n) => (
              <button key={n} className="flex-shrink-0 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium shadow-sm">
                {n}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop: two-column layout */}
        <div className="hidden sm:grid grid-cols-12 gap-6">
          <aside className="col-span-3">
            <div className="space-y-3 sticky top-6">
              {navItems.map((n) => (
                <button key={n} className="w-full text-left px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm font-medium shadow-sm">
                  {n}
                </button>
              ))}
            </div>
          </aside>

          <section className="col-span-9">
            {!loading && data && data.length > 0 && (
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {data.map((item, i) => (
                  <WeatherCard key={i} item={item} />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}
