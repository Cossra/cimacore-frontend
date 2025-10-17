export default function Header() {
  return (
    <header className="w-full bg-slate-900 text-white px-4 py-3 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-lg font-semibold">ClimaCore</div>
        <nav className="space-x-4 text-sm opacity-90">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Docs</a>
        </nav>
      </div>
    </header>
  )
}
