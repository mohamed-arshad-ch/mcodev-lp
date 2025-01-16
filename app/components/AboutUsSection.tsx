import Image from 'next/image'
import { FaReact, FaCode, FaAws } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'

export default function AboutUsSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why MCODEV Bytes?</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              At MCODEV Bytes, we specialize in crafting cutting-edge web solutions using Next.js, TailwindCSS, and innovative business automation techniques. Our expertise allows us to deliver cost-effective, scalable, and modern designs that drive your business forward.
            </p>
            <div className="flex justify-center space-x-8">
              <SiNextdotjs size={48} className="text-black" />
              <SiTailwindcss size={48} className="text-blue-500" />
              <FaAws size={48} className="text-orange-500" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Clients Say:</h3>
              <blockquote className="italic text-gray-600">
                "MCODEV Bytes transformed our online presence. Their expertise in Next.js and TailwindCSS resulted in a lightning-fast, beautiful website that's easy to maintain."
              </blockquote>
              <p className="mt-2 text-gray-800 font-semibold">- Sarah Johnson, CEO of TechInnovate</p>
            </div>
          </div>
          <div className="relative">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Our Development Process</h3>
            <div className="space-y-4">
              {[
                { icon: FaReact, text: "1. Requirements Gathering", color: "text-blue-500" },
                { icon: FaCode, text: "2. Design & Development", color: "text-green-500" },
                { icon: SiNextdotjs, text: "3. Next.js Implementation", color: "text-black" },
                { icon: SiTailwindcss, text: "4. Styling with TailwindCSS", color: "text-blue-400" },
                { icon: FaAws, text: "5. Deployment & Optimization", color: "text-orange-500" },
              ].map((step, index) => (
                <div key={index} className="flex items-center space-x-4 animate-fade-in-left" style={{ animationDelay: `${index * 200}ms` }}>
                  <step.icon size={24} className={`${step.color} flex-shrink-0`} />
                  <span className="text-gray-700">{step.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

