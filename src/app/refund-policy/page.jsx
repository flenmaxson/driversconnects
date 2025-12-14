"use client";
import MainLayout from "@/components/MainLaout";
import React from "react";

export default function RefundPolicyPage() {
  return (
    <MainLayout>
      <main className="bg-gray-50 min-h-screen text-gray-900">
      {/* HERO */}
      <header className="bg-gradient-to-b from-sky-800 to-sky-700 text-white pb-16 pt-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Refund Policy
          </h1>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <section className="w-full py-10 px-4 md:px-8 lg:px-16 text-gray-800">
  <div className="max-w-6xl mx-auto space-y-6">
    <h1 className="text-3xl font-semibold">Refund Policy</h1>

    <p>
      This Refund Policy applies to purchases made for BDECloud (“Software”, “Service”), owned and operated by Billionaire Dream Estate Private Limited (“Company”, “we”, “us”, “our”).
    </p>

    <p>
      By purchasing or subscribing to EasyPrintsNow, you agree to the terms outlined in this Refund Policy.
    </p>

    <h2 className="text-2xl font-semibold">
      Try-Before-You-Buy &amp; Money-Back Guarantee
    </h2>

    <p>
      To help customers make informed purchasing decisions, most BDECloud products
      include a 14-day try-before-you-buy money-back guarantee. Trial versions are
      intentionally limited in functionality to allow evaluation while preventing
      incorrect purchases.
    </p>

    <p>
      Refund requests submitted after the 14-day guarantee period will not be
      eligible, except where explicitly stated in this policy.
    </p>

    <h2 className="text-2xl font-semibold">
      Situations Where Refunds Are Not Available
    </h2>

    <h3 className="text-xl font-semibold">Non-Technical Reasons</h3>

    <p>Refunds will generally not be issued under the following circumstances:</p>

    <ul className="list-disc pl-6 space-y-1">
      <li>
        Failure to review product descriptions, features, or system requirements
        prior to purchase. If the issue is a product mismatch, an exchange may be
        offered provided the price difference does not exceed USD $20.
      </li>
      <li>
        Claims related to unauthorized transactions or credit card fraud. Such
        matters must be resolved directly with the issuing bank or payment provider.
        BDECloud cannot reverse completed transactions but may assist with product
        exchanges. Subscription cancellations are governed by our Terms of Use.
      </li>
      <li>
        Delays in receiving a registration or license code within two hours of
        purchase. Customers are encouraged to contact BDECloud Support for prompt
        assistance.
      </li>
      <li>
        Accidental purchase of an incorrect product followed by purchasing the
        correct product from another provider.
      </li>
      <li>
        Price variations between regions, currencies, resellers, or competing
        companies.
      </li>
      <li>
        Requests for partial refunds on bundled products. If applicable, a full
        refund may be issued only after the correct product is purchased separately.
      </li>
      <li>
        Change of mind or personal preference after completing a purchase.
      </li>
    </ul>

    <h3 className="text-xl font-semibold">Technical Reasons</h3>

    <p>Refund requests may be declined if:</p>

    <ul className="list-disc pl-6 space-y-1">
      <li>
        The customer refuses to cooperate with BDECloud’s technical support team or
        fails to provide necessary information required to diagnose or resolve the
        issue.
      </li>
      <li>
        The product experiences technical issues after the expiration of the 14-day
        money-back guarantee period.
      </li>
    </ul>

    <h2 className="text-2xl font-semibold">
      Situations Where Refunds or Exchanges Are Approved
    </h2>

    <h3 className="text-xl font-semibold">Non-Technical Circumstances</h3>

    <p>
      Refunds, credits, or exchanges may be granted in the following cases:
    </p>

    <ul className="list-disc pl-6 space-y-1">
      <li>
        Accidental purchase of additional services such as Registration Backup
        Service (RBS), Download Insurance Service, or Extended Download Service (EDS)
        without realizing these services can be canceled. BDECloud will assist in
        recovering applicable charges through the payment platform.
      </li>
      <li>
        Purchase of an incorrect product followed by purchasing the correct version
        from BDECloud. The original purchase amount may be refunded.
      </li>
      <li>
        Duplicate purchases or purchase of functionally similar products. One
        product may be exchanged or refunded at BDECloud’s discretion.
      </li>
      <li>
        Failure to receive a registration code combined with no response from BDE
        Cloud Support within 24 hours, and the customer no longer requires the
        product.
      </li>
      <li>
        Purchase of alternative software due to unresolved errors with the original
        product. In such cases, a product exchange or full refund may be provided.
      </li>
    </ul>

    <h3 className="text-xl font-semibold">Technical Issues</h3>

    <p>Refunds may be approved when:</p>

    <ul className="list-disc pl-6 space-y-1">
      <li>
        The purchased software contains critical technical defects, and no effective
        solution is provided within 30 days. Customers who choose not to wait for a
        future fix or upgrade may request a refund.
      </li>
    </ul>

    <h2 className="text-2xl font-semibold">
      Refund Processing and License Deactivation
    </h2>

    <p>Once a refund is approved:</p>

    <ul className="list-disc pl-6 space-y-1">
      <li>
        The associated software license or activation key will be permanently
        deactivated.
      </li>
      <li>
        Any downloaded software must be removed from the customer’s device.
      </li>
      <li>
        Refunds will be credited to the original payment method used at the time of
        purchase, including credit cards, bank accounts, or PayPal.
      </li>
      <li>
        Processing times vary by payment provider but typically range between 48 to
        72 business hours.
      </li>
    </ul>
  </div>
</section>

    </main>
    </MainLayout>
  );
}
