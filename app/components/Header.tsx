'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'; // Import Image from next/image
import '@fontsource/poppins/400.css'; // Ensure the Poppins font is imported

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Proposals', href: '/initiatives' },
  { name: 'Truthful Testimonies', href: '/success-stories' },
  { name: 'Get Involved', href: '/get-involved' },
  { name: 'FAQs', href: '/faq' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16"> {/* Increased navbar height */}
        <div className="flex justify-between items-center h-full">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png" // Path to your logo image
              alt="Logo"
              className="h-14 w-auto mr-3 object-contain" // Logo height, adjust as needed
              width={56} // Set the width of your logo image
              height={56} // Set the height of your logo image
              style={{ padding: '0', margin: '0' }} // Remove any default padding or margin
            />
          </Link>

          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:text-primary transition-colors duration-300 text-lg font-bold font-poppins" // Added font-bold here
              >
                {item.name}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden focus:outline-none transition-colors duration-300 hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors duration-300 text-lg font-bold font-poppins" // Added font-bold here
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
