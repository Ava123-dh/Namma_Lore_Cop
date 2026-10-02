import WalksMap from '../components/WalksMap'

// B'lore Walks: the city walking routes, on their own page rather than as a
// tab inside the heritage map. Aira's chat lives in the walk drawer here.
const Walks = () => {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            B&rsquo;lore Walks: Six Routes Through Old Bengaluru
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Six themed walking routes across old Bengaluru &mdash; Kempegowda&rsquo;s merchant
            town, the fort Hyder and Tipu rebuilt, the British Cantonment, and Cubbon Park
          </p>
        </div>
      </div>

      <WalksMap baseUrl={baseUrl} />
    </div>
  )
}

export default Walks
