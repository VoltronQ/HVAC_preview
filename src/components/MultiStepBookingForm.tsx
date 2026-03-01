import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useBookingModal } from '@/hooks/useBookingModal'
import { CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react'

export interface FormData {
  name: string
  email: string
  phone: string
  preferredDate: string
  preferredTime: string
  issueDescription: string
  severity: 'routine' | 'urgent'
}

const steps = [
  { id: 1, label: 'Contact Info', title: 'Tell us how to reach you' },
  { id: 2, label: 'Schedule', title: 'When works best?' },
  { id: 3, label: 'Issue Details', title: 'Describe your problem' },
]

export function MultiStepBookingForm() {
  const { isOpen, closeModal } = useBookingModal()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    issueDescription: '',
    severity: 'routine',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleClose = () => {
    closeModal()
    setCurrentStep(1)
    setSubmitted(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      issueDescription: '',
      severity: 'routine',
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-navy">
            {submitted ? 'Booking Confirmed!' : 'Schedule Your Diagnostic'}
          </DialogTitle>
        </DialogHeader>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-8 space-y-4 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-green-100 rounded-full blur-md animate-pulse"></div>
              <CheckCircle className="h-16 w-16 text-green-600 relative" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="font-semibold text-lg text-navy">Thank You!</h3>
              <p className="text-sm text-gray-600">
                We've received your booking request. A representative will contact you shortly.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg mt-4 border border-green-200">
                <p className="text-sm font-medium text-navy">What to expect:</p>
                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                  <li>✓ Confirmation call within 24 hours</li>
                  <li>✓ Professional diagnostic assessment</li>
                  <li>✓ No-pressure recommendations</li>
                </ul>
              </div>
            </div>
            <Button onClick={handleClose} className="w-full">
              Close
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex gap-2">
              {steps.map((step) => (
                <div key={step.id} className="flex-1">
                  <div
                    className={`h-1 rounded-full transition-all duration-300 ${
                      step.id <= currentStep
                        ? 'bg-gradient-navy-ocean'
                        : 'bg-gray-200'
                    }`}
                  ></div>
                  <p className="text-xs mt-1 font-medium text-gray-600">
                    {step.label}
                  </p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {currentStep === 1 && (
                <div className="space-y-4 animate-slide-up">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4 animate-slide-up">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Preferred Time *
                    </label>
                    <input
                      type="time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Urgency Level *
                    </label>
                    <select
                      name="severity"
                      value={formData.severity}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition-all"
                    >
                      <option value="routine">Routine - Convenient time works</option>
                      <option value="urgent">Urgent - Need assistance ASAP</option>
                    </select>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4 animate-slide-up">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Describe Your HVAC Issue *
                    </label>
                    <textarea
                      name="issueDescription"
                      value={formData.issueDescription}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition-all resize-none"
                      placeholder="Tell us about your HVAC problem - what are you experiencing?"
                    />
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                  className="flex-1"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Back
                </Button>

                {currentStep < steps.length ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 bg-gradient-navy-ocean"
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-navy-ocean"
                  >
                    Book My Visit
                  </Button>
                )}
              </div>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
