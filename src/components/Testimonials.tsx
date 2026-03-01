import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'Boston, MA',
    rating: 5,
    text: "The technician was so knowledgeable and professional. They identified the issue with our AC unit that three other companies missed. Highly recommend!",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    name: 'Michael Johnson',
    location: 'Cambridge, MA',
    rating: 5,
    text: 'Fast, reliable, and honest. They diagnosed the problem, explained everything clearly, and gave us options without any pressure. Great service!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    name: 'Jessica Rodriguez',
    location: 'Somerville, MA',
    rating: 5,
    text: 'Best diagnostic experience we\'ve had. The technician took time to explain what was happening with our heating system. Very impressive!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
]

const stats = [
  { number: '1,200+', label: 'Diagnostics Completed' },
  { number: '4.9★', label: 'Average Rating' },
  { number: '2hr', label: 'Avg Response Time' },
  { number: '100%', label: 'Satisfaction Guaranteed' },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-gradient-dark text-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Trusted by Homeowners Across the Region
          </h2>
          <p className="text-lg text-gray-300">
            See why families choose us for their HVAC diagnostics
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur rounded-lg p-6 text-center hover:bg-white/15 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-accent-orange mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur rounded-lg p-8 border border-white/20 hover:border-accent-orange/50 transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-accent-orange/50"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent-orange text-accent-orange"
                  />
                ))}
              </div>

              <p className="text-gray-200 leading-relaxed">{testimonial.text}</p>

              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-gray-400">Verified Customer</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
