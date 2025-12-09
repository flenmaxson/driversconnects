"use client";

import React from 'react';
import { Check, X } from 'lucide-react';

export default function PricingPackages() {
  const packages = [
    {
      name: 'Personal',
      price: '$29.95',
      duration: '3 PCs for 1 year',
      popular: false,
      features: [
        { text: 'Detect all missing, outdated & mismatched drivers', included: true },
        { text: 'Install the latest driver or any version', included: true },
        { text: 'All drivers certified, and direct from manufacturers', included: true },
        { text: 'Download & install ALL drivers with 1 click', included: true },
        { text: 'Update drivers one-by-one', included: true },
        { text: 'High-speed driver download (500KB/s – 20MB/s)', included: true },
        { text: 'Scan for game dependencies', included: true },
        { text: 'View and export hardware information', included: true },
        { text: 'View driver update history', included: true },
        { text: 'Offline scan & network driver download', included: true },
        { text: 'Backup & restore drivers', included: true },
        { text: 'Uninstall drivers safely', included: true },
        { text: 'Roll back to previous version of drivers', included: true },
        { text: 'Free PC tech help & guide', included: true },
        { text: 'Automatic/Manual update to latest Driver Easy version', included: true },
        { text: 'Commercial use', included: false },
      ]
    },
    {
      name: 'Business',
      price: '$99.50',
      duration: '50 PCs for 3 days each',
      popular: true,
      features: [
        { text: 'Detect all missing, outdated & mismatched drivers', included: true },
        { text: 'Install the latest driver or any version', included: true },
        { text: 'All drivers certified, and direct from manufacturers', included: true },
        { text: 'Download & install ALL drivers with 1 click', included: true },
        { text: 'Update drivers one-by-one', included: true },
        { text: 'High-speed driver download (500KB/s – 20MB/s)', included: true },
        { text: 'Scan for game dependencies', included: true },
        { text: 'View and export hardware information', included: true },
        { text: 'View driver update history', included: true },
        { text: 'Offline scan & network driver download', included: true },
        { text: 'Backup & restore drivers', included: true },
        { text: 'Uninstall drivers safely', included: true },
        { text: 'Roll back to previous version of drivers', included: true },
        { text: 'Free PC tech support', included: true },
        { text: 'Automatic/Manual update to latest Driver Easy version', included: true },
        { text: 'Commercial use', included: true },
      ]
    }
  ];

  const openChat = () => {
    if (typeof window !== "undefined" && window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 via-blue-600 to-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pricing
          </h1>
          <p className="text-xl text-blue-200">
            Choose the perfect plan for your driver management needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-2xl shadow-2xl overflow-hidden transition-transform hover:scale-105 ${
                pkg.popular ? 'ring-4 ring-blue-500' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  POPULAR
                </div>
              )}

              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h2>
                <div className="mb-6">
                  <span className="text-5xl font-extrabold text-gray-900">
                    {pkg.price}
                  </span>
                  <p className="text-gray-600 mt-2">{pkg.duration}</p>
                </div>

                <button 
                onClick={openChat}
                className={`w-full py-3 cursor-pointer px-6 rounded-lg font-semibold text-lg transition-colors ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-gray-800 hover:bg-gray-900 text-white'
                }`}>
                  BUY NOW
                </button>

                <div className="mt-8 space-y-4">
                  {pkg.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${
                        feature.included ? 'text-gray-700' : 'text-gray-400'
                      }`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}