import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
   
    <Link
      href="https://wa.me/919847274569" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Whatsapp Button"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
    >
      <FaWhatsapp size={24} />
    </Link>
  )
}

