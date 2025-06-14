
// Pragmatech Compliance Partners Home Page

import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import { File, FilePlus, FileMinus, Search, Check, ChevronDown, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const serviceData = [
  {
    icon: <File className="text-yellow-700" />,
    title: "ISO 27001 Compliance",
    description: "Guiding organizations to achieve and maintain ISO 27001 certification through risk assessment, policy development, and audit readiness.",
    bullets: [
      "Gap analysis & risk assessment",
      "Policy & procedure development",
      "Employee awareness training",
      "Audit preparation & support",
    ],
    link: "/services#iso-27001"
  },
  {
    icon: <FilePlus className="text-cyan-700" />,
    title: "ISO 27701 Compliance",
    description: "Implementing a Privacy Information Management System (PIMS) for global privacy standards.",
    bullets: [
      "PIMS implementation",
      "Privacy policy drafting",
      "Data mapping & impact assessment",
      "Privacy framework compliance",
    ],
    link: "/services#iso-27701"
  },
  {
    icon: <FileMinus className="text-indigo-700" />,
    title: "GDPR Compliance",
    description: "Support for meeting EU data protection requirements—gap analysis, policies, DSRs & staff training.",
    bullets: [
      "GDPR gap assessments",
      "DSR & consent management",
      "Staff privacy awareness",
      "Documentation & policy development"
    ],
    link: "/services#gdpr"
  },
  {
    icon: <Search className="text-blue-700" />,
    title: "SOC 2 Compliance",
    description: "Preparation for SOC 2 audits through robust controls and documentation across all trust service criteria.",
    bullets: [
      "Readiness assessments",
      "Control implementation",
      "Documentation and process setup",
      "Audit support"
    ],
    link: "/services#soc-2"
  },
  {
    icon: <ChevronDown className="text-orange-700" />,
    title: "ISO 42001 Compliance",
    description: "Responsible AI governance with risk assessments, bias & ethics framework for ISO 42001.",
    bullets: [
      "AI risk & impact assessment",
      "Ethical framework development",
      "Bias monitoring & reporting",
      "Compliant documentation"
    ],
    link: "/services#iso-42001"
  },
  {
    icon: <Shield className="text-emerald-700" />,
    title: "DPDP Act, 2023 Compliance",
    description: "Supports organizations in meeting the requirements of India's Digital Personal Data Protection Act, 2023, including data protection impact assessments, consent management, and data subject rights implementation.",
    bullets: [
      "DPDP compliance gap assessment",
      "Data protection impact assessment",
      "Consent management processes",
      "Data subject rights implementation"
    ],
    link: "/services#dpdp-act-2023"
  },
];

const Index = () => (
  <div className="min-h-screen bg-[#f8f9fb]">
    <Navbar />
    <main className="pt-28 pb-20 max-w-6xl mx-auto px-4">
      <section className="mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#143066] mb-4 tracking-tight">
            Pragmatech Compliance Partners
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Your partner for seamless ISO, SOC, GDPR, and AI governance compliance.
            <br />
            Consulting tailored for businesses seeking global trust and regulatory confidence.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link to="/services" className="inline-block px-6 py-3 bg-[#143066] text-white font-semibold rounded-lg shadow hover:bg-blue-900 transition-colors">
              View Services
            </Link>
            <Link to="/contact" className="inline-block px-6 py-3 bg-white border border-gray-300 text-[#143066] font-semibold rounded-lg shadow hover:bg-gray-50 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      {/* Services Preview */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Our Compliance Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {serviceData.map((d, i) => (
            <ServiceCard
              key={d.title}
              icon={d.icon}
              title={d.title}
              description={d.description}
              bullets={d.bullets}
              link={d.link}
            />
          ))}
        </div>
      </section>
    </main>
  </div>
);

export default Index;
