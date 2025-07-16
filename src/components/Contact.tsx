'use client'

import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('contact')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "attankurugupatrick@gmail.com",
      link: "mailto:attankurugupatrick@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+233 54 501 4267",
      link: "tel:+233545014267"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Accra, Ghana",
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: "LinkedIn",
      href: "https://linkedin.com/in/patrickattankurugu400",
      color: "bg-blue-600"
    },
    {
      icon: <Github className="h-6 w-6" />,
      name: "GitHub",
      href: "https://github.com/PatrickAttankurugu",
      color: "bg-gray-800"
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      name: "Twitter",
      href: "https://twitter.com/Pat_Attankurugu",
      color: "bg-blue-400"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your next project or discuss AI opportunities? Let's connect and build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6">Let's Connect</h3>
              
              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <div className="text-primary">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="text-gray-600 hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 ${social.color} rounded-lg flex items-center justify-center text-white hover:opacity-90 transition-opacity`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="mt-8 bg-primary/5 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Current Availability</h4>
                <p className="text-gray-700 text-sm mb-4">
                  I'm currently available for new projects and consulting opportunities. 
                  Response time is typically within 24 hours.
                </p>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-green-600 font-medium">Available for new projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Project inquiry or collaboration"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project or how I can help you..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 relative overflow-hidden">
            {/* AI Brain Network */}
            <div className="absolute top-4 left-4 opacity-10">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <circle cx="15" cy="15" r="2" fill="#FF6B35" className="animate-pulse" />
                <circle cx="45" cy="15" r="2" fill="#1B365D" className="animate-pulse" style={{animationDelay: '0.5s'}} />
                <circle cx="30" cy="30" r="2" fill="#FF6B35" className="animate-pulse" style={{animationDelay: '1s'}} />
                <circle cx="15" cy="45" r="2" fill="#1B365D" className="animate-pulse" style={{animationDelay: '1.5s'}} />
                <circle cx="45" cy="45" r="2" fill="#FF6B35" className="animate-pulse" style={{animationDelay: '2s'}} />
                <line x1="15" y1="15" x2="30" y2="30" stroke="#FF6B35" strokeWidth="1" opacity="0.3" />
                <line x1="45" y1="15" x2="30" y2="30" stroke="#1B365D" strokeWidth="1" opacity="0.3" />
                <line x1="30" y1="30" x2="15" y2="45" stroke="#FF6B35" strokeWidth="1" opacity="0.3" />
                <line x1="30" y1="30" x2="45" y2="45" stroke="#1B365D" strokeWidth="1" opacity="0.3" />
              </svg>
            </div>
            
            <div className="absolute bottom-4 right-4 text-xs font-mono text-secondary/10">
              <div>while(True):</div>
              <div className="ml-4">build_future()</div>
            </div>
            
            <h3 className="text-2xl font-bold text-secondary mb-4 relative z-10">Ready to Build the Future?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto relative z-10">
              Whether you're looking to implement AI solutions, need a professional website, or want to discuss 
              opportunities in the African tech ecosystem, I'm here to help turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a
                href="mailto:attankurugupatrick@gmail.com"
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Start a Project
              </a>
              <a
                href="tel:+233545014267"
                className="border-2 border-secondary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-white transition-colors"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}