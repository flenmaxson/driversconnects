"use client";

function Hero() {
  const openChat = () => {
    if (typeof window !== "undefined" && window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };

  return (
    <section className="relative bg-gray-950 px-6 sm:px-10 py-20 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Neon Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-[128px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[128px]"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center space-y-8 my-20">

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
            <span className="">Update or Roll Back Drivers </span>
            <span className=" text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Quickly and Safely
            </span>
          </h1>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={openChat}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2 cursor-pointer">
                Buy Now
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button
              onClick={openChat}
              className="px-8 py-4 border cursor-pointer border-gray-700 text-white font-bold rounded-lg hover:bg-gray-900 hover:border-gray-600 transition-all"
            >
              See How It Works
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: '✅', title: 'Easy To Use', desc: 'Quickly and Easily', color: 'cyan' },
            { icon: '⚡', title: 'Lightning Fast', desc: 'Instant performance boost', color: 'blue' },
            { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade protection', color: 'purple' }
          ].map((feature, i) => (
            <div key={i} className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all">
              <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              <div className="relative">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Product Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10"></div>
          <img
            src="/softwareimg.png"
            alt="Dashboard"
            className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl border border-gray-800"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;