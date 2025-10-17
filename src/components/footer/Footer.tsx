export default function Footer() {
  return (
    <footer className="w-full bg-slate-100 text-slate-700 px-4 py-6 mt-10 border-t">
      <div className="max-w-6xl mx-auto text-sm">
        © {new Date().getFullYear()} ClimaCore — Built with ❤️ on Azure
      </div>
    </footer>
  )
}
