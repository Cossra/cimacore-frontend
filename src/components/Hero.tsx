export default function Hero() {
  // Using an Unsplash photo for a professional mountain image. Hotlinking to Unsplash
  // is allowed under their license; if you prefer a local asset, replace the URL.
  const imageUrl = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80'

  return (
    <section className="w-full rounded-lg overflow-hidden mb-6">
      <div
        className="relative bg-center bg-cover h-44 sm:h-56 md:h-72 lg:h-96"
        style={{ backgroundImage: `linear-gradient(rgba(3,7,18,0.32), rgba(3,7,18,0.12)), url('${imageUrl}')` }}
      >
        <div className="absolute inset-0 flex items-end md:items-center">
          <div className="max-w-6xl mx-auto p-4 md:p-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg inline-block px-4 py-2">
              <h2 className="text-xl md:text-2xl font-semibold text-white">Number One Weather App</h2>
              <p className="text-sm text-white/90 text-center">Live in the cloud</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
