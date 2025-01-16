import { FaCheck, FaTimes, FaServer, FaSearch, FaRobot, FaWhatsapp, FaCloud } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { MdDomain, MdEmail } from 'react-icons/md'

const packages = [
  {
    name: "Bytes Basic",
    price: "₹27,999",
    description: "Perfect for small businesses looking to establish their online presence.",
    features: [
      { icon: SiNextdotjs, text: "One landing page built with Next.js and TailwindCSS", included: true },
      { icon: FaSearch, text: "Basic SEO optimization", included: true },
      { icon: MdDomain, text: "1-year domain registration", included: true },
      { icon: MdEmail, text: "Google Business email setup", included: true },
      { icon: FaServer, text: "Hosting server for 1 year", included: true },
      { icon: FaServer, text: "Backend API development", included: false },
      { icon: FaCloud, text: "Cloud management services (AWS)", included: false },
      { icon: FaRobot, text: "Complete business automation", included: false },
      { icon: FaWhatsapp, text: "WhatsApp automation", included: false },
      { icon: FaRobot, text: "Custom AI chatbot", included: false },
      { icon: FaServer, text: "Advanced workflow automation", included: false },
    ],
  },
  {
    name: "Bytes Pro",
    price: "₹69,999",
    description: "Ideal for growing businesses that need more advanced features and scalability.",
    features: [
      { icon: SiNextdotjs, text: "One landing page built with Next.js and TailwindCSS", included: true },
      { icon: FaSearch, text: "Advanced SEO optimization", included: true },
      { icon: MdDomain, text: "1-year domain registration", included: true },
      { icon: MdEmail, text: "Google Business email setup", included: true },
      { icon: FaServer, text: "Hosting server for 1 year", included: true },
      { icon: FaServer, text: "Backend API development", included: true },
      { icon: FaCloud, text: "Cloud management services (AWS)", included: true },
      { icon: FaRobot, text: "Complete business automation", included: false },
      { icon: FaWhatsapp, text: "WhatsApp automation", included: false },
      { icon: FaRobot, text: "Custom AI chatbot", included: false },
      { icon: FaServer, text: "Advanced workflow automation", included: false },
    ],
  },
  {
    name: "Bytes Enterprise",
    price: "Contact us",
    description: "Tailored solutions for large businesses with complex requirements and high scalability needs.",
    features: [
      { icon: SiNextdotjs, text: "Custom multi-page website built with Next.js and TailwindCSS", included: true },
      { icon: FaSearch, text: "Enterprise-level SEO strategy", included: true },
      { icon: MdDomain, text: "1-year domain registration", included: true },
      { icon: MdEmail, text: "Custom email solution", included: true },
      { icon: FaServer, text: "High-performance hosting with 24/7 support", included: true },
      { icon: FaServer, text: "Advanced Backend API development", included: true },
      { icon: FaCloud, text: "Comprehensive cloud management services (AWS)", included: true },
      { icon: FaRobot, text: "Complete business automation", included: true },
      { icon: FaWhatsapp, text: "WhatsApp automation", included: true },
      { icon: FaRobot, text: "Custom AI chatbot", included: true },
      { icon: FaServer, text: "Advanced workflow automation", included: true },
    ],
  },
]

export default function PricingDetailsScreen() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Detailed Package Breakdown</h1>
        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <h2 className="text-3xl font-semibold text-gray-900 text-center">{pkg.name}</h2>
                <p className="mt-4 text-center text-gray-600">{pkg.description}</p>
                <p className="mt-4 text-4xl font-bold text-center text-purple-600">{pkg.price}</p>
              </div>
              <div className="px-6 py-8 bg-gray-50">
                <ul className="space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <feature.icon className={`flex-shrink-0 w-6 h-6 ${feature.included ? 'text-green-500' : 'text-gray-400'}`} />
                      <span className={`ml-3 ${feature.included ? 'text-gray-900' : 'text-gray-500'}`}>{feature.text}</span>
                      {feature.included ? (
                        <FaCheck className="ml-auto flex-shrink-0 w-5 h-5 text-green-500" />
                      ) : (
                        <FaTimes className="ml-auto flex-shrink-0 w-5 h-5 text-red-500" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-4 bg-gray-100">
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition-colors duration-300">
                  {pkg.price === "Contact us" ? "Get Custom Quote" : "Choose Plan"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

