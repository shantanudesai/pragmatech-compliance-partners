
// Pragmatech Compliance Partners Home Page

import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import { File, FilePlus, FileMinus, Search, Check, ChevronDown } from "lucide-react";
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
    description: "Implementing a Privacy Information Management System (PIMS) for global privacy and India's DPDP Act, 2023.",
    bullets: [
      "PIMS implementation",
      "Privacy policy drafting",
      "Data mapping & impact assessment",
      "DPDP Act, 2023 compliance",
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
    icon: <Check className="text-emerald-700" />,
    title: "NIST Compliance",
    description: "Helping organizations comply with NIST SP 800-171 to protect Controlled Unclassified Information (CUI).",
    bullets: [
      "NIST 800-171 gap analysis",
      "Policy/procedure guidance",
      "CUI mapping & protection strategies",
      "Preparation for assessments"
    ],
    link: "/services#nist"
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
            Your partner for ISO, SOC, GDPR, and AI governance compliance.
            Consulting tailored for Indian businesses seeking global trust and regulatory confidence.
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
