import { useState } from 'react'
import { ArrowRight, Shield, Clock, Zap, Star, CheckCircle2, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LearnMoreModal } from './LearnMoreModal'

export function Hero() {
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false)

  const scrollToSymptoms = () => {
    const element = document.getElementById('symptoms-tool')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToReviews = () => {
    const element = document.getElementById('testimonials')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative bg-[#050A1A] text-white overflow-hidden pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FF5C00]/20 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-[#00D1FF]/10 rounded-full blur-[100px] animate-float-delayed"></div>
        <div className="absolute top-[30%] right-[15%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[80px] animate-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-full px-4 py-1.5 border border-white/10 edge-highlight">
                <Zap className="h-4 w-4 text-[#FF5C00]" />
                <span className="text-xs font-bold tracking-widest uppercase text-blue-100/80">Expert HVAC Diagnostics</span>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-outfit font-black leading-[0.9] tracking-tighter">
                Your HVAC Deserves <span className="text-[#FF5C00]">Better.</span>
              </h1>
              <p className="text-xl text-blue-100/70 font-inter leading-relaxed max-w-xl">
                Stop guessing. Our master technicians use aerospace-grade diagnostics to identify issues and recommend permanent, honest solutions for your home.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#00D1FF]" />
                <span className="text-sm font-bold font-outfit uppercase tracking-tighter">NATE Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-sm font-bold font-outfit uppercase tracking-tighter">BBB A+ Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-bold font-outfit uppercase tracking-tighter">Top Rated 2024</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Button
                onClick={scrollToSymptoms}
                size="lg"
                className="bg-[#FF5C00] hover:bg-[#FF5C00]/90 text-white font-outfit font-bold text-lg px-8 h-16 rounded-2xl shadow-xl shadow-[#FF5C00]/20 flex items-center gap-3 group transition-all"
              >
                Start Self-Diagnostic
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => setIsLearnMoreOpen(true)}
                size="lg"
                variant="outline"
                className="glass-premium text-white border-white/20 hover:bg-white/10 font-outfit font-bold text-lg px-8 h-16 rounded-2xl edge-highlight"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative group">
            {/* Visual Container */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF5C00]/30 to-[#00D1FF]/30 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
            <div className="relative glass-premium p-10 rounded-[2rem] border border-white/10 shadow-premium edge-highlight">
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-3xl font-outfit font-black tracking-tight">Why Choose Us?</h3>
                    <p className="text-sm text-blue-100/50 mt-1 uppercase tracking-widest font-bold">The Gold Standard</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-4xl font-black text-[#FF5C00] font-outfit">4.9★</div>
                    <div className="flex gap-0.5 mt-1">
                      {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-3 w-3 fill-[#FF5C00] text-[#FF5C00]" />)}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    { icon: Shield, title: "Master Techs", desc: "15+ years experience only", color: "text-[#00D1FF]" },
                    { icon: Zap, title: "Honest Truth", desc: "No-pressure diagnostics", color: "text-[#FF5C00]" },
                    { icon: Clock, title: "Swift Action", desc: "Same-day response times", color: "text-green-400" }
                  ].map((item, id) => (
                    <div key={id} className="flex gap-5 group/item">
                      <div className={`h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover/item:border-white/30 transition-colors`}>
                        <item.icon className={`h-6 w-6 ${item.color}`} />
                      </div>
                      <div>
                        <p className="font-outfit font-bold text-lg">{item.title}</p>
                        <p className="text-sm text-blue-100/60">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#FF5C00]/10 border border-[#FF5C00]/20 rounded-2xl p-5">
                  <p className="text-sm leading-relaxed text-blue-50 font-medium italic">
                    "Most failures could have been prevented with a simple 30-minute diagnostic check."
                  </p>
                </div>

                <Button
                  onClick={scrollToReviews}
                  size="lg"
                  variant="outline"
                  className="w-full h-14 glass-premium text-white border-white/10 hover:bg-white/10 font-outfit font-bold rounded-xl edge-highlight"
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
