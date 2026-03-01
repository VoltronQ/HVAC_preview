import {
  Thermometer,
  Wind,
  AlertCircle,
  Volume2,
  Droplets,
  Zap,
} from 'lucide-react'

const symptoms = [
  {
    icon: Thermometer,
    title: 'Inconsistent Temperature',
    description: 'Hot and cold spots or inability to reach desired temperature',
    color: 'from-red-500',
  },
  {
    icon: Wind,
    title: 'Weak Airflow',
    description: 'Insufficient air coming from vents throughout your home',
    color: 'from-blue-500',
  },
  {
    icon: AlertCircle,
    title: 'System Won\'t Start',
    description: 'Your AC or heater refuses to turn on or keeps shutting off',
    color: 'from-yellow-500',
  },
  {
    icon: Volume2,
    title: 'Strange Noises',
    description: 'Unusual sounds like grinding, squealing, or rattling',
    color: 'from-orange-500',
  },
  {
    icon: Droplets,
    title: 'Moisture Issues',
    description: 'Leaks, condensation, or water pooling near unit',
    color: 'from-cyan-500',
  },
  {
    icon: Zap,
    title: 'High Energy Bills',
    description: 'Unexpected spike in heating or cooling costs',
    color: 'from-amber-500',
  },
]

export function Symptoms() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            Does Your HVAC System Have These Issues?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experiencing any of these common problems? Don't wait—schedule your comprehensive diagnostic today and get expert answers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {symptoms.map((symptom, index) => {
            const Icon = symptom.icon
            return (
              <div
                key={index}
                className="group relative animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${symptom.color} to-transparent opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
                <div className="relative bg-white rounded-xl p-8 border-2 border-gray-200 group-hover:border-accent-orange shadow-md group-hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`bg-gradient-to-br ${symptom.color} to-transparent p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-sm font-bold text-accent-orange opacity-0 group-hover:opacity-100 transition-opacity">
                      Common Issue
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-accent-orange transition-colors">
                    {symptom.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {symptom.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-xs text-accent-teal font-semibold">
                      → We can help fix this
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
