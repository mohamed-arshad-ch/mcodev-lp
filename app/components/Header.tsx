'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-primary text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-secondary">
          MCODEV Bytes
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/#services" className="text-background hover:text-secondary transition-colors duration-300">Services</Link></li>
            <li><Link href="/#pricing" className="text-background hover:text-secondary transition-colors duration-300">Pricing</Link></li>
            <li><Link href="/#contact" className="text-background hover:text-secondary transition-colors duration-300">Contact</Link></li>
          </ul>
        </nav>
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-primary-light">
          <ul className="flex flex-col items-center py-4">
            <li className="py-2"><Link href="/#services" className="text-background hover:text-secondary transition-colors duration-300" onClick={toggleMenu}>Services</Link></li>
            <li className="py-2"><Link href="/#pricing" className="text-background hover:text-secondary transition-colors duration-300" onClick={toggleMenu}>Pricing</Link></li>
            <li className="py-2"><Link href="/#contact" className="text-background hover:text-secondary transition-colors duration-300" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  )
}

