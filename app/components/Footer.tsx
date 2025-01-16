import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-secondary">MCODEV Bytes</h3>
            <p className="text-gray-400">Modern websites tailored to your business needs with cutting-edge technology.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300">Home</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-secondary transition-colors duration-300">About Us</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-secondary transition-colors duration-300">Services</Link></li>
              <li><Link href="#pricing" className="text-gray-400 hover:text-secondary transition-colors duration-300">Pricing</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-secondary transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Contact Us</h4>
            <p className="flex items-center text-gray-600">
                             <FaEnvelope className="mr-2 text-secondary" />
                             mcodevbiz@gmail.com
                           </p>
                           <p className="flex items-center text-gray-600">
                             <FaPhone className="mr-2 text-secondary" />
                             (91) 98472-74569
                           </p>
                           <p className="flex items-center text-gray-600">
                             <FaMapMarkerAlt className="mr-2 text-secondary" />
                             UpHill,Malappuram,676519
                           </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/profile.php?id=61571809799117&mibextid=ZbWKwL" aria-label="Facebook page link" className="text-gray-400 hover:text-secondary transition-colors duration-300">
                <FaFacebook size={24} />
              </Link>
             
              <Link href="https://www.linkedin.com/company/mcodev-bytes"  aria-label="linkedin page link" className="text-gray-400 hover:text-secondary transition-colors duration-300">
                <FaLinkedin size={24} />
              </Link>
              <a href="https://www.instagram.com/mcodev_bytes?igsh=MWh1ZXQ4MmE4OGM3"  aria-label="Instagram page link" className="text-gray-400 hover:text-secondary transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} MCODEV Bytes. All rights reserved.</p>
          <div className="mt-2">
            <Link href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300 mr-4">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

