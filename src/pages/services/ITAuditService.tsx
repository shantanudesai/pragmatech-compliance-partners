import { Link } from "react-router-dom";
import { SearchCheck, ArrowRight, CheckCircle, Users, FileText, Award } from "lucide-react";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";

const ITAuditService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50 pt-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-100 rounded-full">
                <SearchCheck className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              IT Audit & Assurance
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive IT audit and assurance services including security assessments, compliance audits, and operational reviews for robust IT governance.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/it-audit-questionnaire" 
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300 text-lg"
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
              Comprehensive IT audit and assurance services to evaluate and improve your technology infrastructure and controls.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-green-50 rounded-lg w-fit mb-4">
                <FileText className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Assessments</h3>
              <p className="text-gray-600">
                Comprehensive security assessments to identify vulnerabilities and evaluate the effectiveness of security controls.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-blue-50 rounded-lg w-fit mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance Audits</h3>
              <p className="text-gray-600">
                Detailed compliance audits against industry standards and regulatory requirements for IT governance.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-orange-50 rounded-lg w-fit mb-4">
                <CheckCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Operational Reviews</h3>
              <p className="text-gray-600">
                Comprehensive reviews of IT operations, processes, and controls to identify improvement opportunities.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-purple-50 rounded-lg w-fit mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Assessment & Management</h3>
              <p className="text-gray-600">
                Identification and assessment of IT risks with recommendations for effective risk management strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Benefits of IT Audit & Assurance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strengthen your IT governance and controls while ensuring compliance and operational effectiveness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-green-100 rounded-full w-fit mx-auto mb-4">
                <SearchCheck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Improved IT Governance</h3>
              <p className="text-gray-600">
                Strengthen IT governance frameworks and ensure alignment with business objectives and requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enhanced Security Posture</h3>
              <p className="text-gray-600">
                Identify and address security gaps to improve overall information security and risk management.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-purple-100 rounded-full w-fit mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600">
                Ensure compliance with industry regulations and standards through comprehensive audit assessments.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Strengthen Your IT Governance?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start your IT audit journey today and build robust technology governance and controls.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/it-audit-questionnaire" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 text-lg"
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

export default ITAuditService;
