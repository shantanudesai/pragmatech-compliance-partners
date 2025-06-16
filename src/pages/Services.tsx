
import Navbar from "@/components/Navbar";
import { Check, Shield, Target, AlertTriangle, CheckCircle2, Users, FileText } from "lucide-react";
import { useEffect } from "react";

const services = [
  {
    anchor: "iso-27001",
    title: "ISO 27001 Compliance",
    description: "Comprehensive guidance to achieve and maintain the world's leading information security standard.",
    keyDeliverables: [
      "Conduct comprehensive gap analysis to identify compliance deficiencies",
      "Perform risk assessments to prioritize information security threats",
      "Develop tailored security policies and procedures",
      "Provide implementation support for ISO 27001 controls",
      "Conduct internal audits to prepare for certification"
    ],
    clientBenefits: [
      "Strengthened information security posture",
      "Compliance with global regulatory requirements", 
      "Competitive edge through ISO 27001 certification",
      "Proactive risk management to prevent breaches"
    ],
    painPoints: [
      "Lack of in-house expertise for ISO 27001 implementation",
      "Resource constraints in managing complex standards",
      "Difficulty navigating certification requirements"
    ]
  },
  {
    anchor: "iso-27701",
    title: "ISO 27701 Compliance",
    description: "Privacy Information Management System (PIMS) implementation for global privacy standards.",
    keyDeliverables: [
      "Perform privacy gap analysis against ISO 27701 standards",
      "Conduct privacy risk assessments to identify vulnerabilities",
      "Develop a Privacy Information Management System (PIMS)",
      "Create data mapping and inventory for personal data processing",
      "Prepare compliance documentation for certification"
    ],
    clientBenefits: [
      "Enhanced protection of personal data",
      "Alignment with global privacy laws, including GDPR and DPDP Act",
      "Increased customer trust through privacy commitment",
      "Streamlined integration with existing ISO 27001 systems"
    ],
    painPoints: [
      "Complexity of complying with multiple privacy regulations",
      "Challenges in mapping and managing personal data",
      "Limited expertise in privacy management systems"
    ]
  },
  {
    anchor: "gdpr",
    title: "GDPR Compliance",
    description: "EU data protection compliance from gap assessment to DSR handling.",
    keyDeliverables: [
      "Conduct GDPR gap assessments to evaluate current practices",
      "Perform Data Protection Impact Assessments (DPIAs) for high-risk activities",
      "Develop GDPR-compliant policies and procedures",
      "Provide staff training on GDPR obligations",
      "Implement processes for managing data subject rights"
    ],
    clientBenefits: [
      "Avoidance of GDPR fines and penalties",
      "Improved data protection and privacy practices",
      "Enhanced customer trust in data handling",
      "Efficient data management processes"
    ],
    painPoints: [
      "Confusion over GDPR's complex legal requirements",
      "Resource limitations for compliance implementation",
      "Challenges with cross-border data transfer compliance"
    ]
  },
  {
    anchor: "soc-2",
    title: "SOC 2 Compliance",
    description: "Audit readiness for SOC 2 with a focus on the five trust service criteria.",
    keyDeliverables: [
      "Conduct readiness assessments for SOC 2 trust criteria",
      "Design and implement controls for security, availability, and privacy",
      "Prepare comprehensive audit documentation",
      "Provide support during SOC 2 audit processes",
      "Develop remediation plans for identified gaps"
    ],
    clientBenefits: [
      "Market differentiation through SOC 2 attestation",
      "Reduced risk of data breaches and incidents",
      "Assurance for clients about data security",
      "Improved operational controls and processes"
    ],
    painPoints: [
      "Difficulty understanding SOC 2 requirements",
      "Time and resource constraints for audit preparation",
      "Challenges maintaining ongoing compliance"
    ]
  },
  {
    anchor: "iso-42001",
    title: "ISO 42001 Compliance",
    description: "AI Governance: Building responsible frameworks for ethical and regulated AI.",
    keyDeliverables: [
      "Develop AI governance frameworks aligned with ISO 42001",
      "Conduct risk assessments for AI systems and applications",
      "Implement ethical AI development practices",
      "Perform compliance audits to ensure adherence",
      "Provide training on AI governance and ethics"
    ],
    clientBenefits: [
      "Responsible and ethical AI deployment",
      "Mitigation of AI-related risks and liabilities",
      "Alignment with emerging AI regulations",
      "Support for innovation within ethical boundaries"
    ],
    painPoints: [
      "Lack of structured AI governance frameworks",
      "Ethical concerns in AI development and use",
      "Uncertainty about AI compliance requirements"
    ]
  },
  {
    anchor: "dpdp-act-2023",
    title: "DPDP Act, 2023 Compliance",
    description: "Supports organizations in meeting the requirements of India's Digital Personal Data Protection Act, 2023.",
    keyDeliverables: [
      "Conduct gap assessments for DPDP Act compliance",
      "Implement consent management systems for data processing",
      "Establish processes for data subject rights requests",
      "Provide support for Data Protection Officer (DPO) functions",
      "Deliver training on DPDP Act obligations"
    ],
    clientBenefits: [
      "Compliance with India's DPDP Act, avoiding penalties",
      "Enhanced protection of personal data",
      "Increased trust from customers and stakeholders",
      "Readiness for data protection audits"
    ],
    painPoints: [
      "Lack of clarity on DPDP Act requirements",
      "Challenges implementing consent mechanisms",
      "Difficulty managing data subject rights requests"
    ]
  }
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Compliance Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet your organization's specific compliance requirements
            </p>
          </div>
          
          <div className="space-y-16">
            {services.map((service) => (
              <section
                key={service.anchor}
                id={service.anchor}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Key Deliverables */}
                    <div className="bg-blue-50 rounded-2xl p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 mr-3">
                          <FileText className="text-blue-600" size={18} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Key Deliverables</h3>
                      </div>
                      <ul className="space-y-3">
                        {service.keyDeliverables.map((item, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-700">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                              <Check className="text-blue-600" size={12} />
                            </div>
                            <span className="text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Client Benefits */}
                    <div className="bg-green-50 rounded-2xl p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-100 mr-3">
                          <Target className="text-green-600" size={18} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Client Benefits</h3>
                      </div>
                      <ul className="space-y-3">
                        {service.clientBenefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-700">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                              <CheckCircle2 className="text-green-600" size={12} />
                            </div>
                            <span className="text-sm leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pain Points Solved */}
                    <div className="bg-orange-50 rounded-2xl p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-100 mr-3">
                          <Shield className="text-orange-600" size={18} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Pain Points Solved</h3>
                      </div>
                      <ul className="space-y-3">
                        {service.painPoints.map((painPoint, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-700">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
                              <AlertTriangle className="text-orange-600" size={12} />
                            </div>
                            <span className="text-sm leading-relaxed">{painPoint}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
