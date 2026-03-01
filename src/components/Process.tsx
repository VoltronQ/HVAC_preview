import { Button } from '@/components/ui/button'
import { useBookingModal } from '@/hooks/useBookingModal'
import { CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '1',
    title: 'Schedule Your Visit',
    description: 'Book a time that works for you. We offer flexible scheduling options.',
  },
  {
    number: '2',
    title: 'Professional Diagnosis',
    description: 'Our technician performs a thorough system evaluation to identify all issues.',
  },
  {
    number: '3',
    title: 'Expert Recommendations',
    description: 'Receive honest, no-pressure recommendations tailored to your needs.',
  },
]

export function Process() {
  const { openModal } = useBookingModal()

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Our Diagnostic Process
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Simple, straightforward, and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy text-white font-bold text-lg mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-light-blue rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-navy mb-3">
            Ready to Get Started?
          </h3>
          <p className="text-gray-700 mb-6">
            Don't let HVAC problems linger. Schedule your diagnostic visit today and get expert answers.
          </p>
          <Button onClick={openModal} size="lg">
            Book Your Diagnostic Visit
          </Button>
        </div>
      </div>
    </section>
  )
}
