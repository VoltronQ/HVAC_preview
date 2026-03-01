import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Symptoms } from './components/Symptoms'
import { Process } from './components/Process'
import { Trust } from './components/Trust'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { BookingModal } from './components/BookingModal'

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Symptoms />
      <Process />
      <Trust />
      <FAQ />
      <FinalCTA />
      <Footer />
      <BookingModal />
    </div>
  )
}

export default App
