import ContactForm from "../components/ContactForm"
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
    </main>
  )
}
