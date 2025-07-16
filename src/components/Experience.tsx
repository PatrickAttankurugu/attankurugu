'use client'

import { useState, useEffect } from 'react'
import { Building, Trophy, GraduationCap, Rocket, Calendar, MapPin } from 'lucide-react'

export default function Experience() {
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

    const element = document.getElementById('experience')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      type: "current",
      icon: <Building className="h-6 w-6" />,
      title: "Senior AI/ML & Backend Engineer",
      company: "Agregar Technologies",
      period: "Feb 2025 - Present",
      location: "Accra, Ghana",
      description: "Leading the development of AI-driven security-focused products and platforms for identity verification and fraud detection.",
      achievements: [
        "Led AI system for KYC/KYB platform reducing manual review by 85%",
        "Built deepfake detection system achieving 96% accuracy, preventing $2M+ potential losses",
        "Deployed ML pipeline serving multiple clients, promoted to Senior role in 6 months",
        "Enhanced KYC/KYB/KYE compliance processes through AI automation"
      ]
    },
    {
      type: "startup",
      icon: <Rocket className="h-6 w-6" />,
      title: "Chief Executive Officer",
      company: "SEMA Technologies Inc.",
      period: "Dec 2023 - Present",
      location: "Accra, Ghana",
      description: "Leveraging AI and machine learning to foresee and prevent security threats before they occur, ensuring a proactive approach to crime control.",
      achievements: [
        "Developing predictive surveillance solutions for smart city infrastructure",
        "Building AI-powered systems for proactive crime prevention",
        "Leading technology strategy and product development",
        "Focused on community safety through intelligent monitoring"
      ]
    },
    {
      type: "freelance",
      icon: <Trophy className="h-6 w-6" />,
      title: "AI Developer",
      company: "Ghana Digital Centres Limited",
      period: "Nov 2022 - Jul 2024",
      location: "Ghana",
      description: "Developing AI systems that power surveillance cameras and predictive security solutions for proactive crime prevention.",
      achievements: [
        "Built ML surveillance platform for proactive crime prevention",
        "Developed anomaly detection with <200ms latency and 92% accuracy",
        "Implemented real-time processing systems for surveillance cameras",
        "Created intelligent monitoring solutions for community safety"
      ]
    },
    {
      type: "education",
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Bachelor of Science in Computer Science",
      company: "University of Ghana, Legon",
      period: "2018 - 2022",
      location: "Accra, Ghana",
      description: "Specialized in artificial intelligence and machine learning with focus on computer vision and surveillance systems.",
      achievements: [
        "Final Year Project: Crowd monitoring and surveillance using deep neural networks",
        "Strong foundation in software engineering and AI/ML",
        "Academic excellence in computer science fundamentals",
        "Research focus on intelligent surveillance systems"
      ]
    }
  ]

  const previousVentures = [
    {
      title: "Machine Learning Specialist",
      period: "Aug 2024 - Present",
      description: "Developed AI applications for automated background checks and fraud detection at Agregar Technologies",
      outcome: "Implemented ML models for customer onboarding and risk assessment"
    },
    {
      title: "Jim Leech Mastercard Foundation Fellow",
      period: "2023 - 2024",
      description: "Entrepreneurship Fellowship focusing on technology innovation and business development",
      outcome: "Gained valuable insights into scaling technology businesses and leadership"
    },
    {
      title: "KIC AgriTech Challenge Fellow",
      period: "Jun 2023 - Nov 2023",
      description: "Chief Technology Officer for Team PIGCASS at Kosmos Innovation Center Ghana",
      outcome: "Led technical development for agricultural technology solutions"
    },
    {
      title: "Junior Web Developer",
      period: "Jul 2019 - Dec 2019",
      description: "Web development role at DEXT Solutions Consult in East Legon",
      outcome: "Gained foundational experience in web development and client projects"
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'current': return 'bg-primary'
      case 'startup': return 'bg-secondary'
      case 'freelance': return 'bg-green-500'
      case 'education': return 'bg-purple-500'
      default: return 'bg-gray-500'
    }
  }

  const getTypeBorderColor = (type: string) => {
    switch (type) {
      case 'current': return 'border-primary'
      case 'startup': return 'border-secondary'
      case 'freelance': return 'border-green-500'
      case 'education': return 'border-purple-500'
      default: return 'border-gray-500'
    }
  }

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey of innovation, learning, and building revolutionary technology solutions
          </p>
        </div>

        {/* Main Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-300"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 ${getTypeColor(experience.type)} rounded-full flex items-center justify-center text-white z-10`}>
                  {experience.icon}
                </div>

                {/* Experience card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} ml-12 md:ml-0`}>
                  <div className={`bg-white rounded-2xl shadow-lg p-6 border-l-4 ${getTypeBorderColor(experience.type)} hover:shadow-xl transition-shadow`}>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
                        <p className="text-primary font-semibold">{experience.company}</p>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {experience.period}
                        </div>
                        <div className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {experience.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{experience.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Previous Ventures Section */}
        <div className={`mt-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-secondary text-center mb-8">Previous Ventures & Learning Experiences</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {previousVentures.map((venture, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-900">{venture.title}</h4>
                  <span className="text-sm text-gray-500">{venture.period}</span>
                </div>
                <p className="text-gray-700 mb-4">{venture.description}</p>
                <div className="bg-primary/10 rounded-lg p-3">
                  <p className="text-sm text-primary font-medium">Outcome:</p>
                  <p className="text-sm text-gray-700">{venture.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className={`mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Tech Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 left-4 text-xs font-mono text-primary transform rotate-12">
              model.fit(X_train, y_train)
            </div>
            <div className="absolute top-8 right-8 text-xs font-mono text-secondary transform -rotate-12">
              accuracy = 0.96
            </div>
            <div className="absolute bottom-4 left-12 text-xs font-mono text-primary transform rotate-45">
              predictions = model.predict(X_test)
            </div>
            <div className="absolute bottom-8 right-4 text-xs font-mono text-secondary transform -rotate-45">
              loss = 0.04
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-secondary text-center mb-8 relative z-10">Career Highlights</h3>
          <div className="grid md:grid-cols-4 gap-6 relative z-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">96%</div>
              <div className="text-sm text-gray-600">Deepfake Detection Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">85%</div>
              <div className="text-sm text-gray-600">Manual Review Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-gray-600">AI/ML Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">3+</div>
              <div className="text-sm text-gray-600">Years AI/ML Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}