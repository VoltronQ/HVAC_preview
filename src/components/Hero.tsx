import { BookingCard } from './BookingCard'
import { CheckCircle } from 'lucide-react'

export function Hero() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-navy leading-tight">
                Your HVAC System Deserves a Proper Diagnosis
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Don't guess what's wrong with your heating or cooling. Our expert technicians perform comprehensive diagnostic visits to identify issues and recommend the right solutions for your home.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Free Diagnostic Assessment</strong> - Comprehensive system evaluation
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Licensed Technicians</strong> - Certified experts with years of experience
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Fast & Reliable</strong> - Quick turnaround, honest recommendations
                </span>
              </div>
            </div>
          </div>

          <div>
            <BookingCard />
          </div>
        </div>
      </div>
    </section>
  )
}
