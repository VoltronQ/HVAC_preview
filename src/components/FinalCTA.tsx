import { Button } from '@/components/ui/button'
import { useBookingModal } from '@/hooks/useBookingModal'

export function FinalCTA() {
  const { openModal } = useBookingModal()

  return (
    <section className="bg-light-blue py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
          Don't Wait for Your System to Break Down
        </h2>
        <p className="text-lg text-gray-700 mb-3">
          Preventive diagnostics save money and prevent emergencies. Get your HVAC system evaluated by a certified expert today.
        </p>
        <p className="text-base text-gray-600 mb-8">
          From inconsistent temperatures to mysterious noises, we'll identify what's happening and what needs to be done.
        </p>

        <Button onClick={openModal} size="lg" className="inline-block">
          Book Your Diagnostic Visit Today
        </Button>

        <p className="mt-6 text-sm text-gray-600">
          Fast scheduling • Professional service • Honest recommendations
        </p>
      </div>
    </section>
  )
}
