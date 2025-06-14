
// Pragmatech Compliance Partners Home Page

import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import { ShieldCheck, ShieldLock, FileCode, FileSearch, Gavel, FileShield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const serviceData = [
  {
    icon: <ShieldCheck className="text-blue-600" />,
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
    icon: <ShieldLock className="text-emerald-600" />,
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
    icon: <FileCode className="text-orange-600" />,
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
    icon: <FileSearch className="text-indigo-600" />,
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
    icon: <Gavel className="text-purple-600" />,
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
    icon: <FileShield className="text-teal-600" />,
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
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
    <Navbar />
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pragmatech
            </span>
            <br />
            <span className="text-gray-800">Compliance Partners</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 font-light">
            Your partner for seamless ISO, SOC, GDPR, and AI governance compliance.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-12 font-light">
            Consulting tailored for businesses seeking global trust and regulatory confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link 
              to="/services" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 text-lg"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-200 text-gray-800 font-semibold rounded-full shadow-lg hover:border-blue-200 hover:shadow-xl transition-all duration-300 text-lg"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Compliance Expertise
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to help your organization meet global compliance standards with confidence
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
