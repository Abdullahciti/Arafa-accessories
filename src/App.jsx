import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full text-center">
          {/* Shop Info */}
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Arafa Accessories
          </h1>
          <p className="text-gray-500 mb-6">Owned by Abdulrahman Adel</p>

          {/* Social Links */}
          <div className="space-y-3">
            <a
              href="https://www.instagram.com/arafa_access"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-xl font-medium shadow hover:opacity-90 transition"
            >
              Instagram: @arafa_access
            </a>
          </div>
          {/* Location */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-700">📍 Location</h2>
            <p className="text-sm text-gray-600">
              6 أكتوبر - ليلة القدر - مول مكة
            </p>
            <a
              href="https://maps.google.com/?q=29.948896%2C30.905266"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-blue-600 font-medium hover:underline"
            >
              View on Google Maps
            </a>
          </div>

          {/* Phone Numbers */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-700">
              📞 Contact Numbers
            </h2>
            <div className="flex flex-col mt-2 space-y-1">
              <a
                href="tel:01022427598"
                className="text-blue-600 hover:underline"
              >
                01022427598
              </a>
              <a
                href="tel:01555960853"
                className="text-blue-600 hover:underline"
              >
                01555960853
              </a>
            </div>
          </div>

          {/* Private Contact */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-700">
              🔒 Private Contact
            </h2>
            <p className="text-gray-600">@abdalr7man309</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
