import { Zap, Eye, Wrench, Clipboard, Thermometer, Gauge } from 'lucide-react'

const steps = [
  {
    icon: Clipboard,
    title: 'System Review',
    description: 'We start by reviewing your system history and current symptoms.',
  },
  {
    icon: Thermometer,
    title: 'Temperature Analysis',
    description: 'Check temperature readings throughout your home for consistency.',
  },
  {
    icon: Gauge,
    title: 'Pressure Testing',
    description: 'Measure refrigerant pressure and airflow rates for efficiency.',
  },
  {
    icon: Eye,
    title: 'Visual Inspection',
    description: 'Thoroughly inspect all components, connections, and electrical.',
  },
  {
    icon: Zap,
    title: 'Electrical Testing',
    description: 'Test all electrical connections and system controls.',
  },
  {
    icon: Wrench,
    title: 'Recommendations',
    description: 'Provide honest diagnosis and repair or replacement options.',
  },
]

export function DiagnosticProcess() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            What Happens During Your Diagnostic
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive diagnostic process ensures we identify every issue with your HVAC system, giving you complete peace of mind.
          </p>
        </div>

        <div className="relative">
          {/* Central Vertical Line (Desktop Only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-x-24 items-center lg:py-10"
                >
                  {/* Timeline Dot (Desktop Only) */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 group-hover:scale-110 transition-transform">
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm border-2 border-accent-orange">
                      <div className="w-2 h-2 bg-accent-orange rounded-full"></div>
                    </div>
                  </div>

                  {/* Card Section */}
                  <div className={`
                    relative animate-slide-up
                    ${isEven ? 'lg:col-start-1 lg:text-right' : 'lg:col-start-2'}
                  `} style={{ animationDelay: `${index * 100}ms` }}>
                    <div className={`
                      bg-gradient-navy-ocean rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform lg:hover:scale-[1.01] group
                    `}>
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="bg-white/10 rounded-xl p-3 group-hover:bg-accent-orange/20 transition-colors">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="text-sm font-bold text-accent-orange tracking-widest uppercase opacity-80">Phase 0{index + 1}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-accent-orange transition-colors">{step.title}</h3>
                      <p className="text-blue-50/90 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-accent-orange/10 to-accent-teal/10 rounded-2xl p-8 border border-accent-orange/20 animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-accent-orange mb-2">
                60-90min
              </div>
              <p className="text-gray-700 font-medium">
                Typical diagnostic visit duration
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-teal mb-2">
                $0
              </div>
              <p className="text-gray-700 font-medium">
                Free diagnostic assessment
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-navy mb-2">
                100%
              </div>
              <p className="text-gray-700 font-medium">
                Satisfaction guaranteed or your money back
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
