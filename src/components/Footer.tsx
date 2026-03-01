export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h3 className="text-white font-bold text-lg">
              NorthStar Climate Services
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Professional HVAC Diagnostics & Service
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; 2024 NorthStar Climate Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
