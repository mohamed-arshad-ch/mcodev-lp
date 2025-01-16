import Image from 'next/image'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechInnovate",
    image: "/placeholder.svg?height=100&width=100",
    quote: "MCODEV Bytes transformed our online presence. Their expertise in Next.js and TailwindCSS resulted in a lightning-fast, beautiful website that's easy to maintain.",
  },
  {
    name: "Michael Chen",
    company: "GrowthStartup",
    image: "/placeholder.svg?height=100&width=100",
    quote: "The team at MCODEV Bytes went above and beyond. Their automation solutions have streamlined our operations and significantly boosted our productivity.",
  },
  {
    name: "Emily Rodriguez",
    company: "CreativeDesigns",
    image: "/placeholder.svg?height=100&width=100",
    quote: "I'm impressed by the SEO results we've seen since launching our new website. MCODEV Bytes delivered a product that not only looks great but performs exceptionally well.",
  },
]

const metrics = [
  { label: "Websites Delivered", value: "100+" },
  { label: "Customer Satisfaction", value: "95%" },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background-dark rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
              <FaQuoteLeft className="text-secondary text-4xl mb-4" />
              <p className="text-gray-600 mb-4 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center space-x-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold text-primary">{metric.value}</p>
              <p className="text-gray-600">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

