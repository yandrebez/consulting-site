import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Highlights from "../components/Highlights"
import Services from "../components/Services"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Highlights />
      <ContactForm />
      <Footer />
    </main>
  )
}

