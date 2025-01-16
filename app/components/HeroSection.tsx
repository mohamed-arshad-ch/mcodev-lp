import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Build Your Digital Presence with MCODEV Bytes
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300">
            Modern websites tailored to your business needs with cutting-edge technology.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <Link href="#pricing" className="bg-secondary text-primary px-6 py-3 rounded-full font-semibold hover:bg-secondary-light transition-colors duration-300 animate-fade-in-up animation-delay-600">
              Explore Plans
            </Link>
            <Link href="#contact" className="bg-transparent border-2 border-secondary text-secondary px-6 py-3 rounded-full font-semibold hover:bg-secondary hover:text-primary transition-colors duration-300 animate-fade-in-up animation-delay-600">
              Contact Us
            </Link>
          </div>
          <p className="text-sm md:text-base animate-fade-in-up animation-delay-900">
            Next.js and TailwindCSS for Speed, Design, and SEO.
          </p>
        </div>
      </div>
    </section>
  )
}

