'use client'

import { useState, useEffect } from 'react'
import { Code, Brain, Cloud, Smartphone, Globe, Database, Shield, Zap } from 'lucide-react'

export default function Skills() {
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

    const element = document.getElementById('skills')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Programming & Development",
      color: "primary",
      skills: [
        { name: "Python (PyTorch, TensorFlow)", level: 95, primary: true },
        { name: "JavaScript", level: 88 },
        { name: "Node.js & Express", level: 85 },
        { name: "React", level: 87 },
        { name: "FastAPI & Flask", level: 92 },
        { name: "HTML/CSS & Bootstrap", level: 90 }
      ]
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI/ML Frameworks",
      color: "secondary",
      skills: [
        { name: "Large Language Models (LLMs)", level: 95, primary: true },
        { name: "PyTorch", level: 90, primary: true },
        { name: "TensorFlow", level: 88 },
        { name: "OpenAI API", level: 92 },
        { name: "AI Prompt Engineering", level: 90, primary: true },
        { name: "Data Science & Analytics", level: 85 }
      ]
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud & Edge Computing",
      color: "primary",
      skills: [
        { name: "AWS", level: 88, primary: true },
        { name: "Azure", level: 85 },
        { name: "Docker", level: 90 },
        { name: "Git", level: 92 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 }
      ]
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "AI Specializations",
      color: "secondary",
      skills: [
        { name: "Identity Verification", level: 95, primary: true },
        { name: "Fraud Detection", level: 92, primary: true },
        { name: "Deepfake Detection", level: 90 },
        { name: "Document Verification", level: 88 },
        { name: "Real-time Processing", level: 85 },
        { name: "MLOps", level: 82 }
      ]
    }
  ]

  const additionalSkills = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Fullstack Development",
      skills: ["Next.js", "React", "Node.js", "Express", "FastAPI", "Flask"]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data & Analytics",
      skills: ["Data Cleaning", "Predictive Modeling", "Statistical Analysis", "Databricks"]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "AI Solutions",
      skills: ["Chatbots", "Custom AI Solutions", "AI-powered Analytics", "RAG Systems"]
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Business & Strategy",
      skills: ["AI Strategy", "Digital Marketing", "Entrepreneurship", "Tech Leadership"]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      {/* Background AI Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 opacity-5">
          <svg width="300" height="200" viewBox="0 0 300 200">
            {/* Matrix-like pattern */}
            <defs>
              <pattern id="matrix" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <text x="10" y="15" textAnchor="middle" fontSize="10" fill="#FF6B35" className="font-mono">1</text>
              </pattern>
            </defs>
            <rect width="300" height="200" fill="url(#matrix)" opacity="0.3" />
          </svg>
        </div>
        
        <div className="absolute bottom-10 right-10 opacity-5">
          <svg width="250" height="150" viewBox="0 0 250 150">
            {/* Algorithm flowchart */}
            <rect x="50" y="20" width="60" height="30" fill="none" stroke="#1B365D" strokeWidth="2" />
            <text x="80" y="40" textAnchor="middle" fontSize="8" fill="#1B365D" className="font-mono">INPUT</text>
            <rect x="50" y="70" width="60" height="30" fill="none" stroke="#FF6B35" strokeWidth="2" />
            <text x="80" y="90" textAnchor="middle" fontSize="8" fill="#FF6B35" className="font-mono">MODEL</text>
            <rect x="50" y="120" width="60" height="30" fill="none" stroke="#1B365D" strokeWidth="2" />
            <text x="80" y="140" textAnchor="middle" fontSize="8" fill="#1B365D" className="font-mono">OUTPUT</text>
            <line x1="80" y1="50" x2="80" y2="70" stroke="#FF6B35" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <line x1="80" y1="100" x2="80" y2="120" stroke="#1B365D" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#FF6B35" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive skill set spanning AI/ML, edge computing, and full-stack development
          </p>
        </div>

        {/* Main Skill Categories with Progress Bars */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`bg-gradient-to-br ${category.color === 'primary' ? 'from-primary/5 to-primary/10' : 'from-secondary/5 to-secondary/10'} rounded-2xl p-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 ${category.color === 'primary' ? 'bg-primary' : 'bg-secondary'} rounded-lg flex items-center justify-center text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`font-medium ${skill.primary ? 'text-gray-900' : 'text-gray-700'} ${skill.primary ? 'text-base' : 'text-sm'}`}>
                        {skill.name}
                        {skill.primary && <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-1 rounded">Primary</span>}
                      </span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${category.color === 'primary' ? 'bg-primary' : 'bg-secondary'}`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${categoryIndex * 100 + skillIndex * 50}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {additionalSkills.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <div className="text-primary">
                    {category.icon}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                    <span className="text-sm text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Recognition */}
        <div className={`mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-secondary text-center mb-8">Certifications & Recognition</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Fine-tuning LLMs</h4>
              <p className="text-gray-600 text-sm">Professional Certification (2023)</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Multi AI Agent Systems</h4>
              <p className="text-gray-600 text-sm">crewAI Advanced Certification (2024)</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Harvard Leadership</h4>
              <p className="text-gray-600 text-sm">Aspire Leaders Program (2024)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}