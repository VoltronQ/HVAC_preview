import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What is included in a diagnostic visit?',
    answer:
      'Our diagnostic visit includes a thorough inspection of your entire HVAC system, performance testing, identification of any issues, and a detailed report with recommendations. We check filters, refrigerant levels, electrical components, ductwork, and provide you with honest, no-pressure advice about next steps.',
  },
  {
    question: 'How much does a diagnostic visit cost?',
    answer:
      'Our diagnostic visits are very affordable and provide exceptional value. We focus on identifying problems early to help you avoid costly emergency repairs down the road. Contact us for current pricing or schedule online.',
  },
  {
    question: 'How quickly can you schedule me?',
    answer:
      'We pride ourselves on fast scheduling. Many appointments can be scheduled within 24-48 hours. During peak seasons, we work hard to get you in as quickly as possible. When you book through our website, you can select your preferred date and time.',
  },
  {
    question: 'Do I need to be home during the visit?',
    answer:
      'Yes, we require someone to be present during the diagnostic visit. This allows our technician to discuss findings with you in person, answer questions, and provide personalized recommendations based on your specific situation.',
  },
]

export function FAQ() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Have questions about our diagnostic visits? We've got answers.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
