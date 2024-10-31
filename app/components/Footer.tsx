import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">सुधार सेतु</h3>
            <p className="text-sm">Empowering citizens to build a brighter future for our nation</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/initiatives" className="hover:text-primary transition-colors">initiatives</Link></li>
              <li><Link href="/get-involved" className="hover:text-primary transition-colors">Get Involved</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p>Email: info@voicesofchange.org</p>
            <p>Phone: +91 123 456 7890</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2024 सुधार Setu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}