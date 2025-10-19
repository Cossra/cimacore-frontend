import type { WeatherItem } from '../../lib/useWeather'

export default function WeatherCard({ item }: { item: WeatherItem }) {
  return (
    <article className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString()}</p>
          <h3 className="font-semibold text-lg text-slate-800">{item.summary}</h3>
        </div>
        <div className="flex flex-col items-end">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-900">
            {item.temperatureC}°C
          </span>
          <span className="text-xs text-gray-400 mt-1">{item.temperatureF}°F</span>
        </div>
      </div>
    </article>
  )
}
