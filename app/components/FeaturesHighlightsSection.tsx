import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { FaAws, FaSearch, FaRobot, FaExpandAlt } from 'react-icons/fa'

const features = [
  {
    title: "Modern Tech Stack",
    description: "Next.js, TailwindCSS, and AWS for top-tier websites.",
    icon: SiNextdotjs,
  },
  {
    title: "SEO Optimized",
    description: "Rank higher on search engines with built-in SEO.",
    icon: FaSearch,
  },
  {
    title: "Automation Solutions",
    description: "Streamline operations with cutting-edge AI and workflows.",
    icon: FaRobot,
  },
  {
    title: "Scalability",
    description: "Websites and APIs ready to grow with your business.",
    icon: FaExpandAlt,
  },
]

export default function FeaturesHighlightsSection() {
  return (
    <section id="features" className="py-20 bg-background-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What Makes Us Different?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary-light rounded-full mb-4">
                <feature.icon className="text-secondary text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

