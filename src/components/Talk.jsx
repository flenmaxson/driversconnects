"use client";
function Talk() {
  const openChat = () => {
    if (typeof window !== "undefined" && window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };
  return (
    <section id="talk" className="bg-gradient-to-b from-white via-sky-50 to-sky-100">
      <div className="container py-16 md:py-20">
        <div className="flex gap-8 justify-center items-center">
          <div className="flex flex-col max-w-2xl text-center justify-center items-center gap-6">
            <h2 className="text-2xl md:text-4xl font-semibold text-[#04121d]">
              Need help? {" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Talk to our team today!
          </span>
            </h2>
            <button
              onClick={openChat}
              className="mt-6 px-8 py-4 inline-block bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer text-white font-bold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            >
              Get Started
            </button>
          </div>
          {/* <div className="rounded-xl border bg-white p-6">
            <div className="font-semibold">Contact</div>
            <p className="mt-2 text-gray-700">
              Email: support@easyclicksdriver.com
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Talk;
