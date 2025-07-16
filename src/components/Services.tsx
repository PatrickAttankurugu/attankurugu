'use client'

import { useState, useEffect } from 'react'
import { FileText, Globe, Brain, Users, Star, ArrowRight, CheckCircle } from 'lucide-react'

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('services')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "CV & Cover Letter Writing",
      description: "Professional CV and cover letter writing services tailored for tech professionals and job seekers in Africa.",
      features: [
        "ATS-optimized formatting",
        "Industry-specific customization",
        "Compelling personal branding",
        "Multiple format options",
        "Unlimited revisions"
      ],
      pricing: "Starting from $50",
      color: "primary",
      popular: true
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Fullstack Web Development",
      description: "End-to-end web development services using modern technologies including React, Node.js, and AI integration.",
      features: [
        "Fullstack Development (React, Node.js)",
        "AI-powered Web Applications",
        "Responsive & Mobile-first Design",
        "API Development & Integration",
        "Performance Optimization"
      ],
      pricing: "Starting from $500",
      color: "secondary",
      popular: false
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Consulting & Solutions",
      description: "Comprehensive AI/ML consulting services including custom chatbots, analytics, and strategic AI implementation.",
      features: [
        "Chatbots & Custom AI Solutions",
        "AI-powered Analytics",
        "AI Strategy & Consulting",
        "LLM Integration & Fine-tuning",
        "Digital Marketing with AI"
      ],
      pricing: "Custom pricing",
      color: "primary",
      popular: false
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      company: "Tech Startup",
      rating: 5,
      text: "Patrick's CV writing service helped me land my dream job at a top tech company. His understanding of the African tech market is exceptional."
    },
    {
      name: "Michael Osei",
      role: "Business Owner",
      company: "E-commerce Platform",
      rating: 5,
      text: "The website Patrick built for our business is exactly what we needed. Professional, fast, and perfectly optimized for our target market."
    },
    {
      name: "Dr. Fatima Adams",
      role: "Research Director",
      company: "AI Research Institute",
      rating: 5,
      text: "Patrick's AI consulting expertise helped us implement cutting-edge predictive models. His insights into African AI applications are invaluable."
    }
  ]

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We discuss your needs, goals, and requirements"
    },
    {
      step: "2",
      title: "Strategic Planning",
      description: "Custom strategy development based on your specific needs"
    },
    {
      step: "3",
      title: "Implementation",
      description: "Professional execution with regular updates"
    },
    {
      step: "4",
      title: "Delivery & Support",
      description: "Final delivery with ongoing support and revisions"
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Professional <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive services designed to help individuals and businesses succeed in the digital age
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl shadow-lg border-2 ${service.color === 'primary' ? 'border-primary/20' : 'border-secondary/20'} p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Service Icon */}
              <div className={`w-16 h-16 ${service.color === 'primary' ? 'bg-primary' : 'bg-secondary'} rounded-2xl flex items-center justify-center text-white mb-6`}>
                {service.icon}
              </div>

              {/* Service Info */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Pricing */}
              <div className="flex items-center justify-between">
                <div className={`text-2xl font-bold ${service.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                  {service.pricing}
                </div>
                <button className={`${service.color === 'primary' ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90'} text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center`}>
                  Get Started
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className={`mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-secondary text-center mb-12">How I Work</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-secondary text-center mb-12">What Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-primary">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 text-center relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* AI Code Snippet Background */}
          <div className="absolute top-2 right-2 text-xs font-mono text-primary/10 transform rotate-12">
            <div>if client_needs_ai:</div>
            <div className="ml-4">return "Let's build it!"</div>
          </div>
          
          <div className="absolute bottom-2 left-2 text-xs font-mono text-secondary/10 transform -rotate-12">
            <div>def optimize_business():</div>
            <div className="ml-4">return success</div>
          </div>
          
          <h3 className="text-2xl font-bold text-secondary mb-4 relative z-10">Ready to Get Started?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto relative z-10">
            Let's work together to bring your vision to life. Whether you need a professional CV, a stunning website, 
            or AI consulting services, I'm here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Start Your Project
            </button>
            <button className="border-2 border-secondary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-white transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}