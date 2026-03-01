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
  },
  {
    icon: Wind,
    title: 'Weak Airflow',
    description: 'Insufficient air coming from vents throughout your home',
  },
  {
    icon: AlertCircle,
    title: 'System Won\'t Start',
    description: 'Your AC or heater refuses to turn on or keeps shutting off',
  },
  {
    icon: Volume2,
    title: 'Strange Noises',
    description: 'Unusual sounds like grinding, squealing, or rattling',
  },
  {
    icon: Droplets,
    title: 'Moisture Issues',
    description: 'Leaks, condensation, or water pooling near unit',
  },
  {
    icon: Zap,
    title: 'High Energy Bills',
    description: 'Unexpected spike in heating or cooling costs',
  },
]

export function Symptoms() {
  return (
    <section className="bg-light-blue py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Common HVAC Issues
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Experiencing any of these problems? It's time for a diagnostic visit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {symptoms.map((symptom, index) => {
            const Icon = symptom.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <Icon className="h-8 w-8 text-navy mb-3" />
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {symptom.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {symptom.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
