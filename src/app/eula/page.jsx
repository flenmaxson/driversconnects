// "use client";
import MainLayout from "@/components/MainLaout";
import Script from "next/script";
import React from "react";

export default function EulaPage() {
  return (
    <MainLayout>
      <main className="bg-gray-50 min-h-screen text-gray-900">
      {/* HERO */}
      <header className="bg-gradient-to-b from-sky-800 to-sky-700 text-white pb-16 pt-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            End User License Agreement
          </h1>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <section className="w-full py-10 px-4 md:px-8 lg:px-16 text-gray-800">
  <div className="max-w-6xl mx-auto space-y-6">
    <h1 className="text-3xl font-semibold">
      End User License Agreement (EULA)
    </h1>

    <p>
          This End User License Agreement (“Agreement”) is a legal agreement between you (“User”, “You”) and Billionaire Dream Estate Private Limited (“Company”, “We”, “Us”, “Our”) governing your use of the BDECloud software (“Software”).
    </p>

    <p>
      By installing, accessing, or using the software, you confirm that you
      understand and agree to be bound by these terms. These conditions are
      intended to protect both you and BDECloud.
    </p>

    <h2 className="text-2xl font-semibold">Acceptance of Terms</h2>

    <p>
      Before installing or accessing the BDECloud software, including all
      associated files, updates, media, and documentation (collectively, the
      “Software”), you must accept this Agreement.
    </p>

    <p>
      By clicking “Accept,” installing, or using the Software, you enter into a
      legally binding contract with BDECloud. This Agreement represents the
      complete and exclusive understanding between you and BDECloud regarding
      the Software and replaces any prior agreements or communications.
    </p>

    <p>
      If you do not agree to these terms, do not install, access, or use the
      Software.
    </p>

    <p>
      <strong>Notice:</strong> Once initiated, a system scan may begin
      automatically. You may continue using your computer during the scan, but
      the process cannot be paused or interrupted.
    </p>

    <h2 className="text-2xl font-semibold">1. Intellectual Property Rights</h2>

    <p>
      The Software is protected by applicable copyright, trademark, and
      intellectual property laws. All ownership rights, including title and
      interest, remain exclusively with BDECloud, located at No, 186, Arathi Building, Bangalore, 562125-India.
    </p>

    <p>
      Any third-party components or content made available through the Software
      remain the property of their respective owners. This Agreement does not
      grant you ownership or usage rights to such third-party materials beyond
      what is permitted by law.
    </p>

    <p>
      The Software is licensed, not sold. All rights not expressly granted are
      reserved by BDECloud.
    </p>

    <h2 className="text-2xl font-semibold">
      2. License Grant and Usage Restrictions
    </h2>

    <p>
      Subject to your compliance with this Agreement, BDECloud grants you a
      limited, revocable, non-exclusive, non-transferable license to install and
      use the Software on one device for personal or internal business use.
    </p>

    <p>You may:</p>

    <ul className="list-disc pl-6 space-y-1">
      <li>Install and run one copy of the Software on a single device</li>
      <li>Create one backup copy solely for archival purposes</li>
    </ul>

    <p>You may not:</p>

    <ul className="list-disc pl-6 space-y-1">
      <li>Share, sell, rent, lease, sublicense, or distribute the Software</li>
      <li>Remove or alter copyright or proprietary notices</li>
      <li>
        Reverse engineer, decompile, or disassemble the Software, except where
        explicitly permitted by law
      </li>
    </ul>

    <p>
      All updates, enhancements, or additional components provided by BDECloud
      are governed by this Agreement unless stated otherwise.
    </p>

    <h2 className="text-2xl font-semibold">3. Limited Warranty</h2>

    <p>
      BDECloud warrants that the Software will perform substantially in
      accordance with its documentation for thirty (30) days from the date of
      installation (the “Warranty Period”), provided any defects are reported
      within this period.
    </p>

    <p>
      This warranty does not apply to issues resulting from misuse, accidents,
      unauthorized modifications, or external causes. If a valid warranty claim
      is confirmed, BDECloud may, at its discretion:
    </p>

    <ul className="list-disc pl-6 space-y-1">
      <li>Repair the Software</li>
      <li>Replace the Software</li>
      <li>Refund the purchase price</li>
    </ul>

    <h2 className="text-2xl font-semibold">4. Disclaimer of Warranties</h2>

    <p>
      Except for the limited warranty expressly stated above, the Software is
      provided “as is” and “as available.”
    </p>

    <p>
      BDECloud expressly disclaims all other warranties, whether express,
      implied, or statutory, including but not limited to implied warranties of
      merchantability, fitness for a particular purpose, and non-infringement.
    </p>

    <p>
      BDECloud does not guarantee that the Software will operate without
      interruptions, errors, or security vulnerabilities. You assume all risks
      related to the use and performance of the Software.
    </p>

    <h2 className="text-2xl font-semibold">5. Limitation of Damages</h2>

    <p>
      To the fullest extent permitted by law, BDECloud shall not be liable for
      any indirect, incidental, consequential, special, or punitive damages,
      including loss of profits, business interruption, or data loss, arising
      out of or related to your use of the Software.
    </p>

    <p>
      Some jurisdictions do not allow certain limitations, so parts of this
      section may not apply to you.
    </p>

    <h2 className="text-2xl font-semibold">6. Limitation of Liability</h2>

    <p>
      BDECloud’s total cumulative liability for any claim arising under this
      Agreement shall not exceed the amount you paid for the Software.
    </p>

    <p>
      This limitation applies regardless of the legal theory involved, including
      contract, negligence, strict liability, or otherwise.
    </p>

    <h2 className="text-2xl font-semibold">7. Export Regulations</h2>

    <p>
      You agree to comply with all applicable U.S. export laws and regulations.
      You may not export, re-export, or transfer the Software to any restricted
      country, individual, or entity.
    </p>

    <p>
      You represent that you are not prohibited from receiving the Software
      under applicable export control laws.
    </p>

    <h2 className="text-2xl font-semibold">8. Taxes</h2>

    <p>
      You are responsible for all taxes, duties, or fees related to your
      purchase or use of the Software, excluding taxes imposed on BDECloud’s
      income.
    </p>

    <h2 className="text-2xl font-semibold">9. U.S. Government End Users</h2>

    <p>
      If the Software is acquired by or on behalf of the U.S. Government, it is
      provided with Restricted Rights as defined under applicable federal laws
      and regulations. Use, duplication, or disclosure is subject to those
      restrictions.
    </p>

    <h2 className="text-2xl font-semibold">10. Termination</h2>

    <p>
      This Agreement remains effective until terminated. BDECloud may terminate
      it immediately if you violate any provision.
    </p>

    <p>
      Upon termination, you must discontinue use of the Software and permanently
      delete all copies from your devices.
    </p>

    <h2 className="text-2xl font-semibold">11. Governing Law</h2>

    <p>
      For users located in the United States, this Agreement is governed by the
      laws of the State of California, excluding conflict-of-law principles.
    </p>

    <p>
      For users outside the United States, the laws of Hong Kong shall apply.
    </p>

    <p>
      If any provision is found invalid or unenforceable, the remaining
      provisions will remain in full force. Any amendments must be in writing
      and authorized by BDECloud.
    </p>

    <h2 className="text-2xl font-semibold">12. Dispute Resolution</h2>

    <p>
      Most concerns can be resolved by contacting BDECloud Support. If a
      dispute cannot be resolved informally, the following process applies.
    </p>

    <h3 className="text-xl font-semibold">Claim Notice</h3>

    <p>
      Before initiating formal proceedings, you must provide written notice to
      BDECloud describing the issue, including your contact details and the
      Software involved. Notices should be sent to:
      <br />
      support@bdecloud.live
    </p>

    <h3 className="text-xl font-semibold">Mediation</h3>

    <p>Mediation is voluntary and non-binding.</p>

    <ul className="list-disc pl-6 space-y-1">
      <li>
        U.S. users may request mediation through JAMS or the American Arbitration
        Association (AAA)
      </li>
      <li>
        International users should contact BDECloud for applicable mediation
        options
      </li>
    </ul>

    <h3 className="text-xl font-semibold">Arbitration</h3>

    <p>
      U.S. users may elect to resolve disputes through binding individual
      arbitration instead of court proceedings. Arbitration will be
      confidential, conducted on an individual basis, and governed by the
      Federal Arbitration Act (FAA).
    </p>

    <h3 className="text-xl font-semibold">
      Right to Opt Out of Arbitration
    </h3>

    <p>
      You may opt out of arbitration within 30 days of acquiring the Software by
      sending an email to support@bdecloud.live
      . Your message must include your name, purchase date, and license
      information. Opting out will not affect any other rights under this
      Agreement.
    </p>
  </div>
</section>

    </main>
    </MainLayout>
  );
}
