"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "#products" },
    { name: "Support", href: "#support" },
    { name: "Solution", href: "#solution" },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/95 backdrop-blur-lg shadow-lg border-b border-gray-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            className="h-8 w-20 md:h-10 md:w-20 object-contain"
          src="/logo.png" alt="" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item,i) => (
            <Link
              key={i}
              href={item.href}
              className="relative px-4 py-2 text-gray-300 font-medium hover:text-white transition-colors group"
            >
              {item.name}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300 rounded-full"></span>
            </Link>
          ))}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="relative group px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="relative w-6 h-5 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-900/95 backdrop-blur-lg border-t border-gray-800/50 px-6 py-6">
          <nav className="flex flex-col gap-1">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-gray-300 font-medium hover:text-white hover:bg-gray-800/50 rounded-lg transition-all"
                style={{
                  animation: menuOpen
                    ? `slideIn 0.3s ease-out ${index * 0.1}s forwards`
                    : "none",
                  opacity: 0,
                }}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg text-center shadow-lg transition-all"
              style={{
                animation: menuOpen
                  ? `slideIn 0.3s ease-out ${navItems.length * 0.1}s forwards`
                  : "none",
                opacity: 0,
              }}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}