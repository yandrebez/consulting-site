import AdSense from "../components/AdSense"
import ContactForm from "../components/ContactForm"
import ContactWidget from "../components/ContactWidget"
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

      <div className="max-w-6xl mx-auto my-12 px-6">
        <AdSense />
      </div>

      <ContactForm />
      <ContactWidget />
      <Footer />
    </main>
  )
}
