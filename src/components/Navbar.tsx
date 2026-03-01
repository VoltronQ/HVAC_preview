import { Wind } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useBookingModal } from '@/hooks/useBookingModal'

export function Navbar() {
  const { openModal } = useBookingModal()

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Wind className="h-6 w-6 text-navy" />
            <span className="text-xl font-bold text-navy">
              NorthStar Climate
            </span>
          </div>

          <Button onClick={openModal} size="lg">
            Book Diagnostic Visit
          </Button>
        </div>
      </div>
    </nav>
  )
}
