const Contact = () => (
  <div className="min-h-screen py-12">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-primary-100 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-6">
          <img
            src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-email-icon-png-image_5065641.jpg"
            alt="Email"
            className="w-8 h-8 object-contain"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact</h1>
        <p className="text-lg text-gray-600 mb-8">
          Questions, feedback, or collaboration ideas? Reach us anytime.
        </p>
        <a
          href="mailto:namma.lore.app@gmail.com"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-lg"
        >
          namma.lore.app@gmail.com
        </a>
        <p className="text-sm text-gray-500 mt-6">We usually reply within 24–48 hours.</p>
      </div>
    </div>
  </div>
)

export default Contact
