import { Button } from '@/components/ui/button'
import { useBookingModal } from '@/hooks/useBookingModal'
import { ArrowRight, Clock, Phone, FileCheck } from 'lucide-react'

const steps = [
  {
    number: '1',
    icon: Phone,
    title: 'Schedule Your Visit',
    description: 'Book a time that works for you. We offer flexible scheduling with same-day options.',
    color: 'from-accent-orange',
  },
  {
    number: '2',
    icon: FileCheck,
    title: 'Professional Diagnosis',
    description: 'Our certified technician performs a thorough system evaluation with detailed reporting.',
    color: 'from-accent-teal',
  },
  {
    number: '3',
    icon: ArrowRight,
    title: 'Expert Recommendations',
    description: 'Receive honest, tailored recommendations with no pressure or hidden fees.',
    color: 'from-ocean',
  },
]

export function Process() {
  const { openModal } = useBookingModal()

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            Three Simple Steps to Answers
          </h2>
          <p className="text-lg text-gray-600">
            Our straightforward process gets you the information you need fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="relative group animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-orange via-accent-teal to-ocean opacity-0 group-hover:opacity-20 rounded-2xl blur transition duration-1000"></div>

                <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-200 group-hover:border-accent-orange shadow-lg group-hover:shadow-xl transition-all h-full">
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-accent-orange to-orange-600 text-white font-bold text-2xl mb-6 group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>

                    <div className="absolute top-0 -right-8 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Icon className="h-full w-full text-accent-orange/20" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-accent-orange transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute -right-4 top-1/2 transform -translate-y-1/2">
                      <div className="w-8 h-8 rounded-full bg-accent-orange text-white flex items-center justify-center text-xl">
                        →
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-accent-orange/5 via-accent-teal/5 to-ocean/5 rounded-2xl p-12 border-2 border-accent-orange/20 hover:border-accent-orange/50 transition-all group">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-navy mb-4">
                Ready to Get Expert Answers?
              </h3>
              <p className="text-lg text-gray-700 mb-2">
                Don't let HVAC problems linger. Our comprehensive diagnostic will identify exactly what's happening with your system.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-accent-orange font-bold">✓</span>
                  Free, no-obligation assessment
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent-orange font-bold">✓</span>
                  Expert analysis and recommendations
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent-orange font-bold">✓</span>
                  Fast scheduling available
                </li>
              </ul>
              <Button
                onClick={openModal}
                size="lg"
                className="bg-gradient-navy-ocean hover:shadow-lg w-full md:w-auto"
              >
                <Clock className="h-5 w-5 mr-2" />
                Schedule Now
              </Button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-accent-orange">
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-accent-orange font-semibold mb-1">
                    Typical Appointment
                  </div>
                  <div className="text-2xl font-bold text-navy">60-90 minutes</div>
                </div>
                <div>
                  <div className="text-sm text-accent-teal font-semibold mb-1">
                    Diagnostic Cost
                  </div>
                  <div className="text-2xl font-bold text-navy">FREE</div>
                </div>
                <div>
                  <div className="text-sm text-ocean font-semibold mb-1">
                    Get Started
                  </div>
                  <div className="text-2xl font-bold text-navy">Today</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
