import { useState } from 'react'
import { useBookingModal } from '@/hooks/useBookingModal'
import { ArrowRight, Shield, Clock, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LearnMoreModal } from './LearnMoreModal'

export function Hero() {
  const { openModal } = useBookingModal()
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false)

  return (
    <section className="relative bg-gradient-dark text-white overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-ocean rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2 mb-6 border border-white/20">
                <Zap className="h-4 w-4 text-accent-orange" />
                <span className="text-sm font-medium">Expert HVAC Diagnostics</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Your HVAC System Deserves Better
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Stop guessing what's wrong. Our expert technicians perform comprehensive diagnostics to identify every issue and recommend honest solutions tailored to your home.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-3 items-start bg-white/5 backdrop-blur rounded-lg p-4 border border-white/10 hover:border-accent-orange/50 transition-colors group">
                <div className="bg-accent-teal/20 rounded-lg p-2 flex-shrink-0 group-hover:bg-accent-orange/20 transition-colors">
                  <Shield className="h-5 w-5 text-accent-teal group-hover:text-accent-orange transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Licensed & Certified</p>
                  <p className="text-xs text-gray-400">Trusted professionals</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white/5 backdrop-blur rounded-lg p-4 border border-white/10 hover:border-accent-orange/50 transition-colors group">
                <div className="bg-accent-orange/20 rounded-lg p-2 flex-shrink-0 group-hover:bg-accent-teal/20 transition-colors">
                  <Clock className="h-5 w-5 text-accent-orange group-hover:text-accent-teal transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-sm">2-Hour Response</p>
                  <p className="text-xs text-gray-400">Fast scheduling available</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white/5 backdrop-blur rounded-lg p-4 border border-white/10 hover:border-accent-orange/50 transition-colors group">
                <div className="bg-green-500/20 rounded-lg p-2 flex-shrink-0 group-hover:bg-accent-orange/20 transition-colors">
                  <Zap className="h-5 w-5 text-green-500 group-hover:text-accent-orange transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Free Diagnostic</p>
                  <p className="text-xs text-gray-400">No hidden charges</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white/5 backdrop-blur rounded-lg p-4 border border-white/10 hover:border-accent-orange/50 transition-colors group">
                <div className="bg-blue-500/20 rounded-lg p-2 flex-shrink-0 group-hover:bg-accent-orange/20 transition-colors">
                  <Shield className="h-5 w-5 text-blue-500 group-hover:text-accent-orange transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-sm">100% Satisfaction</p>
                  <p className="text-xs text-gray-400">Guaranteed results</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={openModal}
                size="lg"
                className="bg-accent-orange hover:bg-accent-orange/90 text-white font-semibold flex items-center gap-2 group"
              >
                Schedule Your Diagnostic
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => setIsLearnMoreOpen(true)}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-t from-accent-orange/20 to-ocean/20 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white/10 backdrop-blur rounded-2xl border border-white/20 p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Why Choose Us?</h3>
                  <div className="text-4xl font-bold text-accent-orange">4.9★</div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-lg bg-accent-orange/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-accent-orange">1</span>
                    </div>
                    <div>
                      <p className="font-semibold">Expert Technicians</p>
                      <p className="text-sm text-gray-400">15+ years average experience</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-lg bg-accent-teal/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-accent-teal">2</span>
                    </div>
                    <div>
                      <p className="font-semibold">Honest Diagnosis</p>
                      <p className="text-sm text-gray-400">No-pressure recommendations</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-green-500">3</span>
                    </div>
                    <div>
                      <p className="font-semibold">Complete Solution</p>
                      <p className="text-sm text-gray-400">We solve your HVAC problems</p>
                    </div>
                  </div>
                </div>

                <div className="bg-accent-orange/20 border border-accent-orange/40 rounded-lg p-4">
                  <p className="text-sm">
                    <span className="font-bold">Over 1,200</span> satisfied customers in the Greater Boston area trust us with their HVAC diagnostics.
                  </p>
                </div>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white/10"
                >
                  View Reviews
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LearnMoreModal
        isOpen={isLearnMoreOpen}
        onClose={() => setIsLearnMoreOpen(false)}
      />
    </section>
  )
}
