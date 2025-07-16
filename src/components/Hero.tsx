'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, MapPin, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import TypewriterEffect from './TypewriterEffect'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])


  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        
        {/* Neural Network Pattern */}
        <div className="absolute top-20 right-20 opacity-20">
          <svg width="200" height="150" viewBox="0 0 200 150">
            {/* Neural Network Nodes */}
            <circle cx="30" cy="30" r="4" fill="#FF6B35" className="animate-pulse" />
            <circle cx="30" cy="75" r="4" fill="#FF6B35" className="animate-pulse" style={{animationDelay: '0.5s'}} />
            <circle cx="30" cy="120" r="4" fill="#FF6B35" className="animate-pulse" style={{animationDelay: '1s'}} />
            
            <circle cx="100" cy="45" r="4" fill="#1B365D" className="animate-pulse" style={{animationDelay: '0.3s'}} />
            <circle cx="100" cy="105" r="4" fill="#1B365D" className="animate-pulse" style={{animationDelay: '0.7s'}} />
            
            <circle cx="170" cy="75" r="4" fill="#FF6B35" className="animate-pulse" style={{animationDelay: '0.2s'}} />
            
            {/* Neural Network Connections */}
            <line x1="30" y1="30" x2="100" y2="45" stroke="#FF6B35" strokeWidth="1" opacity="0.3" />
            <line x1="30" y1="75" x2="100" y2="45" stroke="#FF6B35" strokeWidth="1" opacity="0.3" />
            <line x1="30" y1="120" x2="100" y2="105" stroke="#FF6B35" strokeWidth="1" opacity="0.3" />
            <line x1="100" y1="45" x2="170" y2="75" stroke="#1B365D" strokeWidth="1" opacity="0.3" />
            <line x1="100" y1="105" x2="170" y2="75" stroke="#1B365D" strokeWidth="1" opacity="0.3" />
          </svg>
        </div>
        
        {/* Binary Code Pattern */}
        <div className="absolute bottom-20 left-20 opacity-10 text-primary text-sm font-mono">
          <div className="animate-pulse">01001000 01100101 01101100</div>
          <div className="animate-pulse" style={{animationDelay: '0.5s'}}>01101100 01101111 00100000</div>
          <div className="animate-pulse" style={{animationDelay: '1s'}}>01000001 01001001 00100001</div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Content */}
        <div className={`space-y-6 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
          <div className="space-y-2">
            <p className="text-primary font-medium text-lg">👋 Hello, I'm</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Patrick <span className="gradient-text">Attankurugu</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-secondary">
              <TypewriterEffect 
                texts={[
                  "Senior AI/ML Engineer",
                  "AI Developer & Innovator", 
                  "Co-founder of SEMA Technologies",
                  "LLM Specialist",
                  "Fullstack Developer",
                  "AI Consultant & Entrepreneur"
                ]} 
                speed={100}
              />
            </h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-xl text-gray-600 leading-relaxed">
              <span className="font-semibold text-primary">"Patrick AI Africa"</span> - The African AI Oracle
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Results-driven AI/ML Engineer with 3+ years of professional experience developing 
              <span className="font-semibold text-secondary">Large Language Models, custom AI solutions, and fullstack applications</span> 
              with expertise in advanced AI technologies and entrepreneurial innovation.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 pt-4">
            <div className="flex items-center space-x-3 text-gray-600">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Accra, Ghana (Originally from Upper East Region)</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:attankurugupatrick@gmail.com" className="hover:text-primary transition-colors">
                attankurugupatrick@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Phone className="h-5 w-5 text-primary" />
              <a href="tel:+233545014267" className="hover:text-primary transition-colors">
                +233 54 501 4267
              </a>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Link
              href="/projects"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
            >
              View My Projects
            </Link>
            <Link
              href="/about"
              className="border-2 border-secondary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-white transition-colors text-center"
            >
              Learn More About Me
            </Link>
          </div>
        </div>

        {/* Right side - Profile Image */}
        <div className={`flex justify-center lg:justify-end ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary to-secondary p-2 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white p-4 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-gray-500 relative overflow-hidden">
                  {/* AI/ML Visual Elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg width="40" height="40" viewBox="0 0 40 40">
                          <circle cx="20" cy="20" r="15" fill="none" stroke="#FF6B35" strokeWidth="2" opacity="0.5"/>
                          <circle cx="20" cy="20" r="10" fill="none" stroke="#1B365D" strokeWidth="2" opacity="0.7"/>
                          <circle cx="20" cy="20" r="5" fill="#FF6B35" opacity="0.8"/>
                          <circle cx="20" cy="20" r="2" fill="#1B365D" className="animate-pulse"/>
                        </svg>
                      </div>
                      <p className="text-sm font-semibold">AI/ML Engineer</p>
                      <p className="text-xs text-gray-400">Neural Networks & Deep Learning</p>
                    </div>
                  </div>
                  
                  {/* Floating Code Particles */}
                  <div className="absolute top-4 left-4 text-xs font-mono text-primary/30 animate-pulse">&lt;/&gt;</div>
                  <div className="absolute top-8 right-6 text-xs font-mono text-secondary/30 animate-pulse" style={{animationDelay: '0.5s'}}>AI</div>
                  <div className="absolute bottom-6 left-8 text-xs font-mono text-primary/30 animate-pulse" style={{animationDelay: '1s'}}>ML</div>
                  <div className="absolute bottom-4 right-4 text-xs font-mono text-secondary/30 animate-pulse" style={{animationDelay: '1.5s'}}>{ }</div>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg border-4 border-primary">
              <div className="text-center">
                <div className="text-secondary font-bold text-sm">AI Oracle</div>
                <div className="text-primary text-xs">Africa</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          href="/about"
          className="text-secondary hover:text-primary transition-colors"
        >
          <ChevronDown className="h-8 w-8" />
        </Link>
      </div>
    </section>
  )
}