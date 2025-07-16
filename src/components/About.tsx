'use client'

import { useState, useEffect } from 'react'
import { Target, Zap, Globe, TrendingUp, Brain, Shield } from 'lucide-react'

export default function About() {
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

    const element = document.getElementById('about')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const values = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Innovation Leadership",
      description: "Pioneering AI solutions for African challenges"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Data-Driven Insights",
      description: "Evidence-based predictions and analysis"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Ethical AI",
      description: "Privacy-first, bias-aware technology development"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "African Pride",
      description: "Celebrating African innovation while acknowledging challenges"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About <span className="gradient-text">Patrick AI Africa</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The African AI Oracle making bold predictions about Africa's AI future while building revolutionary technology solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Personal Story */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-secondary">My Journey</h3>
              <p className="text-gray-700 leading-relaxed">
                Originally from the Upper East Region of Ghana, I've built a career as a Senior AI/ML Engineer, 
                <span className="font-semibold text-primary">AI Developer, Innovator, and Entrepreneur</span> specializing in 
                identity verification, fraud detection, and surveillance applications. My mission is to leverage advanced AI technologies 
                to make communities smarter and safer.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Currently serving as Senior AI/ML & Backend Engineer at Agregar Technologies, where I lead the development of 
                AI-driven security solutions including KYC/KYB platforms and deepfake detection systems. As Co-founder of 
                SEMA Technologies, I'm building a predictive surveillance platform for proactive crime prevention, rooted in 
                <span className="font-semibold text-secondary">deep technological understanding and entrepreneurial innovation</span>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My vision extends beyond technology - I'm building toward <span className="font-semibold text-secondary">billionaire status by 2035</span> 
                through scalable technology businesses that solve real African problems while positioning Africa as a global leader in AI innovation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-primary/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">$157B</div>
                <div className="text-sm text-gray-600">Predictive Policing Market by 2034</div>
              </div>
              <div className="bg-secondary/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-secondary">$169.5M</div>
                <div className="text-sm text-gray-600">SEMA Revenue Projection (Year 6)</div>
              </div>
            </div>
          </div>

          {/* Professional Highlights */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-secondary">Professional Highlights</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-900">Current Roles</h4>
                <p className="text-gray-700">Senior AI/ML & Backend Engineer at Agregar Technologies</p>
                <p className="text-gray-700">CEO of SEMA Technologies</p>
                <p className="text-gray-700">Former AI Developer at Ghana Digital Centres Limited</p>
              </div>
              
              <div className="border-l-4 border-secondary pl-4">
                <h4 className="font-semibold text-gray-900">Recognition & Fellowships</h4>
                <p className="text-gray-700">Google for Startups Award ($2,000 cloud credits)</p>
                <p className="text-gray-700">Jim Leech Mastercard Foundation Entrepreneurship Fellowship</p>
                <p className="text-gray-700">Ghana Digital Centres Limited Incubation</p>
                <p className="text-gray-700">Ministerial Training at RELITE Africa</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-900">Education & Research</h4>
                <p className="text-gray-700">BSc Computer Science, University of Ghana (2018-2022)</p>
                <p className="text-gray-700">Research: Crowd monitoring and surveillance using deep neural networks</p>
                <p className="text-gray-700">Harvard Leadership Development, Queen's University Entrepreneurship</p>
                <p className="text-gray-700">Continuous Learning: Currently exploring Databricks and advanced AI technologies</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-secondary text-center mb-12">Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">
                    {value.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Philosophy */}
        <div className={`mt-16 bg-gradient-to-r from-secondary/5 to-primary/5 rounded-2xl p-8 text-center relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Innovation Pattern */}
          <div className="absolute top-4 left-4 opacity-10">
            <svg width="80" height="60" viewBox="0 0 80 60">
              <circle cx="20" cy="20" r="3" fill="#1B365D" className="animate-pulse" />
              <circle cx="60" cy="20" r="3" fill="#FF6B35" className="animate-pulse" style={{animationDelay: '0.3s'}} />
              <circle cx="40" cy="40" r="3" fill="#1B365D" className="animate-pulse" style={{animationDelay: '0.6s'}} />
              <line x1="20" y1="20" x2="60" y2="20" stroke="#FF6B35" strokeWidth="1" opacity="0.3" />
              <line x1="20" y1="20" x2="40" y2="40" stroke="#1B365D" strokeWidth="1" opacity="0.3" />
              <line x1="60" y1="20" x2="40" y2="40" stroke="#FF6B35" strokeWidth="1" opacity="0.3" />
            </svg>
          </div>
          
          <Brain className="h-12 w-12 text-secondary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-primary mb-4">Philosophy & Approach</h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-6">
            "Committed to creating impactful AI solutions, rooted in deep technological understanding and entrepreneurial innovation."
          </p>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            My multidisciplinary background in technology, entrepreneurship, and ministry drives me to solve complex challenges 
            through innovative AI solutions that make a meaningful difference in people's lives.
          </p>
        </div>
        
        {/* Vision Statement */}
        <div className={`mt-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 text-center relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* AI Brain Visualization */}
          <div className="absolute top-4 right-4 opacity-10">
            <svg width="100" height="80" viewBox="0 0 100 80">
              <path d="M20 40 Q30 20 50 40 Q70 60 80 40" fill="none" stroke="#FF6B35" strokeWidth="2" className="animate-pulse" />
              <path d="M20 40 Q30 60 50 40 Q70 20 80 40" fill="none" stroke="#1B365D" strokeWidth="2" className="animate-pulse" style={{animationDelay: '0.5s'}} />
              <circle cx="20" cy="40" r="3" fill="#FF6B35" className="animate-pulse" />
              <circle cx="50" cy="40" r="3" fill="#1B365D" className="animate-pulse" style={{animationDelay: '0.3s'}} />
              <circle cx="80" cy="40" r="3" fill="#FF6B35" className="animate-pulse" style={{animationDelay: '0.7s'}} />
            </svg>
          </div>
          
          {/* Code Snippet */}
          <div className="absolute bottom-4 left-4 text-xs font-mono text-secondary/20">
            <div>def predict_future():</div>
            <div className="ml-4">return "AI_Revolution"</div>
          </div>
          
          <Target className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-secondary mb-4">2035 Vision</h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            To achieve billionaire status through technology entrepreneurship while positioning Africa as a global leader in AI innovation. 
            My mission is to build sustainable, autonomous businesses that scale globally and create lasting impact across the continent.
          </p>
        </div>
      </div>
    </section>
  )
}