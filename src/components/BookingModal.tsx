import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useBookingModal } from '@/hooks/useBookingModal'
import { CheckCircle } from 'lucide-react'

export interface FormData {
  name: string
  email: string
  phone: string
  preferredDateTime: string
  issueDescription: string
}

export function BookingModal() {
  const { isOpen, closeModal } = useBookingModal()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    preferredDateTime: '',
    issueDescription: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleClose = () => {
    closeModal()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-navy">
            {submitted ? 'Booking Confirmed!' : 'Schedule Your Diagnostic Visit'}
          </DialogTitle>
        </DialogHeader>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <CheckCircle className="h-16 w-16 text-green-600" />
            <div className="text-center space-y-2">
              <h3 className="font-semibold text-lg text-navy">Thank You!</h3>
              <p className="text-sm text-gray-600">
                We've received your booking request. A representative will contact you shortly to confirm your diagnostic visit appointment.
              </p>
              <div className="bg-light-blue p-4 rounded-lg mt-4">
                <p className="text-sm font-medium text-navy">What to expect:</p>
                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                  <li>• Confirmation call within 24 hours</li>
                  <li>• Professional diagnostic assessment</li>
                  <li>• No-pressure recommendations</li>
                </ul>
              </div>
            </div>
            <Button onClick={handleClose} className="w-full">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-navy mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy mb-1">
                Preferred Date & Time *
              </label>
              <input
                type="datetime-local"
                name="preferredDateTime"
                value={formData.preferredDateTime}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy mb-1">
                Describe Your HVAC Issue *
              </label>
              <textarea
                name="issueDescription"
                value={formData.issueDescription}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent resize-none"
                placeholder="Tell us about your HVAC problem..."
              />
            </div>

            <div className="flex gap-3">
              <Button type="submit" className="flex-1">
                Book Your Visit
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
