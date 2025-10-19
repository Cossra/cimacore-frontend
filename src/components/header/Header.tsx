import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="w-full bg-slate-900 text-white px-4 py-3 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-2">
                <span className="text-2xl">⛅</span>
                <div className="text-lg font-semibold">ClimaCore</div>
              </Link>
              <span className="hidden md:inline-block text-sm text-slate-300">Lightweight weather dashboard</span>
        </div>

        <nav className="hidden sm:flex items-center space-x-4 text-sm">
          <Link to="/" className="text-white hover:underline">Home</Link>
          {/* Link to external API docs (Swagger) */}
          {(() => {
            const API_BASE = (import.meta as any).env?.VITE_API_BASE_URL || 'https://climacoreapi.azurewebsites.net'
            const swaggerUrl = `${API_BASE.replace(/\/$/, '')}/swagger/index.html`
            return (
              <a href={swaggerUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">APIdocs</a>
            )
          })()}
        </nav>
      </div>
    </header>
  )
}
