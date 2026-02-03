import ContactWidget from "../components/ContactWidget"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Highlights from "../components/Highlights"
import IFrameEmbed from "../components/IFrameEmbed"
import Services from "../components/Services"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Highlights />
      <section className="max-w-7xl mx-auto my-16 px-6">
        <IFrameEmbed
          src="https://pierre.neptus.co.za/onlineloanspage?token=5c9eed0a-5d51-46f1-9c2b-d571913ca853"
        />
      </section>
      <ContactWidget />
      <Footer />
    </main>
  )
}
