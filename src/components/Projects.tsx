'use client'

import { useState, useEffect } from 'react'
import { Eye, Shield, Zap, Target, TrendingUp, Award, ExternalLink, Github, Brain, Globe } from 'lucide-react'

export default function Projects() {
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

    const element = document.getElementById('projects')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Predictive Security",
      description: "ML surveillance platform for proactive crime prevention"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-time Processing",
      description: "Anomaly detection with <200ms latency and 92% accuracy"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Smart Surveillance",
      description: "AI systems powering surveillance cameras for community safety"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Predictive Capabilities",
      description: "30-120 second crime prediction lead time"
    }
  ]

  const techStack = [
    "Python (PyTorch, TensorFlow)",
    "Computer Vision (OpenCV)",
    "Deep Learning",
    "Real-time Processing",
    "Anomaly Detection",
    "ML Surveillance",
    "Predictive Analytics",
    "AI-Powered Monitoring"
  ]

  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Google for Startups Award",
      value: "$2,000 cloud credits"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Target Accuracy",
      value: ">95% detection rate"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "False Positives",
      value: "<2% error rate"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="gradient-text">Project</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionary AI-powered surveillance platform that predicts crimes before they happen
          </p>
        </div>

        {/* SEMA Technologies Main Project */}
        <div className={`bg-white rounded-3xl shadow-xl overflow-hidden mb-12 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
          <div className="grid lg:grid-cols-2">
            {/* Left side - Project Details */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">SEMA Technologies</h3>
                  <p className="text-primary font-medium">Proactive Crime Detection System</p>
                </div>
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed">
                Leveraging AI and machine learning to foresee and prevent security threats before they occur, 
                ensuring a proactive approach to crime control. Building intelligent surveillance systems 
                that make communities smarter and safer through predictive analytics.
              </p>

              {/* Key Features */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="text-primary">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Code Preview */}
              <div className="bg-gray-900 rounded-lg p-4 mb-6 text-green-400 font-mono text-sm overflow-hidden">
                <div className="flex items-center mb-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="ml-4 text-gray-400">crime_detection.py</span>
                </div>
                <div className="space-y-1 text-xs">
                  <div><span className="text-blue-400">import</span> torch</div>
                  <div><span className="text-blue-400">import</span> cv2</div>
                  <div><span className="text-purple-400">def</span> <span className="text-yellow-400">predict_crime</span>(video_stream):</div>
                  <div className="ml-4">model = <span className="text-green-400">load_model</span>()</div>
                  <div className="ml-4"><span className="text-blue-400">return</span> model.predict(video_stream)</div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex items-center justify-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  <ExternalLink className="h-4 w-4" />
                  <span>View Project</span>
                </button>
                <button className="flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  <Github className="h-4 w-4" />
                  <span>Source Code</span>
                </button>
              </div>
            </div>

            {/* Right side - Technical Stack & Achievements */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 lg:p-12 relative overflow-hidden">
              {/* Neural Network Animation */}
              <div className="absolute top-4 right-4 opacity-20">
                <svg width="120" height="80" viewBox="0 0 120 80">
                  <circle cx="20" cy="20" r="3" fill="#FF6B35" className="animate-pulse" />
                  <circle cx="20" cy="40" r="3" fill="#FF6B35" className="animate-pulse" style={{animationDelay: '0.2s'}} />
                  <circle cx="20" cy="60" r="3" fill="#FF6B35" className="animate-pulse" style={{animationDelay: '0.4s'}} />
                  
                  <circle cx="60" cy="30" r="3" fill="#1B365D" className="animate-pulse" style={{animationDelay: '0.6s'}} />
                  <circle cx="60" cy="50" r="3" fill="#1B365D" className="animate-pulse" style={{animationDelay: '0.8s'}} />
                  
                  <circle cx="100" cy="40" r="3" fill="#FF6B35" className="animate-pulse" style={{animationDelay: '1s'}} />
                  
                  <line x1="20" y1="20" x2="60" y2="30" stroke="#FF6B35" strokeWidth="1" opacity="0.5" />
                  <line x1="20" y1="40" x2="60" y2="30" stroke="#FF6B35" strokeWidth="1" opacity="0.5" />
                  <line x1="20" y1="60" x2="60" y2="50" stroke="#FF6B35" strokeWidth="1" opacity="0.5" />
                  <line x1="60" y1="30" x2="100" y2="40" stroke="#1B365D" strokeWidth="1" opacity="0.5" />
                  <line x1="60" y1="50" x2="100" y2="40" stroke="#1B365D" strokeWidth="1" opacity="0.5" />
                </svg>
              </div>
              
              <div className="space-y-8 relative z-10">
                {/* Technical Stack */}
                <div>
                  <h4 className="text-lg font-bold text-secondary mb-4">Technical Stack</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {techStack.map((tech, index) => (
                      <div key={index} className="bg-white/50 rounded-lg px-3 py-2 text-sm text-gray-700 backdrop-blur-sm">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-lg font-bold text-secondary mb-4">Key Achievements</h4>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                          <div className="text-primary">
                            {achievement.icon}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{achievement.title}</div>
                          <div className="text-primary text-sm">{achievement.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Market Impact */}
                <div>
                  <h4 className="text-lg font-bold text-secondary mb-4">Market Impact</h4>
                  <div className="space-y-3">
                    <div className="bg-white/50 rounded-lg p-3 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-primary">$157B</div>
                      <div className="text-sm text-gray-600">Predictive policing market by 2034</div>
                    </div>
                    <div className="bg-white/50 rounded-lg p-3 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-secondary">$169.5M</div>
                      <div className="text-sm text-gray-600">Revenue projection (Year 6)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">KYC/KYB AI Platform</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Led AI system development reducing manual review by 85% at Agregar Technologies. 
              Built fraud detection and identity verification solutions for fintech security.
            </p>
            <div className="flex items-center text-primary font-medium text-sm">
              <span>Identity Verification</span>
              <ExternalLink className="h-4 w-4 ml-1" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Deepfake Detection</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Built state-of-the-art deepfake detection system achieving 96% accuracy, 
              preventing $2M+ potential losses for financial institutions.
            </p>
            <div className="flex items-center text-primary font-medium text-sm">
              <span>Fraud Prevention</span>
              <ExternalLink className="h-4 w-4 ml-1" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Agentic AI Tutor</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Intelligent chatbot system providing personalized learning experiences 
              using advanced LLM technologies and natural language processing.
            </p>
            <div className="flex items-center text-primary font-medium text-sm">
              <span>Educational AI</span>
              <ExternalLink className="h-4 w-4 ml-1" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">COVID-19 Analytics</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Comprehensive analytics dashboard providing real-time insights and 
              data visualization for COVID-19 trends and statistics.
            </p>
            <div className="flex items-center text-primary font-medium text-sm">
              <span>Data Analytics</span>
              <ExternalLink className="h-4 w-4 ml-1" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Agentic RAG System</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Advanced Retrieval-Augmented Generation system using LlamaIndex 
              for intelligent document processing and question answering.
            </p>
            <div className="flex items-center text-primary font-medium text-sm">
              <span>RAG & LLMs</span>
              <ExternalLink className="h-4 w-4 ml-1" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Web Development</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Multiple website developments using modern technologies including 
              React, Node.js, and responsive design principles.
            </p>
            <div className="flex items-center text-primary font-medium text-sm">
              <span>Fullstack Development</span>
              <ExternalLink className="h-4 w-4 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}