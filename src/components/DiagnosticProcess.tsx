import { Zap, Eye, Wrench, Clipboard, Thermometer, Gauge } from 'lucide-react'

const steps = [
  {
    icon: Clipboard,
    title: 'System Review',
    description: 'We start by reviewing your system history and current symptoms.',
    color: 'from-navy-light/20 to-navy-light/5',
    iconColor: 'text-navy-light',
    phase: '01'
  },
  {
    icon: Thermometer,
    title: 'Temperature Analysis',
    description: 'Check temperature readings throughout your home for consistency.',
    color: 'from-navy-light/20 to-navy-light/5',
    iconColor: 'text-navy-light',
    phase: '02'
  },
  {
    icon: Gauge,
    title: 'Pressure Testing',
    description: 'Measure refrigerant pressure and airflow rates for efficiency.',
    color: 'from-navy-light/20 to-navy-light/5',
    iconColor: 'text-navy-light',
    phase: '03'
  },
  {
    icon: Eye,
    title: 'Visual Inspection',
    description: 'Thoroughly inspect all components, connections, and electrical.',
    color: 'from-navy-light/20 to-navy-light/5',
    iconColor: 'text-navy-light',
    phase: '04'
  },
  {
    icon: Zap,
    title: 'Electrical Testing',
    description: 'Test all electrical connections and system controls.',
    color: 'from-navy-light/20 to-navy-light/5',
    iconColor: 'text-navy-light',
    phase: '05'
  },
  {
    icon: Wrench,
    title: 'Recommendations',
    description: 'Provide honest diagnosis and repair or replacement options.',
    color: 'from-accent-orange/20 to-accent-orange/5',
    iconColor: 'text-accent-orange',
    phase: '06'
  },
]

export function DiagnosticProcess() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-5xl sm:text-6xl font-outfit font-black text-navy mb-6 tracking-tight">
            The <span className="text-accent-orange">Diagnostic</span> Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-inter">
            Our master technicians follow a rigorous 6-phase process to ensure your system reaches peak performance.
          </p>
        </div>

        <div className="relative">
          {/* Central Vertical Line (Desktop Only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-black transform -translate-x-1/2 opacity-20"></div>

          <div className="space-y-20 lg:space-y-0 relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-x-32 items-center lg:py-16 group"
                >
                  {/* Timeline Dot (Desktop Only) */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-500 group-hover:scale-125">
                    <div className="w-4 h-4 bg-white rounded-full border-2 border-black/40 shadow-sm"></div>
                  </div>

                  {/* Card Section */}
                  <div className={`
                    relative animate-slide-up
                    ${isEven ? 'lg:col-start-1 lg:text-right' : 'lg:col-start-2'}
                  `} style={{ animationDelay: `${index * 150}ms` }}>
                    <div className={`
                      relative glass-premium bg-gradient-navy-ocean p-10 rounded-[2.5rem] border-2 border-white/20 shadow-premium transition-all duration-500 transform lg:hover:scale-[1.03] group/card overflow-hidden
                    `}>
                      {/* Background Accents */}
                      <div className={`absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700`}></div>

                      <div className={`relative space-y-4`}>
                        <div className={`flex items-center gap-4 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                          <div className={`bg-white/10 p-4 rounded-2xl border border-white/10 group-hover/card:bg-white/20 shadow-sm transition-all duration-500`}>
                            <Icon className={`h-8 w-8 text-white`} />
                          </div>
                          <span className={`text-sm font-black tracking-[0.2em] uppercase text-white/40 font-outfit`}>Phase {step.phase}</span>
                        </div>

                        <h3 className="text-3xl font-outfit font-black text-white leading-tight group-hover/card:text-accent-orange transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-blue-50/80 text-lg leading-relaxed font-inter font-medium">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats Section Redesigned */}
        <div className="mt-32 relative">
          <div className="absolute inset-0 bg-navy rounded-[3rem] -rotate-1 hidden lg:block shadow-2xl"></div>
          <div className="relative bg-white border-2 border-slate-100 rounded-[3rem] p-12 lg:p-16 shadow-premium">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center lg:text-left">
              <div className="space-y-2">
                <div className="text-6xl font-outfit font-black text-accent-orange">
                  60-90
                </div>
                <div className="text-sm font-black uppercase tracking-widest text-navy/40">Minutes</div>
                <p className="text-slate-600 font-inter font-medium">Typical on-site diagnostic assessment duration.</p>
              </div>
              <div className="space-y-2 md:border-x md:border-slate-100 md:px-12">
                <div className="text-6xl font-outfit font-black text-blue-500">
                  $0
                </div>
                <div className="text-sm font-black uppercase tracking-widest text-navy/40">Initial Cost</div>
                <p className="text-slate-600 font-inter font-medium">Free, no-obligation comprehensive performance audit.</p>
              </div>
              <div className="space-y-2">
                <div className="text-6xl font-outfit font-black text-green-500">
                  100%
                </div>
                <div className="text-sm font-black uppercase tracking-widest text-navy/40">Guaranteed</div>
                <p className="text-slate-600 font-inter font-medium">Complete peace of mind or we make it right, guaranteed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
