import { useState, useMemo } from 'react'
import {
  Thermometer,
  Wind,
  AlertCircle,
  Volume2,
  Droplets,
  Zap,
  Check,
  Stethoscope,
  ChevronRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useBookingModal } from '@/hooks/useBookingModal'

const symptoms = [
  {
    id: 'temp',
    icon: Thermometer,
    title: 'Inconsistent Temperature',
    description: 'Hot and cold spots or inability to reach desired temperature',
    color: 'from-red-500',
    glow: 'group-hover:shadow-red-500/20',
  },
  {
    id: 'air',
    icon: Wind,
    title: 'Weak Airflow',
    description: 'Insufficient air coming from vents throughout your home',
    color: 'from-blue-500',
    glow: 'group-hover:shadow-blue-500/20',
  },
  {
    id: 'start',
    icon: AlertCircle,
    title: 'System Won\'t Start',
    description: 'Your AC or heater refuses to turn on or keeps shutting off',
    color: 'from-yellow-500',
    glow: 'group-hover:shadow-yellow-500/20',
  },
  {
    id: 'noise',
    icon: Volume2,
    title: 'Strange Noises',
    description: 'Unusual sounds like grinding, squealing, or rattling',
    color: 'from-orange-500',
    glow: 'group-hover:shadow-orange-500/20',
  },
  {
    id: 'moisture',
    icon: Droplets,
    title: 'Moisture Issues',
    description: 'Leaks, condensation, or water pooling near unit',
    color: 'from-cyan-500',
    glow: 'group-hover:shadow-cyan-500/20',
  },
  {
    id: 'bills',
    icon: Zap,
    title: 'High Energy Bills',
    description: 'Unexpected spike in heating or cooling costs',
    color: 'from-amber-500',
    glow: 'group-hover:shadow-amber-500/20',
  },
]

export function Symptoms() {
  const [selected, setSelected] = useState<string[]>([])
  const { openModal } = useBookingModal()

  const toggleSymptom = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const recommendation = useMemo(() => {
    if (selected.length === 0) return null
    if (selected.length >= 3 || selected.includes('start')) {
      return {
        level: 'Critical',
        text: 'Immediate diagnostic highly recommended to prevent total system failure.',
        color: 'text-red-500',
        bgColor: 'bg-red-500/10',
        borderColor: 'border-red-500/20'
      }
    }
    return {
      level: 'Maintenance Needed',
      text: 'Early symptoms detected. A diagnostic visit can identify the root cause before it worsens.',
      color: 'text-accent-orange',
      bgColor: 'bg-accent-orange/10',
      borderColor: 'border-accent-orange/20'
    }
  }, [selected])

  return (
    <section id="symptoms-tool" className="bg-white py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-navy/5 rounded-full px-4 py-1 mb-4 border border-navy/10">
            <Stethoscope className="h-4 w-4 text-navy" />
            <span className="text-xs font-bold uppercase tracking-widest text-navy/60">Self-Diagnostic Tool</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-outfit font-black text-navy mb-6 tracking-tight">
            Select Your <span className="text-accent-orange">Symptoms</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-inter">
            Select the issues you are experiencing for a real-time diagnostic recommendation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {symptoms.map((symptom, index) => {
            const Icon = symptom.icon
            const isSelected = selected.includes(symptom.id)

            return (
              <button
                key={symptom.id}
                onClick={() => toggleSymptom(symptom.id)}
                className={`group relative text-left transition-all duration-300 transform animate-slide-up ${isSelected ? 'scale-[1.02]' : 'hover:scale-[1.01]'
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${symptom.color} to-transparent rounded-[2rem] opacity-0 ${isSelected ? 'opacity-20' : 'group-hover:opacity-10'} blur-xl transition-opacity duration-500`}></div>

                <div className={`relative h-full bg-white rounded-[1.8rem] p-8 border-2 transition-all duration-300 shadow-sm ${isSelected
                  ? `border-accent-orange shadow-premium ${symptom.glow}`
                  : 'border-slate-100 group-hover:border-accent-orange/30 group-hover:shadow-xl'
                  }`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className={`bg-gradient-to-br ${symptom.color} to-transparent p-4 rounded-2xl flex-shrink-0 transition-transform duration-500 ${isSelected ? 'scale-110 rotate-3' : 'group-hover:scale-110'}`}>
                      <Icon className={`h-7 w-7 ${isSelected ? 'text-white' : 'text-white'}`} />
                    </div>
                    {isSelected && (
                      <div className="bg-accent-orange rounded-full p-1.5 animate-in fade-in zoom-in duration-300">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>

                  <h3 className={`text-2xl font-outfit font-bold mb-3 transition-colors ${isSelected ? 'text-accent-orange' : 'text-navy'}`}>
                    {symptom.title}
                  </h3>
                  <p className="text-slate-500 text-base leading-relaxed font-inter">
                    {symptom.description}
                  </p>

                  <div className={`mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${isSelected ? 'text-accent-orange translate-x-1' : 'text-slate-300 group-hover:text-accent-orange group-hover:translate-x-1'}`}>
                    {isSelected ? 'Selected' : 'Select Issue'}
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Recommendation Panel */}
        {recommendation && (
          <div className="mt-16 animate-in slide-in-from-bottom-8 fade-in duration-700">
            <div className={`shadow-premium rounded-[2.5rem] p-10 border-2 ${recommendation.borderColor} ${recommendation.bgColor} backdrop-blur-sm relative overflow-hidden`}>
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

              <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex-1 space-y-4">
                  <div className={`inline-block px-4 py-1 rounded-full text-xs font-black uppercase tracking-[0.2em] ${recommendation.color} bg-white/50 backdrop-blur-md border border-white/20 shadow-sm`}>
                    Status: {recommendation.level}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-outfit font-black text-navy leading-tight">
                    Expert Recommendation
                  </h3>
                  <p className="text-xl text-slate-700/80 font-medium font-inter leading-relaxed max-w-2xl">
                    {recommendation.text}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <Button
                    onClick={openModal}
                    size="lg"
                    className="bg-navy hover:bg-navy-light text-white font-outfit font-bold text-xl px-12 h-20 rounded-[1.5rem] shadow-2xl flex items-center gap-4 group transition-all"
                  >
                    Schedule Diagnostic Now
                    <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 text-center text-slate-400 font-medium font-inter">
          * Professional diagnosis is always recommended to ensure safety and system longevity.
        </div>
      </div>
    </section>
  )
}
