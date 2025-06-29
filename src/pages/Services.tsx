import Navbar from "@/components/Navbar";
import { Check, Shield, Target, AlertTriangle, CheckCircle2, Users, FileText, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

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
  },
  {
    anchor: "it-audit-assurance",
    title: "IT Audit and Assurance Services",
    description: "Comprehensive IT audits to evaluate governance, internal controls, and security processes for improved risk management.",
    keyDeliverables: [
      "Plan and scope IT audits based on client risk priorities and regulatory requirements",
      "Evaluate IT governance, internal controls, and security processes for effectiveness",
      "Audit applications, infrastructure, and third-party vendors for compliance gaps",
      "Deliver detailed audit reports with actionable recommendations for improvement",
      "Support remediation efforts and follow-up audits to ensure issue resolution"
    ],
    clientBenefits: [
      "Improved IT governance and control effectiveness",
      "Reduced operational risks through identified gaps",
      "Enhanced client trust with audit-ready processes",
      "Increased efficiency in IT operations and compliance"
    ],
    painPoints: [
      "Lack of visibility into IT control weaknesses",
      "Resource constraints for conducting thorough audits",
      "Challenges meeting client or regulatory audit expectations"
    ]
  },
  {
    anchor: "healthcare-it-compliance",
    title: "Healthcare IT Compliance (HIPAA & HITRUST)",
    description: "Specialized compliance services for healthcare organizations to protect PHI and meet HIPAA and HITRUST standards.",
    keyDeliverables: [
      "Conduct a gap analysis to assess compliance with HIPAA regulations and HITRUST CSF requirements",
      "Perform risk assessments to identify vulnerabilities in handling Protected Health Information (PHI)",
      "Develop and implement policies for HIPAA Security, Privacy, and Breach Notification Rules",
      "Provide training on HIPAA/HITRUST requirements and best practices for staff",
      "Support HITRUST CSF certification preparation, including audit readiness and remediation"
    ],
    clientBenefits: [
      "Ensured compliance with HIPAA and HITRUST standards, reducing regulatory risks",
      "Enhanced protection of sensitive health information",
      "Increased trust from patients and partners through certification",
      "Streamlined processes for managing PHI securely"
    ],
    painPoints: [
      "Complexity of navigating HIPAA and HITRUST requirements",
      "Lack of in-house expertise to manage health data compliance",
      "Challenges in preparing for HITRUST certification audits"
    ]
  },
  {
    anchor: "iso-9001",
    title: "ISO 9001 Compliance",
    description: "Quality Management System implementation to enhance product/service quality and achieve ISO 9001 certification.",
    keyDeliverables: [
      "Conduct a gap analysis to assess current quality management practices against ISO 9001 standards",
      "Develop a tailored Quality Management System (QMS) with documented processes and procedures",
      "Provide training on ISO 9001 principles and quality management best practices",
      "Perform internal audits to ensure readiness for certification",
      "Support certification audit preparation and post-audit corrective actions"
    ],
    clientBenefits: [
      "Improved product and service quality consistency",
      "Enhanced customer satisfaction and loyalty",
      "Increased operational efficiency through streamlined processes",
      "Competitive advantage with ISO 9001 certification"
    ],
    painPoints: [
      "Inconsistent quality leading to customer complaints",
      "Lack of structured processes for quality management",
      "Challenges in achieving and maintaining certification"
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

                  {/* ISO 27001 ISMS Discovery Questionnaire CTA */}
                  {service.anchor === 'iso-27001' && (
                    <div className="mt-12 bg-gradient-to-r from-[#143066] to-blue-800 rounded-2xl shadow-lg p-8 text-white">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to Start Your ISMS Journey?</h3>
                        <p className="text-blue-100 mb-6 leading-relaxed">
                          Complete our comprehensive Information Security Management System (ISMS) Discovery Questionnaire to assess your current security posture and receive a tailored roadmap for ISO 27001 certification.
                        </p>
                        <Link
                          to="/iso27001-questionnaire"
                          className="inline-flex items-center gap-2 bg-white text-[#143066] font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-md text-lg"
                        >
                          Start ISMS Assessment
                          <ArrowRight size={20} />
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* ISO 27701 Privacy Discovery Questionnaire CTA */}
                  {service.anchor === 'iso-27701' && (
                    <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-700 rounded-2xl shadow-lg p-8 text-white">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to Enhance Your Privacy Management?</h3>
                        <p className="text-purple-100 mb-6 leading-relaxed">
                          Complete our comprehensive Privacy Information Management System (PIMS) Discovery Questionnaire to assess your current privacy posture and receive a tailored roadmap for ISO 27701 certification.
                        </p>
                        <Link
                          to="/iso27701-questionnaire"
                          className="inline-flex items-center gap-2 bg-white text-purple-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-md text-lg"
                        >
                          Start Privacy Assessment
                          <ArrowRight size={20} />
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* ISO 42001 AI Governance Discovery Questionnaire CTA */}
                  {service.anchor === 'iso-42001' && (
                    <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-8 text-white">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to Govern Your AI Systems?</h3>
                        <p className="text-blue-100 mb-6 leading-relaxed">
                          Complete our comprehensive AI Management System (AIMS) Discovery Questionnaire to assess your current AI governance and receive a tailored roadmap for ISO 42001 implementation.
                        </p>
                        <Link
                          to="/iso42001-questionnaire"
                          className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-md text-lg"
                        >
                          Start AI Governance Assessment
                          <ArrowRight size={20} />
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* GDPR Compliance Discovery Questionnaire CTA */}
                  {service.anchor === 'gdpr' && (
                    <div className="mt-12 bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl shadow-lg p-8 text-white">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to Achieve GDPR Compliance?</h3>
                        <p className="text-green-100 mb-6 leading-relaxed">
                          Complete our comprehensive GDPR Compliance Discovery Questionnaire to assess your current data protection practices and receive a tailored roadmap for full GDPR compliance.
                        </p>
                        <Link
                          to="/gdpr-questionnaire"
                          className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-md text-lg"
                        >
                          Start GDPR Assessment
                          <ArrowRight size={20} />
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* SOC 2 Compliance Discovery Questionnaire CTA */}
                  {service.anchor === 'soc-2' && (
                    <div className="mt-12 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl shadow-lg p-8 text-white">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to Achieve SOC 2 Compliance?</h3>
                        <p className="text-cyan-100 mb-6 leading-relaxed">
                          Complete our comprehensive SOC 2 Compliance Discovery Questionnaire to assess your current control environment and receive a tailored roadmap for SOC 2 attestation.
                        </p>
                        <Link
                          to="/soc2-questionnaire"
                          className="inline-flex items-center gap-2 bg-white text-cyan-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-md text-lg"
                        >
                          Start SOC 2 Assessment
                          <ArrowRight size={20} />
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* DPDP Act 2023 Compliance Discovery Questionnaire CTA */}
                  {service.anchor === 'dpdp-act-2023' && (
                    <div className="mt-12 bg-gradient-to-r from-orange-600 to-red-700 rounded-2xl shadow-lg p-8 text-white">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready for India DPDP Act Compliance?</h3>
                        <p className="text-orange-100 mb-6 leading-relaxed">
                          Complete our comprehensive India DPDP Act 2023 Compliance Discovery Questionnaire to assess your current data protection practices and receive a tailored roadmap for compliance.
                        </p>
                        <Link
                          to="/dpdp-questionnaire"
                          className="inline-flex items-center gap-2 bg-white text-orange-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-md text-lg"
                        >
                          Start DPDP Assessment
                          <ArrowRight size={20} />
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* IT Audit and Assurance Discovery Questionnaire CTA */}
                  {service.anchor === 'it-audit-assurance' && (
                    <div className="mt-12 bg-gradient-to-r from-gray-600 to-slate-700 rounded-2xl shadow-lg p-8 text-white">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to Strengthen Your IT Controls?</h3>
                        <p className="text-gray-100 mb-6 leading-relaxed">
                          Complete our comprehensive IT Audit and Assurance Discovery Questionnaire to assess your current IT governance and receive a tailored roadmap for enhanced IT controls and assurance.
                        </p>
                        <Link
                          to="/it-audit-questionnaire"
                          className="inline-flex items-center gap-2 bg-white text-gray-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-md text-lg"
                        >
                          Start IT Audit Assessment
                          <ArrowRight size={20} />
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Healthcare IT Compliance Discovery Questionnaire CTA */}
                  {service.anchor === 'healthcare-it-compliance' && (
                    <div className="mt-12 bg-gradient-to-r from-rose-600 to-pink-700 rounded-2xl shadow-lg p-8 text-white">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to Secure Your Healthcare Data?</h3>
                        <p className="text-rose-100 mb-6 leading-relaxed">
                          Complete our comprehensive Healthcare IT Compliance Discovery Questionnaire to assess your current HIPAA and HITRUST posture and receive a tailored roadmap for healthcare compliance.
                        </p>
                        <Link
                          to="/healthcare-it-questionnaire"
                          className="inline-flex items-center gap-2 bg-white text-rose-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-md text-lg"
                        >
                          Start Healthcare Compliance Assessment
                          <ArrowRight size={20} />
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* ISO 9001 QMS Discovery Questionnaire CTA */}
                  {service.anchor === 'iso-9001' && (
                    <div className="mt-12 bg-gradient-to-r from-amber-600 to-orange-700 rounded-2xl shadow-lg p-8 text-white">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Quality Management?</h3>
                        <p className="text-amber-100 mb-6 leading-relaxed">
                          Complete our comprehensive Quality Management System (QMS) Discovery Questionnaire to assess your current quality processes and receive a tailored roadmap for ISO 9001 certification.
                        </p>
                        <Link
                          to="/iso9001-questionnaire"
                          className="inline-flex items-center gap-2 bg-white text-amber-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-md text-lg"
                        >
                          Start QMS Assessment
                          <ArrowRight size={20} />
                        </Link>
                      </div>
                    </div>
                  )}
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
