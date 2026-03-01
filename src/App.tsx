import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Symptoms } from './components/Symptoms'
import { DiagnosticProcess } from './components/DiagnosticProcess'
import { Testimonials } from './components/Testimonials'
import { Process } from './components/Process'
import { Trust } from './components/Trust'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { MultiStepBookingForm } from './components/MultiStepBookingForm'
import { ScrollToTop } from './components/ScrollToTop'

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Symptoms />
      <DiagnosticProcess />
      <Testimonials />
      <Process />
      <Trust />
      <FAQ />
      <FinalCTA />
      <Footer />
      <MultiStepBookingForm />
      <ScrollToTop />
    </div>
  )
}

export default App
