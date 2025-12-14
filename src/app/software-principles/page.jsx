"use client";
import MainLayout from "@/components/MainLaout";
import React from "react";

export default function SoftwarePrinciplesPage() {
  return (
    <MainLayout>
      <main className="bg-gray-50 min-h-screen text-gray-900">
      {/* HERO SECTION */}
      <header className="bg-gradient-to-b from-sky-800 to-sky-700 text-white pb-16 pt-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Software Principles
          </h1>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <section className="w-full py-10 px-4 md:px-8 lg:px-16 text-gray-800">
  <div className="max-w-6xl mx-auto space-y-6">
    <h1 className="text-3xl font-semibold">Software Principles</h1>

    <p>
      At BDECloud, our software is developed and maintained by Billionaire Dream Estate Private Limited with a strong commitment to transparency, security, performance, and user trust. The following principles define how our software is designed, delivered, and supported.
    </p>

    <p>
      <strong>Effective Date:</strong> December 10, 2023
    </p>

    <h2 className="text-2xl font-semibold">Our Commitment to Users</h2>

    <p>
      Creating dependable software begins with understanding and prioritizing the
      people who use it. For more than seven years, BDECloud has been dedicated to
      providing comprehensive PC driver solutions designed to simplify system
      maintenance and enhance performance.
    </p>

    <p>
      Our goal is to ensure a seamless journey for every user—from the initial
      driver download to ongoing system monitoring, customer support, and
      transparent service policies. Whether you are installing drivers for the
      first time or managing long-term system updates, BDECloud is committed to
      keeping your computer stable, secure, and up to date.
    </p>

    <h2 className="text-2xl font-semibold">Reliable Access to Driver Solutions</h2>

    <p>
      BDECloud delivers fast, secure, and user-friendly access to the latest
      Windows driver updates. Fully registered users receive uninterrupted access
      to all software features, including automated updates, intelligent driver
      detection, and real-time monitoring for connected plug-and-play devices.
    </p>

    <h2 className="text-2xl font-semibold">Core Software Principles</h2>

    <p>
      Below are the foundational principles that guide the development and
      operation of BDECloud software. If you need additional information, our
      support team is available at support@bdecloud.live
      {"\n"}.
    </p>

    <h3 className="text-xl font-semibold">Simple and Complete Uninstallation</h3>

    <p>
      We believe users should always remain in control of their systems. BDECloud
      software can be removed easily without disrupting other system functions.
    </p>

    <ul className="list-disc pl-6 space-y-1">
      <li>
        Uninstallation can be completed through the Windows Start Menu or Control
        Panel
      </li>
      <li>No fees or restrictions apply during removal</li>
      <li>
        Clear, step-by-step uninstall instructions are available online to assist
        users
      </li>
    </ul>

    <h3 className="text-xl font-semibold">Clear and Honest Software Behavior</h3>

    <p>
      Transparency is central to how our software operates. BDECloud clearly
      explains every action it performs and why it is necessary.
    </p>

    <ul className="list-disc pl-6 space-y-1">
      <li>
        The software scans your system solely to identify missing, outdated, or
        incompatible drivers
      </li>
      <li>
        No third-party software is installed without explicit user approval
      </li>
      <li>
        System settings are never modified unless the user authorizes the change
      </li>
      <li>
        Scan results highlight only genuine driver-related issues to avoid
        misleading alerts
      </li>
      <li>
        Software functionality is limited strictly to driver maintenance and
        system optimization
      </li>
    </ul>

    <p>
      Customers with a full license also receive a complimentary guided walkthrough
      for their first driver installation, supported by our dedicated assistance
      line available during checkout.
    </p>

    <h3 className="text-xl font-semibold">
      Responsible Data Collection and Privacy
    </h3>

    <p>
      Protecting user privacy is a core priority. BDECloud does not collect
      personal or identifiable user data from your device.
    </p>

    <p>
      Only essential hardware and software configuration details are collected to
      determine compatible and necessary driver updates.
    </p>

    <p>
      <strong>Purpose of device data collection:</strong>
      <br />
      Hardware and software inventory information allows BDECloud to provide
      accurate driver recommendations and improve update reliability across all
      supported systems. This process helps standardize updates and maintain
      consistent performance without compromising user privacy.
    </p>

    <h3 className="text-xl font-semibold">
      Ethical Partnerships and Industry Compliance
    </h3>

    <p>
      BDECloud values transparency and accountability in all partnerships. We
      collaborate only with organizations that share our commitment to user
      protection, quality assurance, and ethical software practices.
    </p>

    <p>
      Our software has earned recognition and certification from trusted industry
      organizations, including AppEsteem, demonstrating compliance with strict
      consumer protection and software monetization standards.
    </p>
  </div>
</section>

    </main>
    </MainLayout>
  );
}
