"use client";

function Hero() {
  const openChat = () => {
    if (typeof window !== "undefined" && window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 px-6 sm:px-10 py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Diagonal Lines Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,138,255,.2)_25%,rgba(68,138,255,.2)_50%,transparent_50%,transparent_75%,rgba(68,138,255,.2)_75%,rgba(68,138,255,.2))] bg-[length:60px_60px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 min-h-[80vh]">
          
          {/* Left Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Trusted by 50,000+ Users
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
              <span className="block mb-3">Keep Your Drivers</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
                Up to Date
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Update or roll back drivers quickly and safely. No more crashes, better performance, and complete peace of mind.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button
                onClick={openChat}
                className="group relative px-8 py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_20px_60px_rgba(6,182,212,0.4)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button
                onClick={openChat}
                className="px-8 py-5 border-2 border-gray-600 text-white font-bold rounded-2xl hover:bg-white/5 hover:border-gray-400 transition-all backdrop-blur-sm"
              >
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8 border-t border-gray-800">
              {[
                { value: '2.5K+', label: 'Active Users' },
                { value: '99.9%', label: 'Uptime' },
                { value: '4.9/5', label: 'User Rating' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{stat.value}</div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Product Preview */}
          <div className="flex-1 relative">
            <div className="relative">
              {/* Glowing Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              
              {/* Image Container */}
              <div className="relative bg-gray-900 rounded-3xl p-2 border border-gray-700">
                <img
                  src="/softwareimg.png"
                  alt="Dashboard Preview"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>

              {/* Floating Feature Cards */}
              <div className="absolute -left-6 top-20 bg-gray-900/90 backdrop-blur-md border border-gray-700 rounded-2xl p-4 shadow-2xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-2xl">✓</div>
                  <div>
                    <div className="text-white font-bold">Easy Updates</div>
                    <div className="text-gray-400 text-sm">Always current</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 bottom-20 bg-gray-900/90 backdrop-blur-md border border-gray-700 rounded-2xl p-4 shadow-2xl animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center text-2xl">⚡</div>
                  <div>
                    <div className="text-white font-bold">Lightning Fast</div>
                    <div className="text-gray-400 text-sm">Instant setup</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}

export default Hero;