
import Navbar from "@/components/Navbar";
import { Check, Shield } from "lucide-react";
import { useEffect } from "react";

const services = [
  {
    anchor: "iso-27001",
    title: "ISO 27001 Compliance",
    description: (
      <>
        Comprehensive guidance to achieve and maintain the world’s leading information security standard.
        <ul className="mt-2 flex flex-col gap-1 text-gray-700">
          <li className="flex items-start gap-2"><Check className="mt-0.5 text-green-600" size={18} />Gap assessment and risk analysis</li>
          <li className="flex items-start gap-2"><Check className="mt-0.5 text-green-600" size={18} />Information Security Management System (ISMS) documentation & controls</li>
          <li className="flex items-start gap-2"><Check className="mt-0.5 text-green-600" size={18} />Policy development, process improvements, staff training</li>
          <li className="flex items-start gap-2"><Check className="mt-0.5 text-green-600" size={18} />Support for internal/external audit readiness</li>
        </ul>
      </>
    )
  },
  {
    anchor: "iso-27701",
    title: "ISO 27701 Compliance",
    description: (
      <>
        Privacy Information Management System (PIMS) implementation for global privacy standards.
        <ul className="mt-2 flex flex-col gap-1 text-gray-700">
          <li className="flex items-start gap-2"><Check className="text-green-600" size={18} />PIMS planning, data mapping, and privacy risk assessment</li>
          <li className="flex items-start gap-2"><Check className="text-green-600" size={18} />Alignment with GDPR and international frameworks</li>
          <li className="flex items-start gap-2"><Check className="text-green-600" size={18} />Policy and notice drafting</li>
          <li className="flex items-start gap-2"><Check className="text-green-600" size={18} />Privacy framework compliance</li>
        </ul>
      </>
    )
  },
  {
    anchor: "gdpr",
    title: "GDPR Compliance",
    description: (
      <>
        EU data protection compliance from gap assessment to DSR handling.
        <ul className="mt-2 flex flex-col gap-1 text-gray-700">
          <li className="flex items-start gap-2"><Check className="text-green-600" size={18} />GDPR readiness assessment and data mapping</li>
          <li className="flex items-start gap-2"><Check className="text-green-600" size={18} />Policy, procedure, consent & DSR handling frameworks</li>
          <li className="flex items-start gap-2"><Check className="text-green-600" size={18} />Privacy staff training</li>
          <li className="flex items-start gap-2"><Check className="text-green-600" size={18} />Ongoing compliance monitoring</li>
        </ul>
      </>
    )
  },
  {
    anchor: "soc-2",
    title: "SOC 2 Compliance",
    description: (
      <>
        Audit readiness for SOC 2 with a focus on the five trust service criteria.
        <ul className="mt-2 flex flex-col gap-1 text-gray-700">
          <li className="flex items-start gap-2"><Check className="text-green-600" size={18} />SOC 2 gap assessment and roadmap planning</li>
          <li className="flex items-start gap-2"><Check className="text-green-600" size={18} />Controls documentation and implementation</li>
          <li className="flex items-start gap-2"><Check className="text-green-600" size={18} />Evidence gathering and system description</li>
          <li className="flex items-start gap-2"><Check className="text-green-600" size={18} />End-to-end audit preparation & support</li>
        </ul>
      </>
    )
  },
  {
    anchor: "iso-42001",
    title: "ISO 42001 Compliance",
    description: (
      <>
        AI Governance: Building responsible frameworks for ethical and regulated AI.
        <ul className="mt-2 flex flex-col gap-1 text-gray-700">
          <li className="flex items-start gap-2"><Check className="text-green-600" size={18} />AI risk, bias, and impact assessments</li>
          <li className="flex items-start gap-2"><Check className="text-green-600" size={18} />Ethical policy and governance framework</li>
          <li className="flex items-start gap-2"><Check className="text-green-600" size={18} />Model monitoring and mitigation strategy</li>
          <li className="flex items-start gap-2"><Check className="text-green-600" size={18} />Documentation for ISO 42001 audit readiness</li>
        </ul>
      </>
    )
  },
  {
    anchor: "dpdp-act-2023",
    title: "DPDP Act, 2023 Compliance",
    description: (
      <>
        Supports organizations in meeting the requirements of India's Digital Personal Data Protection Act, 2023, including data protection impact assessments, consent management, and data subject rights implementation.
        <ul className="mt-2 flex flex-col gap-1 text-gray-700">
          <li className="flex items-start gap-2"><Shield className="text-green-600" size={18} />DPDP compliance gap assessment</li>
          <li className="flex items-start gap-2"><Shield className="text-green-600" size={18} />Data protection impact assessment</li>
          <li className="flex items-start gap-2"><Shield className="text-green-600" size={18} />Consent management processes</li>
          <li className="flex items-start gap-2"><Shield className="text-green-600" size={18} />Data subject rights implementation</li>
        </ul>
      </>
    )
  },
];

const Services = () => {
  // Scroll to anchor when linked from homepage card
  useEffect(() => {
    if (window.location.hash) {
      const anchor = document.getElementById(window.location.hash.replace('#', ''));
      if (anchor) {
        setTimeout(() => anchor.scrollIntoView({ behavior: "smooth", block: "start" }), 200);
      }
    }
  }, []);
  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <Navbar />
      <main className="pt-28 pb-20 max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-9 text-gray-800 text-center">Our Compliance Services</h1>
        <div className="flex flex-col gap-8">
          {services.map((s) => (
            <section
              key={s.anchor}
              id={s.anchor}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col"
            >
              <h2 className="text-xl font-bold text-[#143066] mb-3">{s.title}</h2>
              <div className="text-gray-700 text-base">{s.description}</div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Services;
