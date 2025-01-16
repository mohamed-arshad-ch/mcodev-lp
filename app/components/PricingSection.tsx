import { FaCheck, FaTimes } from 'react-icons/fa'
import Link from 'next/link'

const packages = [
  {
    name: "Bytes Basic",
    price: "₹27,999",
    slug: "bytes-basic",
    features: [
      { text: "One landing page built with Next.js and TailwindCSS", included: true },
      { text: "Basic SEO", included: true },
      { text: "1-year domain", included: true },
      { text: "Google Business email setup", included: true },
      { text: "Hosting server for 1 year", included: true },
      { text: "Backend API development", included: false },
      { text: "Cloud management services (AWS)", included: false },
      { text: "Complete business automation", included: false },
      { text: "WhatsApp automation", included: false },
      { text: "Custom AI chatbot", included: false },
      { text: "Advanced workflow automation", included: false },
    ],
  },
  {
    name: "Bytes Pro",
    price: "₹69,999",
    slug: "bytes-pro",
    features: [
      { text: "One landing page built with Next.js and TailwindCSS", included: true },
      { text: "Basic SEO", included: true },
      { text: "1-year domain", included: true },
      { text: "Google Business email setup", included: true },
      { text: "Hosting server for 1 year", included: true },
      { text: "Backend API development", included: true },
      { text: "Cloud management services (AWS)", included: true },
      { text: "Complete business automation", included: false },
      { text: "WhatsApp automation", included: false },
      { text: "Custom AI chatbot", included: false },
      { text: "Advanced workflow automation", included: false },
    ],
  },
  {
    name: "Bytes Enterprise",
    price: "Contact us",
    slug: "bytes-enterprise",
    features: [
      { text: "One landing page built with Next.js and TailwindCSS", included: true },
      { text: "Basic SEO", included: true },
      { text: "1-year domain", included: true },
      { text: "Google Business email setup", included: true },
      { text: "Hosting server for 1 year", included: true },
      { text: "Backend API development", included: true },
      { text: "Cloud management services (AWS)", included: true },
      { text: "Complete business automation", included: true },
      { text: "WhatsApp automation", included: true },
      { text: "Custom AI chatbot", included: true },
      { text: "Advanced workflow automation", included: true },
    ],
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Choose Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{pkg.name}</h3>
                <p className="text-3xl font-bold mb-6 text-primary">{pkg.price}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.slice(0, 5).map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      {feature.included ? (
                        <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                      ) : (
                        <FaTimes className="text-red-500 mr-2 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-500'}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/plan/${pkg.slug}`}
                  className="block w-full bg-primary text-white py-2 px-4 rounded-full hover:bg-primary-light transition-colors duration-300 text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

