import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  preferredDateTime: string
  issueDescription: string
}

export function BookingCard() {
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

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
      {submitted ? (
        <div className="flex flex-col items-center justify-center py-8 space-y-4">
          <CheckCircle className="h-12 w-12 text-green-600" />
          <div className="text-center space-y-2">
            <h3 className="font-semibold text-lg text-navy">Booking Request Received!</h3>
            <p className="text-sm text-gray-600">
              Thank you. We'll contact you soon to confirm your diagnostic appointment.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="text-xl font-semibold text-navy mb-4">
            Quick Diagnostic Booking
          </h3>

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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-sm"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-sm"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-sm"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-sm"
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
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-sm resize-none"
              placeholder="Tell us about your HVAC problem..."
            />
          </div>

          <Button type="submit" className="w-full">
            Schedule My Diagnostic
          </Button>
        </form>
      )}
    </div>
  )
}
