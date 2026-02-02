export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        
        {/* Company info */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            Your Consulting Company
          </h3>
          <p className="mt-4 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            We help businesses grow through strategy, insight, and execution.
          </p>
        </div>

        {/* Contact details */}
        <div>
          <h4 className="text-lg font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Email: <a href="mailto:yandrebez007@gmail.com" className="hover:underline">yandrebez007@gmail.com</a></li>
            <li>Phone: +27 11 123 4567</li>
            <li>Location: Johannesburg, South Africa</li>
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-400">
        © {new Date().getFullYear()} Your Consulting Company. All rights reserved.
      </div>
    </footer>
  )
}
