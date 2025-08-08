import { Link } from "react-router-dom";
import { FileLock2, ArrowRight, CheckCircle, Users, FileText, Award } from "lucide-react";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";

const DPDPService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50 pt-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-violet-100 rounded-full">
                <FileLock2 className="h-12 w-12 text-violet-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              DPDP Act, 2023 Compliance
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive Digital Personal Data Protection Act compliance services for Indian organizations managing personal data processing and protection requirements.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/dpdp-questionnaire" 
                className="inline-flex items-center justify-center px-8 py-4 bg-violet-600 text-white font-semibold rounded-full shadow-lg hover:bg-violet-700 hover:shadow-xl transition-all duration-300 text-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive DPDP Act 2023 compliance services to ensure your organization meets all Indian data protection requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-violet-50 rounded-lg w-fit mb-4">
                <FileText className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">DPDP Framework Implementation</h3>
              <p className="text-gray-600">
                Development and implementation of comprehensive data protection frameworks aligned with DPDP Act requirements.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-blue-50 rounded-lg w-fit mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy Notice & Consent Management</h3>
              <p className="text-gray-600">
                Creation of DPDP-compliant privacy notices and implementation of robust consent management systems.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-emerald-50 rounded-lg w-fit mb-4">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Principal Rights Framework</h3>
              <p className="text-gray-600">
                Implementation of processes to handle data principal requests and maintain ongoing compliance obligations.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-purple-50 rounded-lg w-fit mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cross-border Transfer Compliance</h3>
              <p className="text-gray-600">
                Guidance on cross-border data transfer requirements and implementation of appropriate safeguards.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Benefits of DPDP Act Compliance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ensure regulatory compliance in India while building trust with customers and avoiding significant penalties.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-violet-100 rounded-full w-fit mx-auto mb-4">
                <FileLock2 className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600">
                Avoid penalties and ensure compliance with India's comprehensive data protection legislation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-green-100 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Confidence</h3>
              <p className="text-gray-600">
                Build confidence with Indian customers and business partners through demonstrable compliance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-purple-100 rounded-full w-fit mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Continuity</h3>
              <p className="text-gray-600">
                Ensure uninterrupted business operations in the Indian market through proactive compliance.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Comply with DPDP Act 2023?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start your DPDP Act compliance journey today and secure your operations in the Indian market.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/dpdp-questionnaire" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-violet-600 font-semibold rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 text-lg"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DPDPService;
