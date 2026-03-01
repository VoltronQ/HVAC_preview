import { Button } from '@/components/ui/button'
import { Shield, Truck, Clock } from 'lucide-react'

const trustItems = [
  {
    icon: Shield,
    label: 'Professional & Insured',
    description: 'All technicians are certified and fully insured for your protection.',
  },
  {
    icon: Truck,
    label: 'Same-Day Service',
    description: 'We offer rapid scheduling to address your HVAC concerns quickly.',
  },
  {
    icon: Clock,
    label: '100% Satisfaction',
    description: 'We stand behind our work with a satisfaction guarantee.',
  },
]

export function Trust() {

  return (
    <section className="bg-navy text-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {trustItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="text-center">
                <Icon className="h-12 w-12 mx-auto mb-4 text-light-blue" />
                <h3 className="text-lg font-semibold mb-2">
                  {item.label}
                </h3>
                <p className="text-blue-100">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <p className="text-xl mb-6 text-blue-100">
            Why wait for your HVAC system to fail completely? Early diagnosis can save thousands on emergency repairs.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            View Reviews
          </Button>
        </div>
      </div>
    </section>
  )
}
