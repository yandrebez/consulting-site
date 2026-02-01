export default function Services() {
  return (
    <section className="py-24 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center">What We Do</h2>

      <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 border rounded shadow-sm">
          <h3 className="font-semibold text-xl">Consulting</h3>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. We provide expert guidance for your business.
          </p>
        </div>

        <div className="p-6 border rounded shadow-sm">
          <h3 className="font-semibold text-xl">Strategy</h3>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Clear plans that drive measurable results.
          </p>
        </div>

        <div className="p-6 border rounded shadow-sm">
          <h3 className="font-semibold text-xl">Execution</h3>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. From idea to delivery, smoothly and efficiently.
          </p>
        </div>
      </div>
    </section>
  )
}
