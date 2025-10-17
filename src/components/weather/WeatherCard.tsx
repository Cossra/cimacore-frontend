import type { WeatherItem } from '../../lib/useWeather'

export default function WeatherCard({ item }: { item: WeatherItem }) {
  return (
    <div className="border border-gray-200 rounded-md p-3 shadow-sm bg-white">
      <p className="font-semibold">{new Date(item.date).toLocaleDateString()}</p>
      <p>{item.summary} — {item.temperatureC}°C / {item.temperatureF}°F</p>
    </div>
  )
}
