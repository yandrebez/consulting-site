export default function Highlights() {
  return (
    <section className="py-24 bg-white px-6">
      <h2 className="text-3xl font-bold text-center">Why Choose Us</h2>

      <div className="mt-12 grid md:grid-cols-3 gap-8 items-start text-center">
        <div className="flex flex-col items-center">
          <img src="https://via.placeholder.com/150" alt="Expert Team" className="mb-4 rounded" />
          <h3 className="font-semibold text-xl">Expert Team</h3>
          <p className="mt-2 text-gray-600">
            Our team has years of experience providing top-notch consulting services.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img src="https://via.placeholder.com/150" alt="Tailored Solutions" className="mb-4 rounded" />
          <h3 className="font-semibold text-xl">Tailored Solutions</h3>
          <p className="mt-2 text-gray-600">
            We design strategies specifically for your business challenges.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img src="https://via.placeholder.com/150" alt="Proven Results" className="mb-4 rounded" />
          <h3 className="font-semibold text-xl">Proven Results</h3>
          <p className="mt-2 text-gray-600">
            Our clients see measurable improvements and growth.
          </p>
        </div>
      </div>
    </section>
  )
}
