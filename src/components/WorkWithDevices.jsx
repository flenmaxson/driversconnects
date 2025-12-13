function WorkWithDevices() {
  return (
    <section id="solution" className="bg-gradient-to-b from-white via-sky-50 to-sky-100">
  <div className="container py-20 md:px-20">
    
    <h2 className="text-2xl md:text-4xl font-extrabold text-center text-[#04121d] leading-snug">
          Seamless Works for All Your Devices with{" "}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            BDE Cloud
          </span>
        </h2>
    <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
      BDE Cloud helps keep your PC up to date with smart driver updates, performance optimization, and reliable system maintenance for a smoother experience.
    </p>

    <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10 md:px-0">
      {[
  {
    icon: '🌐',
    title: 'Smart Network',
  },
  {
    icon: '🖥️',
    title: 'Display & Monitor',
  },
  {
    icon: '🖨️',
    title: 'Printing & Scanning',
  },
  {
    icon: '⌨️',
    title: 'Input & Control',
  },
  {
    icon: '📶',
    title: 'Bluetooth',
  },
  {
    icon: '📡',
    title: 'Wi-Fi & Connectivity',
  },
  {
    icon: '🎥',
    title: 'Cameras & Webcams',
  },
  {
    icon: '🎧',
    title: 'Audio & Sound',
  }
]

.map(({ icon, title, items }) => (
        <div
          key={title}
          className="rounded-2xl border-2 border-gray-200 bg-white p-6 hover:shadow-xl hover:border-brand-600 transition-all duration-300 group"
        >
          <div className="text-4xl mb-4">{icon}</div>
          <div className="font-semibold text-lg text-gray-800 group-hover:text-brand-600 transition-colors duration-300">
            {title}
          </div>
          {/* <p className="mt-2 text-gray-600 text-sm leading-relaxed">{items}</p> */}
        </div>
      ))}
    </div>
  </div>
</section>
  )

}

export default WorkWithDevices;