'use client'

import { Heart, Code, MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Bio */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary">Patrick</span>
              <span className="text-white">AI</span>
            </div>
            <p className="text-gray-300 mb-4">
              AI Developer, Innovator, and Entrepreneur specializing in Large Language Models, 
              identity verification, and AI-powered solutions. Committed to creating impactful AI 
              that makes communities smarter and safer.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="h-4 w-4" />
              <span>Accra, Ghana</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-primary transition-colors">About</a></li>
              <li><a href="/projects" className="text-gray-300 hover:text-primary transition-colors">Projects</a></li>
              <li><a href="/skills" className="text-gray-300 hover:text-primary transition-colors">Skills</a></li>
              <li><a href="/experience" className="text-gray-300 hover:text-primary transition-colors">Experience</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-primary transition-colors">Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <a 
                  href="mailto:attankurugupatrick@gmail.com" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  attankurugupatrick@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <a 
                  href="tel:+233545014267" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  +233 54 501 4267
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-300">
            <span>© {currentYear} Patrick Attankurugu. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and</span>
            <Code className="h-4 w-4 text-primary" />
            <span>in Ghana</span>
          </div>
          
          <div className="mt-4 md:mt-0 text-sm text-gray-400">
            <span>Building impactful AI solutions for Africa and beyond</span>
          </div>
        </div>
      </div>
    </footer>
  )
}