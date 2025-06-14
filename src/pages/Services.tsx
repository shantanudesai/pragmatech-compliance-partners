
import Navbar from "@/components/Navbar";
import { Check, Shield } from "lucide-react";
import { useEffect } from "react";

const services = [
  {
    anchor: "iso-27001",
    title: "ISO 27001 Compliance",
    description: (
      <>
        Comprehensive guidance to achieve and maintain the world's leading information security standard.
        <ul className="mt-6 flex flex-col gap-3 text-gray-700">
          <li className="flex items-start gap-3"><div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5"><Check className="text-green-600" size={12} /></div>Gap assessment and risk analysis</li>
          <li className="flex items-start gap-3"><div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5"><Check className="text-green-600" size={12} /></div>Information Security Management System (ISMS) documentation & controls</li>
          <li className="flex items-start gap-3"><div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5"><Check className="text-green-600" size={12} /></div>Policy development, process improvements, staff training</li>
          <li className="flex items-start gap-3"><div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5"><Check className="text-green-600" size={12} /></div>Support for internal/external audit readiness</li>
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
        <ul className="mt-6 flex flex-col gap-3 text-gray-700">
          <li className="flex items-start gap-3"><div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5"><Check className="text-green-600" size={12} /></div>PIMS planning, data mapping, and privacy risk assessment</li>
          <li className="flex items-start gap-3"><div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5"><Check className="text-green-600" size={12} /></div>Alignment with GDPR and international frameworks</li>
          <li className="flex items-start gap-3"><div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5"><Check className="text-green-600" size={12} /></div>Policy and notice drafting</li>
          <li className="flex items-start gap-3"><div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5"><Check className="text-green-600" size={12} /></div>Privacy framework compliance</li>
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
        <ul className="mt-6 flex flex-col gap-3 text-gray-700">
          <li className="flex items-start gap-3"><div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5"><Check className="text-green-600" size={12} /></div>GDPR readiness assessment and data mapping</li>
          <li className="flex items-start gap-3"><div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5"><Check className="text-green-600" size={12} /></div>Policy, procedure, consent & DSR handling frameworks</li>
          <li className="flex items-start gap-3"><div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5"><Check className="text-green-600" size={12} /></div>Privacy staff training</li>
          <li className="flex items-start gap-3"><div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5"><Check className="text-green-600" size={12} /></div>Ongoing compliance monitoring</li>
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
        <ul className="mt-6 flex flex-col gap-3 text-gray-700">
          <li className="flex items-start gap-3"><div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5"><Check className="text-green-600" size={12} /></div>SOC 2 gap assessment and roadmap planning</li>
          <li className="flex items-start gap-3"><div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5"><Check className="text-green-600" size={12} /></div>Controls documentation and implementation</li>
          <li className="flex items-start gap-3"><div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5"><Check className="text-green-600" size={12} /></div>Evidence gathering and system description</li>
          <li className="flex items-start gap-3"><div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5"><Check className="text-green-600" size={12} /></div>End-to-end audit preparation & support</li>
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
        <ul className="mt-6 flex flex-col gap-3 text-gray-700">
          <li className="flex items-start gap-3"><div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5"><Check className="text-green-600" size={12} /></div>AI risk, bias, and impact assessments</li>
          <li className="flex items-start gap-3"><div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5"><Check className="text-green-600" size={12} /></div>Ethical policy and governance framework</li>
          <li className="flex items-start gap-3"><div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5"><Check className="text-green-600" size={12} /></div>Model monitoring and mitigation strategy</li>
          <li className="flex items-start gap-3"><div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5"><Check className="text-green-600" size={12} /></div>Documentation for ISO 42001 audit readiness</li>
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
        <ul className="mt-6 flex flex-col gap-3 text-gray-700">
          <li className="flex items-start gap-3"><div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5"><Shield className="text-blue-600" size={12} /></div>DPDP compliance gap assessment</li>
          <li className="flex items-start gap-3"><div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5"><Shield className="text-blue-600" size={12} /></div>Data protection impact assessment</li>
          <li className="flex items-start gap-3"><div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5"><Shield className="text-blue-600" size={12} /></div>Consent management processes</li>
          <li className="flex items-start gap-3"><div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5"><Shield className="text-blue-600" size={12} /></div>Data subject rights implementation</li>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Compliance Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet your organization's specific compliance requirements
            </p>
          </div>
          
          <div className="space-y-12">
            {services.map((s) => (
              <section
                key={s.anchor}
                id={s.anchor}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 hover:shadow-2xl transition-all duration-300"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{s.title}</h2>
                <div className="text-gray-700 text-lg leading-relaxed">{s.description}</div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
