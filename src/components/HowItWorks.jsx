"use client"
import { Download, Search, Rocket } from 'lucide-react'
import { useState } from 'react'

export default function HowItWorks() {
  const [hoveredStep, setHoveredStep] = useState(null)

  const steps = [
    {
      icon: Download,
      title: "Install in Seconds",
      desc: "One-click setup, no complicated configuration needed",
      gradient: "from-cyan-500 to-blue-600",
      stats: "30 sec"
    },
    {
      icon: Search,
      title: "Automated Scanning",
      desc: "AI detects outdated drivers and system issues instantly",
      gradient: "from-blue-500 to-purple-600",
      stats: "2000+ drivers"
    },
    {
      icon: Rocket,
      title: "Boost Performance",
      desc: "Watch your system speed improve with automatic optimization",
      gradient: "from-purple-500 to-pink-600",
      stats: "3x faster"
    }
  ]

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f0f9ff_0%,transparent_100%)] opacity-50"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold border border-blue-100">
              Simple Process
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            3 Steps to Peak Performance
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From download to optimization in under 3 minutes
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-200 via-blue-200 to-pink-200"></div>

          {steps.map((step, i) => (
            <div 
              key={i}
              className={`relative flex items-center mb-16 last:mb-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              onMouseEnter={() => setHoveredStep(i)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              {/* Timeline dot */}
              <div className={`absolute left-8 md:left-1/2 -ml-3 w-6 h-6 rounded-full border-4 border-white transition-all duration-300 ${
                hoveredStep === i 
                  ? `bg-gradient-to-r ${step.gradient} shadow-lg scale-125`
                  : 'bg-gray-300'
              }`}></div>

              {/* Content Card */}
              <div className={`w-full md:w-[calc(50%-3rem)] ml-20 md:ml-0 ${
                i % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
              }`}>
                <div className={`group relative bg-white border-2 rounded-3xl p-8 transition-all duration-300 ${
                  hoveredStep === i
                    ? 'border-blue-500 shadow-2xl shadow-blue-500/20 -translate-y-2'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-lg'
                }`}>
                  
                  {/* Gradient overlay on hover */}
                  {hoveredStep === i && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-5 rounded-3xl`}></div>
                  )}

                  <div className="relative">
                    {/* Icon & Number */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        hoveredStep === i
                          ? `bg-gradient-to-br ${step.gradient} shadow-lg`
                          : 'bg-gray-100'
                      }`}>
                        <step.icon className={`w-8 h-8 transition-colors ${
                          hoveredStep === i ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                      <div className={`text-6xl font-black transition-colors ${
                        hoveredStep === i
                          ? `text-transparent bg-clip-text bg-gradient-to-r ${step.gradient}`
                          : 'text-gray-100'
                      }`}>
                        0{i + 1}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {step.desc}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500 font-medium">Processing time</span>
                      <span className={`text-lg font-bold transition-colors ${
                        hoveredStep === i
                          ? `text-transparent bg-clip-text bg-gradient-to-r ${step.gradient}`
                          : 'text-gray-900'
                      }`}>
                        {step.stats}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white text-lg font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30">
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative flex items-center justify-center gap-2">
              Start Free Trial
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
          <p className="text-sm text-gray-500 mt-4">No credit card required • Cancel anytime</p>
        </div>
      </div>
    </section>
  )
}