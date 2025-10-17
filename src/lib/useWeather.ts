import { useEffect, useState } from 'react'
import { getWeather } from './apiClient'

export type WeatherItem = {
  date: string
  temperatureC: number
  temperatureF: number
  summary: string
}

const MOCK: WeatherItem[] = [
  {
    date: new Date().toISOString(),
    temperatureC: 18,
    temperatureF: 64,
    summary: 'Partly cloudy',
  },
  {
    date: new Date(Date.now() + 86400000).toISOString(),
    temperatureC: 20,
    temperatureF: 68,
    summary: 'Sunny',
  },
]

export function useWeather() {
  const [data, setData] = useState<WeatherItem[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    getWeather()
      .then((res) => {
        if (!mounted) return
        if (res && Array.isArray(res)) setData(res)
        else setData(MOCK)
      })
      .catch((err) => {
        if (!mounted) return
        console.warn('getWeather failed, using mock', err)
        setData(MOCK)
        setError('Using mock data')
      })
      .finally(() => mounted && setLoading(false))

    return () => {
      mounted = false
    }
  }, [])

  return { data, loading, error }
}
