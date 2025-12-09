"use client";
import Link from "next/link";
import Image from "next/image";

export default function QuickEasySection() {
  const openChat = () => {
    if (typeof window !== "undefined" && window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };
  return (
    <section
      id="drivers"
      className="relative overflow-hidden border-0 bg-gradient-to-b from-white via-sky-50 to-sky-100 md:px-10 py-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
        {/* === LEFT CONTENT === */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Fix Your Device and{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">See Better Performance.</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Get driver for most PC manufacturers and devices, keeping them secure and enhancing productivity.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={openChat}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-6 py-3 cursor-pointer rounded-lg shadow-md hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all"
            >
              Buy Now
            </button>
            <button
              onClick={openChat}
              className="border border-blue-600 text-cyan-500 font-medium px-6 py-3 rounded-lg hover:bg-sky-50 transition-all"
            >
              Find Out More
            </button>
          </div>
        </div>

        {/* === RIGHT ILLUSTRATION === */}
        <div>
            <img src="/driverupdatestatusimg.png" alt="" />
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
}
