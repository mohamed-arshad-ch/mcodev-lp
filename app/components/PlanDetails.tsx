import { FaCheck, FaTimes, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

interface Feature {
  text: string
  included: boolean
}

interface Plan {
  name: string
  price: string
  features: Feature[]
}

export default function PlanDetails({ plan }: { plan: Plan }) {
  const whatsappMessage = encodeURIComponent(`Hi, I'm interested in the ${plan.name} plan. Can you provide more information?`)

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-semibold text-primary text-center">{plan.name}</h1>
            <p className="mt-4 text-4xl font-bold text-center text-secondary">{plan.price}</p>
          </div>
          <div className="px-6 py-8 bg-background-dark">
            <ul className="space-y-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  {feature.included ? (
                    <FaCheck className="flex-shrink-0 w-5 h-5 text-secondary" />
                  ) : (
                    <FaTimes className="flex-shrink-0 w-5 h-5 text-red-500" />
                  )}
                  <span className={`ml-3 ${feature.included ? 'text-primary' : 'text-gray-500'}`}>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-6 py-8">
            <Link
              href={`https://wa.me/919847274569?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-secondary text-primary py-3 px-4 rounded-full hover:bg-secondary-light transition-colors duration-300 text-center"
            >
              <FaWhatsapp className="inline-block mr-2" />
              Contact us on WhatsApp
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/#pricing" className="text-primary hover:text-primary-light transition-colors duration-300">
            &larr; Back to all plans
          </Link>
        </div>
      </div>
    </div>
  )
}

